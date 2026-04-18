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
      className="block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <div
        role="article"
        aria-label={title}
        className="w-[340px] h-[340px] bg-black text-white p-8 rounded-md flex flex-col justify-between gap-4 transform transition-transform duration-300 ease-out motion-reduce:transition-none hover:scale-105 cursor-pointer group"
      >
        <div className="flex justify-between">
          <Image
            src={folder}
            alt=""
            aria-hidden="true"
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
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                <Image
                  src={iconMap[icon]}
                  className="hover:opacity-80 transition-opacity duration-200 motion-reduce:transition-none"
                  alt=""
                  aria-hidden="true"
                  width={21}
                />
              </Link>
            )}
            <Image
              src={linkIcon}
              className="transition-transform duration-200 motion-reduce:transition-none group-hover:scale-110"
              alt=""
              aria-hidden="true"
              width={24}
            />
          </div>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-md mb-2">{description}</p>
        <ul
          className="flex flex-wrap gap-4 items-center list-none p-0 m-0"
          aria-label={t("projectCard.technologies")}
        >
          {tools.map((tool) => (
            <li
              key={tool}
              className="px-2 py-1 rounded transition-colors duration-200"
            >
              <TechIcon name={tool} size={30} />
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ProjectCard;
