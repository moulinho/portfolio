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
    <h2 className="text-2xl font-bold ">{title}</h2>
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
      {title.includes("About") && (
        <Link
          href="https://docs.google.com/document/d/1zpzvsBe7vHZe8_2B3ijHoIpgt5mfH3Z1/edit?usp=sharing&ouid=117967692092447813414&rtpof=true&sd=true"
          target="_blank"
          className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-all"
        >
          Download my CV
        </Link>
      )}
    </span>
    </div>
    {children}
  </section>
);

export default Section;
