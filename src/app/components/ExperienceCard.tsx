import React, { ReactNode } from "react";

type ExperienceCardProps = {
  role: ReactNode;
  company: ReactNode;
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
  <div className="bg-white p-4 rounded-md  mb-8">
    <div className="flex gap-4 items-center">
         <h3 className="text-xl font-semibold">{role}</h3>
    <span className="text-lg text-gray-700">
     <span className="hover:text-blue-700">{company}</span>  | {date}
    </span>
    </div>
   
    <div className="my-6">{description}</div>
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
