import React, { ReactNode } from "react";

type ExperienceCardProps = {
  role: ReactNode;
  company: string;
  date: string;
  description: ReactNode;
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
    <div className="flex gap-4 items-center">
         <h3 className="text-xl font-semibold">{role}</h3>
    <span className="text-lg text-gray-700">
      {company} | {date}
    </span>
    </div>
   
    <p className="my-2">{description}</p>
    <div className="flex flex-wrap gap-2 ">
      {skills.map((skill, index) => (
        <span key={index} className="bg-gray-300 px-2 py-1 rounded-full text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceCard;
