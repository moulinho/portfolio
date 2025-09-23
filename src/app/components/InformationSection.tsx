import Image from "next/image";
import Link from "next/link";
// import React, { useEffect } from "react";
// import QrCodeWithLogo from 'qrcode-with-logos'

import Section from "./Section";
import Stacks from "./Stacks";
import { t } from "i18next";

type InformationSectionProps = {
  image: string;
  Icons: { icon: string; href: string }[];
};

const InformationSection = ({  Icons }: InformationSectionProps) => {

  // useEffect(() => {
  //   const imageElement = document.getElementById("image") as HTMLImageElement | null;

  //   if (imageElement) {
  //     new QrCodeWithLogo({
  //       content: "https://github.com/moulinho",
  //       width: 200,
  //       image: imageElement,
  //       logo: {
  //         src: 'https://portfolio-swart-xi-73.vercel.app/sereme.png',
  //       },
  //     });
  //   }
  // }, []); 


  return (
    <div className="text-center lg:text-left ">
      <h1>
        <span className="text-4xl font-bold">{t('hero.name')}</span>
      </h1>
      <h3 className="text-xl text-gray-600 font-semibold mt-2">{t('hero.title')}</h3>
      <p className="mt-4 text-gray-700">
        {t('hero.description')}
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
      {/* <div className="flex justify-between  lg:justify-start  gap-4 mt-6"> */}
       
      <div className="animate-bounce">
        <div className=" h-24 w-24 bg-white  rounded-full animate-bounce"></div>
        <div className=" h-24 w-24 bg-black  rounded-md  animate-bounce"></div>
        <div className=" h-24 w-24 bg-black rotate-45 transform "></div>
      </div>

      {/* <Image src={''} id="image" alt="" /> */}
        {/* </div> */}
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
