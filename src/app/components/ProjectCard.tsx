import React, { ReactNode } from "react";
import Image from "next/image";
import folder from "../../../public/folder.svg";
import linkIcon from "../../../public/link.svg";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tools: ReactNode[];
  icon: string;
  href: string;
  repos?: string;
};

const ProjectCard = ({
  title,
  description,
  tools,
  href,
  icon,
  repos,
}: ProjectCardProps) => (
  <div
    className="w-[340px] h-[340px] bg-black text-white p-8 rounded-md flex flex-col justify-between gap-4 transform transition-transform duration-300 ease-out hover:scale-105"
 
  >
    <div className="flex justify-between">
      <Image src={folder} className="" alt="icon" width={24} />
      <div className="flex items-center gap-4">
        {repos && (
          <Link href={repos}>
            <Image
              src={icon}
              className="hover:opacity-80 transition-opacity duration-200"
              alt="icon"
              width={21}
            />
          </Link>
        )}
        <Link href={href}>
          <Image
            src={linkIcon}
            className="hover:opacity-80 transition-opacity duration-200"
            alt="icon"
            width={24}
          />
        </Link>
      </div>
    </div>
    <div className="text-xl font-bold">{title}</div>
    <p className="text-md mb-2">{description}</p>
    <div className="flex flex-wrap gap-4 items-center">
      {tools.map((tool, index) => (
        <span
          key={index}
          className="px-2 py-1 rounded transition-colors duration-200"
        >
          {tool}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
