# provision.ps1 — One-time setup: Azure Static Web App + service principal for OIDC
#
# Uses Workload Identity Federation (OIDC) — no secrets stored anywhere.
# The pipeline authenticates to Azure via federated identity and fetches
# the SWA deployment token at runtime.
#
# Prerequisites:
#   az login
#   az extension add --name azure-devops
#
# Usage:
#   .\scripts\provision.ps1 `
#     -OrgUrl   "https://dev.azure.com/YOUR-ORG" `
#     -Project  "YOUR-PROJECT" `
#     -Pipeline "seersware-portal"

param(
    [Parameter(Mandatory)][string]$OrgUrl,
    [Parameter(Mandatory)][string]$Project,
    [Parameter(Mandatory)][string]$Pipeline,
    [string]$ResourceGroup   = "seersware-rg",
    [string]$AppName         = "seersware",
    [string]$Location        = "eastus2",
    [string]$SpName          = "seersware-pipeline-sp"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$subId     = az account show --query "id" --output tsv
$tenantId  = az account show --query "tenantId" --output tsv
$subName   = az account show --query "name" --output tsv

Write-Host "`n==> Creating resource group '$ResourceGroup'..."
az group create --name $ResourceGroup --location $Location --output none

Write-Host "==> Creating Azure Static Web App '$AppName' (free tier)..."
az staticwebapp create `
    --name $AppName `
    --resource-group $ResourceGroup `
    --location $Location `
    --sku Free `
    --output none

$swaId = az staticwebapp show `
    --name $AppName `
    --resource-group $ResourceGroup `
    --query "id" --output tsv

Write-Host "==> Creating service principal '$SpName'..."
$sp = az ad sp create-for-rbac `
    --name $SpName `
    --role Contributor `
    --scopes $swaId `
    --output json | ConvertFrom-Json

Write-Host "==> Configuring Azure DevOps..."
az devops configure --defaults organization=$OrgUrl project=$Project

# Determine the OIDC issuer and subject that Azure DevOps will use
$issuer  = "https://vstoken.dev.azure.com/$((($OrgUrl -split '/')[-1]))"
$pipelineId = az pipelines show --name $Pipeline --query "id" --output tsv 2>$null
$subject = "sc://$((($OrgUrl -split '/')[-1]))/$Project/seersware-svc"

Write-Host "==> Adding federated credential to service principal..."
$fedCred = @{
    name        = "azdo-seersware-svc"
    issuer      = $issuer
    subject     = $subject
    audiences   = @("api://AzureADTokenExchange")
    description = "Azure DevOps Workload Identity Federation for seersware pipeline"
} | ConvertTo-Json -Depth 5

az ad app federated-credential create `
    --id $sp.appId `
    --parameters $fedCred `
    --output none

Write-Host "==> Creating Azure DevOps service connection 'seersware-svc'..."
$endpointJson = @{
    name          = "seersware-svc"
    type          = "AzureRM"
    authorization = @{
        scheme     = "WorkloadIdentityFederation"
        parameters = @{
            serviceprincipalid = $sp.appId
            tenantid           = $tenantId
        }
    }
    data = @{
        subscriptionId   = $subId
        subscriptionName = $subName
        environment      = "AzureCloud"
        scopeLevel       = "Subscription"
        creationMode     = "Manual"
    }
    isShared = $false
} | ConvertTo-Json -Depth 10

$endpoint = az devops service-endpoint create `
    --service-endpoint-configuration ($endpointJson | Out-String) `
    --query "id" --output tsv

az devops service-endpoint update `
    --id $endpoint `
    --enable-for-all-pipelines true `
    --output none

$hostname = az staticwebapp show `
    --name $AppName `
    --resource-group $ResourceGroup `
    --query "defaultHostname" --output tsv

Write-Host "`n==> Done. No secrets stored in Azure DevOps."
Write-Host "  Static Web App  : https://$hostname"
Write-Host "  Service conn    : seersware-svc (Workload Identity Federation)"
Write-Host "  Service principal: $($sp.appId)"
Write-Host "`nThe pipeline fetches the SWA deployment token at runtime using the service"
Write-Host "connection — nothing is stored in Library or environment variables."
