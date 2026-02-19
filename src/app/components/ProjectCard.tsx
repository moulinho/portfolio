import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import folder from "../../../public/folder.svg";
import file from "../../../public/file.svg";
import github from "../../../public/github.svg";
import linkIcon from "../../../public/link.svg";
import Link from "next/link";
import TechIcon from "./TechIcon";

type ProjectCardProps = {
  title: string;
  description: string;
  tools: string[];
  icon: "folder" | "file" | "github";
  href: string;
  repos?: string;
};

const iconMap = {
  folder,
  file,
  github,
};

const ProjectCard = ({
  title,
  description,
  tools,
  href,
  icon,
  repos,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("projectCard.viewProject", { title })}
      className="block"
    >
      <div className="w-[340px] h-[340px] bg-black text-white p-8 rounded-md flex flex-col justify-between gap-4 transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer group">
        <div className="flex justify-between">
          <Image
            src={folder}
            alt={t("projectCard.folderIcon")}
            width={24}
          />
          <div className="flex items-center gap-4">
            {repos && (
              <Link
                href={repos}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("projectCard.viewRepository")}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={iconMap[icon]}
                  className="hover:opacity-80 transition-opacity duration-200"
                  alt={t("projectCard.repositoryIcon")}
                  width={21}
                />
              </Link>
            )}
            <Image
              src={linkIcon}
              className="transition-transform duration-200 group-hover:scale-110"
              alt={t("projectCard.externalLink")}
              width={24}
            />
          </div>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-md mb-2">{description}</p>
        <div className="flex flex-wrap gap-4 items-center">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-1 rounded transition-colors duration-200"
            >
              <TechIcon name={tool} size={30} />
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
