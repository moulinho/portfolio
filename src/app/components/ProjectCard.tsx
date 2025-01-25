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
  <div className="bg-black text-white p-8 rounded-md flex flex-col justify-between gap-4">
    <div className="flex justify-between">
      <Image src={folder} className="" alt="icon" width={24} />
      <div className="flex items-center gap-4">
        {repos && ( 
          <Link href={repos}>
            <Image src={icon} className="" alt="icon" width={21} />
          </Link>
        )}

        <Link href={href}>
          <Image src={linkIcon} className="" alt="icon" width={24} />
        </Link>
      </div>
      {/* <Image src= className="" alt="" /> */}
    </div>
    <div className="text-xl font-bold">{title}</div>
    <p className="text-md mb-2">{description}</p>
    <div className="flex flex-wrap gap-4 items-center ">
      {tools.map((tool, index) => (
        <span key={index} className=" px-2 py-1 rounded text-sm">
          {tool}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
