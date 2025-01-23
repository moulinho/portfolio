import React from "react";
type ProjectCardProps = {
  title: string;
  description: string;
  tools: string[];
};
const ProjectCard = ({ title, description, tools }: ProjectCardProps) => (
  <div className="bg-black text-white p-4 rounded-md shadow mb-4">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm mb-2">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tools.map((tool, index) => (
        <span key={index} className="bg-gray-700 px-2 py-1 rounded text-sm">
          {tool}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
