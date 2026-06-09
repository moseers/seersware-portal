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
      title: 'À propos de Seersware',
      body: "Seersware est une firme de conseil TI basée à Montréal. Nous aidons les organisations à transformer leurs défis technologiques en solutions durables — de l'architecture des pipelines à l'adoption de l'IA. Notre approche est pragmatique : nous livrons de la valeur concrète, quelle que soit l'échelle.",
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
      title: 'About Seersware',
      body: 'Seersware is a Montréal-based IT consulting firm. We help organizations turn complex technology challenges into sustainable solutions — from pipeline architecture to AI adoption. Our approach is pragmatic: we deliver concrete value, regardless of scale.',
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
