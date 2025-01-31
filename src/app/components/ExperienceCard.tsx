import React, { ReactNode } from "react";

type ExperienceCardProps = {
  role: ReactNode;
  company: ReactNode;
  date: string;
  description: ReactNode;
  skills: string[];
  location: string;
};

const ExperienceCard = ({
  role,
  company,
  date,
  description,
  skills,
  location,
}: ExperienceCardProps) => (
  <div className="bg-white p-4 rounded-md  mb-8">
    <div className="flex gap-4 items-center">
         <h3 className="text-xl font-semibold">{role}</h3>
    <span className="text-lg text-gray-700">
     <span className="text-blue-700">{company}</span>
    </span>
    </div>
    <div className="text-gray-600 text-sm mt-2" >{date} | {location} </div>
   
    <div className="">{description}</div>
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
