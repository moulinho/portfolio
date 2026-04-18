import React from "react";
import Image from "next/image";
import folder from "../../../public/folder.svg";
import TechIcon from "./TechIcon";
import Link from "next/link";
import linkIcon from "../../../public/link.svg";
import { useTranslation } from "react-i18next";

type ProjectDesignProps = {
  title: string;
  description: string;
  tools: string[];
  backgroundImage?: string;
  href?: string;
  icon?: "folder" | "file" | "github";
};

const ProjectDesign = ({
  title,
  description,
  tools,
  backgroundImage,
  href,
}: ProjectDesignProps) => {
  const { t } = useTranslation();

  const card = (
    <div
      role="article"
      aria-label={title}
      className="w-[340px] h-[340px] bg-gray-100 text-white p-8 rounded-xl flex flex-col justify-between gap-4 transform transition-all duration-300 ease-out motion-reduce:transition-none hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
    >
      {/* Background image — Next.js Image for optimization (WebP, srcSet, lazy) */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              aria-hidden="true"
              fill
              sizes="340px"
              className="object-cover transition-transform duration-700 ease-in-out motion-reduce:transition-none group-hover:scale-110"
              loading="lazy"
            />
          </div>
          {/* Overlay via CSS group-hover — no JS state, no re-renders */}
          <div aria-hidden="true" className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition-colors duration-700 motion-reduce:transition-none" />
        </>
      )}

      {/* Header */}
      <div className="relative z-10 flex justify-between">
        <Image
          src={folder}
          alt=""
          aria-hidden="true"
          width={24}
          className="drop-shadow-md"
        />
        {/* Icon is decorative — link itself carries the accessible label */}
        {href && (
          <Image
            src={linkIcon}
            alt=""
            aria-hidden="true"
            className="transition-transform duration-200 motion-reduce:transition-none group-hover:scale-110"
            width={24}
          />
        )}
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-2xl font-bold">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-lg leading-relaxed drop-shadow-md line-clamp-3">
        {description}
      </p>

      {/* Tools */}
      <ul
        className="relative z-10 flex flex-wrap gap-3 items-center list-none p-0 m-0"
        aria-label={t("projectCard.technologies")}
      >
        {tools.map((tool) => (
          <li
            key={tool}
            className="p-1 rounded-md bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
          >
            <TechIcon name={tool} size={28} />
          </li>
        ))}
      </ul>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("projectCard.viewProject", { title })}
        className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {card}
      </Link>
    );
  }

  return <div className="block">{card}</div>;
};

export default ProjectDesign;
