import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  id?: string;
};
const Section = ({ title, children, id }: SectionProps) => (
  <section className="my-5 text-base/7" id={id}>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

export default Section;
