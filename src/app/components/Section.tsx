import Link from "next/link";
import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  id?: string;
};

type CvDownloadProps = {
  href: string;
  children: ReactNode;
};

function CvDownload({ href, children }: CvDownloadProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-all"
    >
      {children}
    </Link>
  );
}
const Section = ({ title, children, id }: SectionProps) => (
  <section className="my-5 text-base/7" id={id}>
    <div className="flex items-center justify-between mb-4">
    <h2 className="text-2xl font-bold ">{title}</h2>
    <span className="text-gray-500 text-sm">
      
      {title.includes("propos") && (
        <CvDownload href="https://drive.google.com/file/d/1Tm2OZYHw3pJUoceCaGDrUzNl0alwkyTQ/view?usp=sharing">
          Télécharger mon CV
        </CvDownload>
      )}
       
      {title.includes("About") && (
        <CvDownload href="https://drive.google.com/file/d/17st9co3roVkKtgI62fdV0sDr6TTAFNFf/view?usp=sharing">
          Download my CV
        </CvDownload>
      )}
         
    </span>
    </div>
    {children}
  </section>
);

export default Section;
