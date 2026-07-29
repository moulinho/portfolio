export interface ExperienceData {
  roleKey: string | null;
  company: string | null;
  companyLink?: string;
  dateKey: string;
  locationKey: string;
  descriptionKey?: string;
  descriptionIntroKey?: string;
  descriptionKeys?: string[];
  timeline?: TimelineItemData[];
  skills: string[];
}

export interface TimelineItemData {
  titleKey: string;
  dateKey: string;
  descriptionKeys: string[];
  link: string;
  linkText: string;
}

export const experiencesData: ExperienceData[] = [
 
  {
    roleKey: "experience.freelance",
    company: "Freelance",
    dateKey: "experience.freelance_date",
    locationKey: "experience.freelance_location",
    descriptionIntroKey: "experience.freelance_desc_intro",
    descriptionKeys: [
      "experience.freelance_desc_1",
      "experience.freelance_desc_2",
      "experience.freelance_desc_3",
      "experience.freelance_desc_4",
      "experience.freelance_desc_5",
      "experience.freelance_desc_6",
      "experience.freelance_desc_7",
      "experience.freelance_desc_8",
      "experience.freelance_desc_9",
    ],
    skills: [
      "JavaScript",
      "Vue.js",
      "Nuxt.js",
      "React.js",
      "Next.js",
      "Angular",
      "React Native",
      "Capacitor",
      "Node.js",
      "Nest.js",
      "Strapi",
      "Directus",
      "Quasar Framework",
      "Figma",
      "Adobe XD",
    ],
  }, {
    roleKey: "experience.simdri",
    company: "SIMDRI & SERVICHAIN",
    dateKey: "experience.simdri_date",
    locationKey: "experience.simdri_location",
    descriptionKeys: [
      "experience.simdri_desc_1",
      "experience.simdri_desc_2",
      "experience.simdri_desc_3",
      "experience.simdri_desc_4",
      "experience.simdri_desc_5",
      "experience.simdri_desc_6",
      "experience.simdri_desc_7",
      "experience.simdri_desc_8",
      "experience.simdri_desc_9",
      "experience.simdri_desc_10",
      "experience.simdri_desc_11",
      "experience.simdri_desc_12",
    ],
    skills: [
      "React",
      "React Native",
      "Node.js",
      "NestJS",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git",
      "Blockchain",
      "Web3",
    ],
  },
  {
    roleKey: null,
    company: null,
    dateKey: "",
    locationKey: "",
    timeline: [
      {
        titleKey: "experience.legafrik_lead",
        dateKey: "experience.legafrik_lead_date",
        descriptionKeys: [
          "experience.legafrik_lead_desc1",
          "experience.legafrik_lead_desc2",
        ],
        link: "https://www.legafrik.com/",
        linkText: "Legafrik",
      },
      {
        titleKey: "experience.legafrik_fullstack",
        dateKey: "experience.legafrik_fullstack_date",
        descriptionKeys: ["experience.legafrik_fullstack_desc"],
        link: "https://www.legafrik.com/",
        linkText: "Legafrik",
      },
    ],
    skills: ["JavaScript", "React.js", "TypeScript", "HubSpot", "Laravel"],
  },
  {
    roleKey: "experience.jool",
    company: "Jool International",
    companyLink: "https://jool-international.com/",
    dateKey: "experience.jool_date",
    locationKey: "experience.location",
    descriptionKey: "experience.jool_desc",
    skills: [
      "JavaScript",
      "Vue.js",
      "React.js",
      "Strapi",
      "Node.js",
      "Angular",
      "Quasar Framework",
      "Figma",
      "Adobe XD",
    ],
  },
  {
    roleKey: "experience.wefly",
    company: "WeFly Agri",
    dateKey: "experience.wefly_date",
    locationKey: "experience.location",
    descriptionKey: "experience.wefly_desc",
    skills: [
      "JavaScript",
      "Vue.js",
      "React.js",
      "Strapi",
      "Node.js",
      "Quasar Framework",
      "Adobe XD",
    ],
  },
  {
    roleKey: "experience.wag",
    company: "WAGSystems",
    companyLink: "https://wagsystems.wixsite.com/wagsystems",
    dateKey: "experience.wag_date",
    locationKey: "experience.location",
    descriptionKey: "experience.wag_desc",
    skills: ["JavaScript", "Php", "Jquery"],
  },
];
