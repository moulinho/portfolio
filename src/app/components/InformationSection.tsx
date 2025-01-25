import Image from 'next/image'
import React from 'react'



type InformationSectionProps = {
    image: string;
    Icons: { icon: string }[];
}

const InformationSection = ({image,Icons }:InformationSectionProps) => {
  return (
    <div className="text-center lg:text-left ">
    <h1>
      <span className="text-4xl font-bold">Sereme Abdoulaye</span>
    </h1>
    <h3 className="text-lg text-gray-600 mt-2">
      Ingénieur logiciel
    </h3>
    <p className="mt-4 text-gray-700">
      Je crée des expériences numériques accessibles et parfaites pour
      le Web et Mobile.
    </p>
    <div className="flex justify-center lg:justify-start items-center gap-4 mt-6">
      {Icons.map((icon, index) => (
        <span
          key={index}
          className="bg-white p-3 rounded-full hover:shadow-lg transition-all"
        >
          <Image src={icon.icon} alt="icon" width={30} />
        </span>
      ))}
    </div>
    <Image
      className="rounded-full w-full h-64 mt-4"
      src={image}
      alt="Profile Picture"
    />
  </div>
  )
}

export default InformationSection