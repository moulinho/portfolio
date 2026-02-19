export interface ProjectData {
  title?: string;
  titleKey?: string;
  descriptionKey: string;
  tools: string[];
  icon: "folder" | "file" | "github";
  href: string;
  repos?: string;
}

export interface DesignProjectData {
  title: string;
  descriptionKey?: string;
  description?: string;
  backgroundImage: string;
  tools: string[];
}

export const projectsData: ProjectData[] = [
  {
    title: "Mobile Biflaz",
    descriptionKey: "projects.mobile_biflaz.description",
    tools: ["vue", "quasar", "pinia", "capacitor"],
    icon: "folder",
    href: "https://drive.google.com/file/d/1VMbvcfT99k77-ouXhq7-cvQuPW8P9PiB/view?usp=sharing",
  },
  {
    title: "Mobile monbarra",
    descriptionKey: "projects.mobile_monbarra.description",
    tools: ["vue", "quasar", "pinia", "capacitor"],
    icon: "folder",
    href: "https://drive.google.com/file/d/1CZUcxdQ5AdqMCklE7tVHREs1Uc34vfH0/view",
  },
  {
    title: "Datagreff",
    descriptionKey: "projects.datagreff.description",
    tools: ["javascript", "react", "redux", "tailwind"],
    icon: "folder",
    href: "https://datagreffe.ci/",
  },
  {
    title: "Legafrik",
    descriptionKey: "projects.legafrik.description",
    tools: ["javascript", "react", "redux", "tailwind"],
    icon: "file",
    href: "https://www.legafrik.com/",
  },
  {
    title: "MonBarra",
    descriptionKey: "projects.monbarra.description",
    tools: ["javascript", "vue", "quasar", "scss"],
    icon: "github",
    href: "https://moulinho.github.io/",
  },
  {
    title: "ZIUM",
    descriptionKey: "projects.zium.description",
    tools: ["javascript", "next", "css"],
    icon: "github",
    href: "https://ziums.vercel.app/",
  },
  {
    titleKey: "projects.card_creation.title",
    descriptionKey: "projects.card_creation.description",
    tools: ["javascript", "next", "css", "tailwind"],
    icon: "github",
    repos: "https://github.com/moulinho/carte-project",
    href: "https://carte-project.vercel.app/",
  },
  {
    titleKey: "projects.shopping.title",
    descriptionKey: "projects.shopping.description",
    tools: ["javascript", "nuxt", "pinia", "bootstrap"],
    icon: "github",
    repos: "https://github.com/moulinho/shopping-website-Nuxt3-i18n-pinia",
    href: "https://shopping-website-nuxt3-i18n-pinia.vercel.app/",
  },
  {
    titleKey: "projects.movie_store.title",
    descriptionKey: "projects.movie_store.description",
    tools: ["javascript", "vue", "quasar", "scss"],
    icon: "github",
    repos: "https://github.com/moulinho/Movie-Store-QuasarFramework",
    href: "https://movie-store-quasar-framework.vercel.app/#/",
  },
  {
    titleKey: "projects.sticky_note.title",
    descriptionKey: "projects.sticky_note.description",
    tools: ["javascript", "css"],
    icon: "github",
    repos: "https://github.com/moulinho/sticky-notes",
    href: "https://sticky-notes-sage-xi.vercel.app/",
  },
  {
    titleKey: "projects.particle_animate.title",
    descriptionKey: "projects.particle_animate.description",
    tools: ["javascript", "css"],
    icon: "github",
    repos: "https://github.com/moulinho/animation-canvas",
    href: "https://animation-canvas.vercel.app/",
  },
  {
    titleKey: "projects.happy_new_year.title",
    descriptionKey: "projects.happy_new_year.description",
    tools: ["javascript", "css"],
    icon: "github",
    repos: "https://github.com/moulinho/fireworks",
    href: "https://fireworks-azure-pi.vercel.app/",
  },
];

export const designProjectsData: DesignProjectData[] = [
  {
    title: "Moide Ferme",
    description:
      "Moide-ferme est une plateforme de création et de vente de produits d'élevage tels que des équipements, des aliments et des produits de consommation.",
    backgroundImage: "/Moide.png",
    tools: ["figma"],
  },
  {
    title: "Pharmanime",
    description:
      "Un outil numérique de gestion et suivie intelligente d'élevages qui permet d'optimiser la prévention et la performance.",
    backgroundImage: "/Pharmanime_1.png",
    tools: ["figma"],
  },
  {
    title: "Ventura",
    description:
      "Une plateforme de gestion de finance personnelle qui permet aux utilisateurs de suivre leurs dépenses, de créer des budgets et d'obtenir des insights financiers personnalisés.",
    backgroundImage: "/Finance_1.png",
    tools: ["figma"],
  },
  {
    title: "Serre Ivore",
    description:
      "Une plateforme de gestion intelligente de serres agricoles qui permet aux agriculteurs de surveiller et de contrôler les conditions de croissance des plantes, d'optimiser l'utilisation des ressources et d'améliorer les rendements agricoles.",
    backgroundImage: "/SerreIvore.png",
    tools: ["figma"],
  },
  {
    title: "Thea",
    description:
      "Thea est une plateforme de vente de thé de qualité supérieure qui offre une expérience d'achat en ligne conviviale et personnalisée pour les amateurs de thé du monde entier.",
    backgroundImage: "/The_2.png",
    tools: ["figma"],
  },
  {
    title: "Qcm",
    description:
      "Qcm est une plateforme de création et de gestion de questionnaires en ligne, permettant aux utilisateurs de concevoir, distribuer et analyser des tests et sondages de manière efficace.",
    backgroundImage: "/Qcm.png",
    tools: ["figma"],
  },
];
