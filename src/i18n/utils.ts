export type Locale = 'fr' | 'en';

const t = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',
      langToggle: 'EN',
      langToggleHref: '/en/',
    },
    hero: {
      tagline: 'Des solutions concrètes pour vos défis TI',
      sub: "Seersware accompagne les organisations dans leur transformation numérique — pipelines DevSecOps, adoption de l'IA, migration infonuagique et leadership technique.",
      cta: 'Prendre un rendez-vous',
    },
    services: {
      title: 'Nos services',
      offerings: [
        {
          title: 'Implantation de pipelines DevSecOps',
          description:
            'Conception et déploiement de pipelines CI/CD sécurisés et standardisés pour accélérer la livraison de vos applications.',
        },
        {
          title: "Programme d'adoption de l'IA",
          description:
            "Déploiement structuré d'outils IA (GitHub Copilot, agents, MCP) au sein des équipes de développement — avec formation et mesure d'adoption.",
        },
        {
          title: 'Migration infonuagique',
          description:
            "Migration d'applications vers des plateformes infonuagiques modernes, avec automatisation et gouvernance intégrées.",
        },
        {
          title: 'Conseil en leadership technique',
          description:
            "Établissement de communautés de pratique, standardisation des pratiques DevOps et culture de livraison continue à l'échelle.",
        },
      ],
    },
    about: {
      eyebrow: 'À propos',
      title: 'À propos de Seersware',
      body: "Seersware est une firme de conseil TI basée à Montréal. Nous aidons les organisations à transformer leurs défis technologiques en solutions durables — de l'architecture des pipelines à l'adoption de l'IA. Notre approche est pragmatique : nous livrons de la valeur concrète, quelle que soit l'échelle.",
    },
    expertise: {
      title: 'Notre approche',
      items: [
        {
          title: 'CI/CD & Automatisation',
          description: 'Pipelines standardisés, déploiements sans stress et livraison continue pour vos équipes de développement.',
        },
        {
          title: 'Architecture infonuagique Azure',
          description: 'Conception et migration vers Azure avec gouvernance intégrée et infrastructure-as-code.',
        },
        {
          title: "Intégration de l'IA",
          description: 'Déploiement de GitHub Copilot, agents IA et serveurs MCP pour amplifier la productivité de vos développeurs.',
        },
        {
          title: 'Sécurité & Conformité (DevSecOps)',
          description: 'Sécurité intégrée dès la conception — analyse de code, gestion des secrets et politiques automatisées.',
        },
        {
          title: "Leadership d'ingénierie",
          description: 'Accompagnement des gestionnaires et équipes vers des pratiques DevOps matures et durables.',
        },
        {
          title: 'Formation & Adoption',
          description: "Programmes structurés pour accélérer l'adoption des outils et pratiques modernes au sein de vos équipes.",
        },
      ],
    },
    cta: {
      title: 'Prêt à transformer votre organisation TI?',
      sub: 'Réservons un appel de 30 minutes pour discuter de vos défis et explorer comment Seersware peut vous aider.',
      btn: 'Prendre un rendez-vous',
    },
    contact: {
      title: 'Entrons en contact',
      sub: 'Réservez un appel de découverte. Nous discuterons de votre contexte et verrons comment Seersware peut vous accompagner.',
      email: 'Ou écrivez-nous à',
    },
    footer: {
      copy: '© 2025 Seersware Inc. Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      langToggle: 'FR',
      langToggleHref: '/',
    },
    hero: {
      tagline: 'Concrete solutions for your IT challenges',
      sub: 'Seersware partners with organizations on their digital transformation — DevSecOps pipelines, AI adoption, cloud migration, and engineering leadership.',
      cta: 'Book a discovery call',
    },
    services: {
      title: 'Our services',
      offerings: [
        {
          title: 'DevSecOps Pipeline Implementation',
          description:
            'Design and deployment of secure, standardized CI/CD pipelines to accelerate application delivery.',
        },
        {
          title: 'AI Adoption Program',
          description:
            'Structured rollout of AI tools (GitHub Copilot, agents, MCP servers) across development teams — with training and adoption measurement.',
        },
        {
          title: 'Cloud Migration',
          description:
            'Migration of applications to modern cloud platforms, with built-in automation and governance.',
        },
        {
          title: 'Engineering Leadership Advisory',
          description:
            'Establishing communities of practice, standardizing DevOps practices, and scaling a continuous delivery culture.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'About Seersware',
      body: 'Seersware is a Montréal-based IT consulting firm. We help organizations turn complex technology challenges into sustainable solutions — from pipeline architecture to AI adoption. Our approach is pragmatic: we deliver concrete value, regardless of scale.',
    },
    expertise: {
      title: 'Our approach',
      items: [
        {
          title: 'CI/CD & Automation',
          description: 'Standardized pipelines, stress-free deployments, and continuous delivery practices for your development teams.',
        },
        {
          title: 'Azure Cloud Architecture',
          description: 'Cloud design and migration to Azure with built-in governance and infrastructure-as-code.',
        },
        {
          title: 'AI Integration',
          description: 'Deployment of GitHub Copilot, AI agents, and MCP servers to amplify developer productivity.',
        },
        {
          title: 'Security & Compliance (DevSecOps)',
          description: 'Security by design — code analysis, secrets management, and automated policy enforcement.',
        },
        {
          title: 'Engineering Leadership',
          description: 'Coaching managers and teams toward mature, sustainable DevOps practices at scale.',
        },
        {
          title: 'Training & Adoption',
          description: 'Structured programs to accelerate adoption of modern tools and practices across your teams.',
        },
      ],
    },
    cta: {
      title: 'Ready to transform your IT organization?',
      sub: "Let's book a 30-minute call to discuss your challenges and explore how Seersware can help.",
      btn: 'Book a discovery call',
    },
    contact: {
      title: "Let's talk",
      sub: 'Book a discovery call. We will discuss your context and explore how Seersware can help.',
      email: 'Or reach us at',
    },
    footer: {
      copy: '© 2025 Seersware Inc. All rights reserved.',
    },
  },
} as const;

export function useTranslations(locale: Locale) {
  return t[locale];
}
