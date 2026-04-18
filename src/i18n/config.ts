import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        experiences: "Experiences",
        projects: "Projects",
      },
      hero: {
        name: "Sereme Abdoulaye",
        title: "Software Engineer",
        description:
          "As a full-stack engineer, I help companies design customized digital solutions with a focus on performance and business value.",
      },
      about: {
        paragraph1:
          "I am a developer passionate about creating accessible, pixel-perfect user interfaces that combine thoughtful design with robust engineering. My favourite work lies at the intersection of design and development, where I create experiences that are not only aesthetically pleasing, but also meticulously crafted for performance and usability.",
        paragraph2:
          "Currently, I am a freelance full-stack engineer, contributing to the creation and maintenance of user interface components that power all our applications, ensuring that our platform meets web accessibility standards and best practices to provide an inclusive user experience.",
        paragraph3:
          "In the past, I have had the opportunity to develop software in a wide variety of environments, including property development agencies, companies specialising in agricultural technology, and companies marketing bespoke software.",
      },
      position: {
        software_engineer: "Software Engineer",
        full_stack_developer: "Full Stack Developer",
      },
      description: {
        about:
          "I create applications and software that offer accessible digital experiences, perfectly suited to the web and mobile devices.",
      },
      language: {
        switch: "Switch language",
        english: "English",
        french: "Français",
      },
      sections: {
        about: "About",
        experiences: "Experiences",
        projects: "Projects",
      },
      projectCard: {
        viewProject: "View {{title}} project",
        viewRepository: "View source code",
        folderIcon: "Project folder",
        repositoryIcon: "Repository",
        externalLink: "Open project",
        technologies: "Technologies used",
      },
      experience: {
        legafrik_lead: "Front-End Team Lead",
        legafrik_lead_date: "Sept. 2024 - March 2025 | Abidjan, Côte d'Ivoire",
        legafrik_lead_desc1:
          "As a Front-End team lead, responsible for coordinating and guiding the team that focuses on developing user interfaces, features and overall user experience.",
        legafrik_lead_desc2:
          "Work closely with cross-functional teams, including developers, designers and product managers, to implement and advocate for best practices in Web accessibility.",
        legafrik_fullstack: "FullStack Developer",
        legafrik_fullstack_date:
          "July. 2023 - Sept. 2024 | Abidjan, Côte d'Ivoire",
        legafrik_fullstack_desc:
          "As a Full-Stack developer within a dynamic and hardworking team, my daily tasks consist of maintaining, optimizing and integrating new modules in Legafrik's external and internal applications and websites.",
        jool: "Front-end Developer",
        jool_date: "August 2021 - February 2023",
        jool_desc:
          "As a Front End developer within a dynamic, hardworking and collaborative team, my daily tasks consist of creating, styling and delivering high-quality websites, design systems, web applications and digital experiences for clients such as: JOOL ID, FENOPJERCI: NATIONAL FEDERATION OF RURAL YOUTH UNIONS OF CÔTE D'IVOIRE",

        freelance: "Full-Satck Developer",
        freelance_date: "Juillet 2023",
         freelance_desc: "",
        freelance_location:'',
        
        wefly: "Front-end Developer",
        wefly_date: "May 2021 - August 2021",
        wefly_desc:
          "I work on existing projects by implementing new mockups, making them cross-platform and making pages dynamic by adding APIs.",
        wag: "Front-end Developer",
        wag_date: "August 2020 - November 2020",
        wag_desc:
          "I work on existing projects by implementing new mockups, making them cross-platform and making pages dynamic by adding APIs.",
        location: "Abidjan, Côte d'Ivoire",
      },
      projects: {

        moide_ferme: {
          description:
            "Moide-ferme is a platform for creating and selling livestock products such as equipment, food and consumer products.",
        },
        mobile_biflaz: {
          description:
            "Mobile Biflaz is a convenient and affordable carpooling application that connects you with a nearby driver in minutes, anytime and anywhere.",
        },
        mobile_monbarra: {
          description:
            "We offer you job offers from all over the world.",
        },
        datagreff: {
          description:
            "Datagreffe is a platform that allows you to access and collect all legal, judicial and financial information on companies of your choice.",
        },
        legafrik: {
          description:
            "Legafrik is a platform that allows everyone to create their company by generating creation documents in PDF and Word formats from a form.",
        },
        monbarra: {
          description:
            "Your dream job offer site with us with simple design and smooth user journey.",
        },
        zium: {
          description:
            "A web application for selling jewelry, clothing and hats.",
        },
        card_creation: {
          title: "Card creation with illustration",
          description:
            "Let your imagination run wild and make your messages unforgettable!",
        },
        shopping: {
          title: "Shopping website",
          description:
            "A web application for selling clothing and accessories.",
        },
        movie_store: {
          title: "Movie store",
          description: "Application for selecting movies and series.",
        },
        sticky_note: {
          title: "Sticky note",
          description: "Note-taking application.",
        },
        particle_animate: {
          title: "Particle animate",
          description: "Animated particle application.",
        },
        happy_new_year: {
          title: "Happy new year",
          description: "New year wishes application.",
        },
      },
      designProjects: {
        transigo: {
          description:
            "TransiGo is a referenced transport and logistics application. Maritime, air, land, transit and import-export in your pocket.",
        },
        moide_ferme: {
          description:
            "Moide-ferme is a platform for creating and selling livestock products such as equipment, food and consumer products.",
        },
        pharmanime: {
          description:
            "A digital tool for intelligent livestock management and monitoring that optimizes prevention and performance.",
        },
        ventura: {
          description:
            "A personal finance management platform that allows users to track their expenses, create budgets and get personalized financial insights.",
        },
        serre_ivore: {
          description:
            "An intelligent greenhouse management platform that enables farmers to monitor and control plant growing conditions, optimize resource use and improve agricultural yields.",
        },
        thea: {
          description:
            "Thea is a premium tea sales platform that offers a user-friendly and personalized online shopping experience for tea lovers worldwide.",
        },
        qcm: {
          description:
            "Qcm is an online questionnaire creation and management platform, allowing users to design, distribute and analyze tests and surveys efficiently.",
        },
      },
    },
  },
  fr: {
    translation: {
      nav: {
        about: "A propos",
        experiences: "Expériences",
        projects: "Projets",
      },
      hero: {
        name: "Sereme Abdoulaye",
        title: "Ingénieur logiciel",
        description:
          "Ingénieur Full Stack, j’aide les entreprises à concevoir des solutions digitales sur mesure avec un fort accent sur la performance et la valeur métier.",
      },
      about: {
        paragraph1:
          "Je suis un développeur passionné par la création d'interfaces utilisateur accessibles et parfaites au pixel près, qui associent un design réfléchi à une ingénierie robuste. Mon travail préféré se situe à l'intersection de la conception et du développement, créant des expériences qui non seulement sont superbes, mais sont méticuleusement conçues pour la performance et la convivialité.",
        paragraph2:
          "Actuellement, je suis ingénieur full-stack freelance, je contribue à la création et à la maintenance des composants d'interface utilisateur qui alimentent toutes nos applications, garantissant que notre plateforme répond aux normes d'accessibilité Web et aux meilleures pratiques pour offrir une expérience utilisateur inclusive.",
        paragraph3:
          "Par le passé, j'ai eu l'opportunité de développer des logiciels dans une grande variété d'environnements, y compris des agences de développement immobilier, des entreprises spécialisées dans la technologie agricole et des entreprises commercialisant des logiciels sur mesure.",
      },
      position: {
        software_engineer: "Ingénieur logiciel",
        full_stack_developer: "Développeur Full Stack",
      },
      description: {
        about:
          "Je crée des applications et des logiciels offrant des expériences numériques accessibles, parfaitement adaptés au web et aux appareils mobiles.",
      },
      language: {
        switch: "Changer de langue",
        english: "English",
        french: "Français",
      },
      sections: {
        about: "A propos",
        experiences: "Expériences",
        projects: "Projets",
      },
      projectCard: {
        viewProject: "Voir le projet {{title}}",
        viewRepository: "Voir le code source",
        folderIcon: "Dossier du projet",
        repositoryIcon: "Dépôt",
        externalLink: "Ouvrir le projet",
        technologies: "Technologies utilisées",
      },
      experience: {
        legafrik_lead: "Chef d'équipe Front-End",
        legafrik_lead_date: "sept. 2024 - Mars 2025 | Abidjan, Côte d'Ivoire",
        legafrik_lead_desc1:
          "En tant que chef d'équipe Front-End, chargé de la coordination et l'orientation de l'équipe qui se concentre sur le développement des interfaces utilisateur, des fonctionnalités et l'expérience utilisateur globale.",
        legafrik_lead_desc2:
          "Travaillez en étroite collaboration avec des équipes interfonctionnelles, notamment des développeurs, des concepteurs et des chefs de produit, pour mettre en œuvre et défendre les meilleures pratiques en matière d'accessibilité Web.",
        legafrik_fullstack: "Développeur FullStack",
        legafrik_fullstack_date:
          "Juillet. 2023 - Sept. 2024 | Abidjan, Côte d'Ivoire",
        legafrik_fullstack_desc:
          "Occupant le poste de développeur Full-Stack au sein d'une équipe dynamique et très travailleuse, mes tâches au quotidien consistent à maintenir, optimiser et à intégrer des nouveaux modules dans les application et site web de Legafrik en externes et internes.",
        jool: "Développeur front-end",
        jool_date: "Août 2021 - Février 2023",
        jool_desc:
          "En tant que développeur Front End au sein d'une équipe dynamique, très travailleuse et collaborative, mes tâches au quotidien consistent à créer, styliser et livrer des sites Web, des systèmes de conception, des applications web et des expériences numériques de haute qualité pour des clients tels que: JOOL ID, FENOPJERCI: FEDERATION NATIONALE DES UNIONS DE LA JEUNESSE RURALE DE COTE D'IVOIRE",
        freelance: "Ingénieur Full Stack",
        freelance_date: "Juillet 2023",
        freelance_desc: "",
        freelance_location:'',

        wefly: "Développeur front-end",
        wefly_date: "Mai 2021 - Août 2021",
        wefly_desc:
          "J'interviens sur les projets existants en implémentant de nouvelles maquettes, rendre cross-plateforme et rendre les pages dynamiques en ajoutant les API.",
        wag: "Développeur front-end",
        wag_date: "Août 2020 - Novembre 2020",
        wag_desc:
          "J'interviens sur les projets existants en implémentant de nouvelles maquettes, rendre cross-plateforme et rendre les pages dynamiques en ajoutant les API.",
        location: "Abidjan, Côte d'Ivoire",
      },
      projects: {
        moide_ferme: {
          description:
            "Moide-ferme est une plateforme de création et de vente de produits d'élevage tels que des équipements, des aliments et des produits de consommation.",
        },

        mobile_biflaz: {
          description:
            "Mobile Biflaz est une application de covoiturage pratique et abordable qui vous met en relation avec un conducteur à proximité en quelques minutes.",
        },
        mobile_monbarra: {
          description:
            "Nous vous proposons des offres d'emploi provenant du monde entier.",
        },

        datagreff: {
          description:
            "Datagreffe est une plateforme qui vous permet d'accéder et de collecter toutes les informations légales, juridiques et financières sur les entreprises de votre choix.",
        },
        legafrik: {
          description:
            "Legafrik est une plateforme qui permet à chacun de créer son entreprise en générant des documents de création en formats PDF et Word à partir d'un formulaire.",
        },
        monbarra: {
          description:
            "Site d'offre d'emploi de vos rêves avec nous avec un design simples et un parcour utilisateur fluide.",
        },
        zium: {
          description:
            "Une application web de vente de bijoux, vetement et de chapeau.",
        },
        card_creation: {
          title: "Création de carte avec illustration",
          description:
            "Laissez libre cours à votre imagination et faites passer vos messages de manière inoubliable !",
        },
        shopping: {
          title: "Site web de shopping",
          description:
            "Une application web de vente de vetement et d'accessoir.",
        },
        movie_store: {
          title: "Movie store",
          description: "Application de selection de films et de series.",
        },
        sticky_note: {
          title: "Stiky note",
          description: "Application de prise de note.",
        },
        particle_animate: {
          title: "Particule animate",
          description: "Application de particule animée.",
        },
        happy_new_year: {
          title: "Happy new year",
          description: "Application de voeux de bonne année.",
        },
      },
      designProjects: {
        transigo: {
          description:
            "TransiGo est une application de transport et logistique référencées. Maritime, aérien, terrestre, transit et import-export dans votre poche",
        },
        moide_ferme: {
          description:
            "Moide-ferme est une plateforme de création et de vente de produits d'élevage tels que des équipements, des aliments et des produits de consommation.",
        },
        pharmanime: {
          description:
            "Un outil numérique de gestion et suivi intelligente d'élevages qui permet d'optimiser la prévention et la performance.",
        },
        ventura: {
          description:
            "Une plateforme de gestion de finance personnelle qui permet aux utilisateurs de suivre leurs dépenses, de créer des budgets et d'obtenir des insights financiers personnalisés.",
        },
        serre_ivore: {
          description:
            "Une plateforme de gestion intelligente de serres agricoles qui permet aux agriculteurs de surveiller et de contrôler les conditions de croissance des plantes, d'optimiser l'utilisation des ressources et d'améliorer les rendements agricoles.",
        },
        thea: {
          description:
            "Thea est une plateforme de vente de thé de qualité supérieure qui offre une expérience d'achat en ligne conviviale et personnalisée pour les amateurs de thé du monde entier.",
        },
        qcm: {
          description:
            "Qcm est une plateforme de création et de gestion de questionnaires en ligne, permettant aux utilisateurs de concevoir, distribuer et analyser des tests et sondages de manière efficace.",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // default language
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
