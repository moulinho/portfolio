import { StaticImageData } from "next/image";

export interface SocialIcon {
  icon: StaticImageData;
  href: string;
  label: string;
}

export interface Experience {
  role: string | null;
  company: string | React.ReactNode | null;
  date: string;
  location: string;
  descriptionKey?: string;
  timeline?: TimelineItem[];
  skills: string[];
}

export interface TimelineItem {
  titleKey: string;
  dateKey: string;
  descriptionKeys: string[];
  link: string;
  linkText: string;
}

export interface Project {
  title: string;
  titleKey?: string;
  descriptionKey: string;
  tools: string[];
  icon: "folder" | "file" | "github";
  href: string;
  repos?: string;
}

export interface DesignProject {
  title: string;
  descriptionKey?: string;
  description?: string;
  backgroundImage: string;
  tools: string[];
  href: string;
}

export type TechIconName =
  | "javascript"
  | "css"
  | "scss"
  | "bootstrap"
  | "tailwind"
  | "react"
  | "redux"
  | "next"
  | "nuxt"
  | "vue"
  | "quasar"
  | "pinia"
  | "capacitor"
  | "figma"
  | "adobeXD";
