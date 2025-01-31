import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "./Section";
import Stacks from "./Stacks";

type InformationSectionProps = {
  image: string;
  Icons: { icon: string; href: string }[];
};

const InformationSection = ({  Icons }: InformationSectionProps) => {
  return (
    <div className="text-center lg:text-left ">
      <h1>
        <span className="text-4xl font-bold">Sereme Abdoulaye</span>
      </h1>
      <h3 className="text-lg text-gray-600 mt-2">Ingénieur logiciel</h3>
      <p className="mt-4 text-gray-700">
        Je crée des expériences numériques accessibles et parfaites pour le Web
        et Mobile.
      </p>
      <div className="flex justify-center lg:justify-start items-center gap-4 mt-6">
        {Icons.map((icon, index) => (
          <span
            key={index}
            className="bg-white p-3 rounded-full hover:shadow-lg transition-all"
          >
            <Link href={icon.href} target="_blank">
              <Image src={icon.icon} alt="icon" width={30} />
            </Link>
          </span>
        ))}
      </div>
      <Section title="">
        <Stacks />
      </Section>
      {/* <Image
        className="rounded-full w-full h-64 mt-4"
        src={image}
        alt="Profile Picture"
      /> */}
      {/* <div className="p-20 rounded-md w-1/2 bg-black">
      
      </div> */}
      <div className="animate-bounce">
        <div className=" h-24 w-24 bg-white  rounded-full animate-bounce"></div>
        <div className=" h-24 w-24 bg-black  rounded-md  animate-bounce"></div>
        <div className=" h-24 w-24 bg-black rotate-45 transform "></div>
      </div>
      {/* <div className="area " >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div > */}
    </div>
  );
};

export default InformationSection;
