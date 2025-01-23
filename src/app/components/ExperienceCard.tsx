import React from "react";

type ExperienceCardProps = {
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
};

const ExperienceCard = ({
  role,
  company,
  date,
  description,
  skills,
}: ExperienceCardProps) => (
  <div className="bg-gray-100 p-4 rounded-md shadow mb-4">
    <h3 className="text-xl font-semibold">{role}</h3>
    <p className="text-sm text-gray-600">
      {company} | {date}
    </p>
    <p className="my-2">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-gray-300 px-2 py-1 rounded text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceCard;
