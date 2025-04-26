import Link from "next/link";
import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  id?: string;
};
const Section = ({ title, children, id }: SectionProps) => (
  <section className="my-5 text-base/7" id={id}>
    <div className="flex items-center justify-between mb-4">
    <span className="text-2xl font-bold ">{title} </span>
    <span className="text-gray-500 text-sm">
      
      {title.includes("propos") && (
        <Link
          href="https://drive.google.com/file/d/1QwfUSYlrkOiODwUz6zTdkxpAGK30GguI/view?usp=sharing"
          target="_blank"
          className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-all"
        >
          Télécharger mon CV
        </Link>
      )}
    </span></div>
    {children}
  </section>
);

export default Section;
