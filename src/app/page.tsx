// import Image from "next/image";

import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import github from "../../public/github.svg";
import gmail from "../../public/gmail.svg";
import linkedin from "../../public/linkedin.svg";
import circleImage from "../../public/circleImage.svg";
import React, { ReactNode } from "react";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <section className="my-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

const Home = () => {
  const experiences = [
    {
      role: "Chef d'équipe Front-End",
      company: "Legafrik",
      date: "Juillet 2023 - Present",
      description:
        "Coordination et développement des interfaces utilisateur de Legafrik.",
      skills: ["JavaScript", "React.js", "TypeScript", "HubSpot", "Laravel"],
    },
    {
      role: "Développeur front-end",
      company: "Jool International",
      date: "Août 2021 - Février 2023",
      description:
        "Création d'expériences numériques pour des clients tels que JOOL ID et FENOP.",
      skills: [
        "JavaScript",
        "Vue.js",
        "React.js",
        "Strapi",
        "Node.js",
        "Angular",
      ],
    },
  ];

  const Icons = [
    { icon: github, href: "https://github.com/pierre-lucas-gomez" },
    { icon: gmail, href: "mailto:pierre.lucas.gomez@gmail.com" },
    {
      icon: linkedin,
      href: "https://www.linkedin.com/in/pierre-lucas-gomez-049a561b5/",
    },
    { icon: github, href: "https://github.com/pierre-lucas-gomez" },
  ];

  const projects = [
    {
      title: "Datagreff",
      description:
        "Plateforme pour accéder et collecter des informations légales.",
      tools: ["JS", "React"],
    },
    {
      title: "Legafrik",
      description:
        "Plateforme permettant de créer des documents légaux en ligne.",
      tools: ["JS", "React"],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <Header />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          {/* About Section */}
          <Section title="A propos">
            <p>
              Je suis un développeur passionné par la création d&apos;interfaces
              utilisateur accessibles et parfaites au pixel près.
            </p>
          </Section>

          {/* Experiences Section */}
          <Section title="Expériences">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </Section>

          {/* Projects Section */}
          <Section title="Projets">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </Section>
        </div>
        <div className="">
          <h1>
            <span className="text-3xl font-bold">Sereme Abdoulaye</span>
          </h1>
          <h3>Ingénieur Front End</h3>
          <p>
            Je crée des expériences numériques accessibles et parfaites pour le
            Web et Mobile.
          </p>
          <div className="flex justify-evenly items-center gap-4">
            {Icons.map((icon, index) => (
              <span key={index} className="bg-white p-2 rounded-full">
                <Image src={icon.icon} className="" alt={icon.icon} />
              </span>
            ))}
          </div>
          <Image
            className="rounded-full w-full h-64"
            src={circleImage}
            alt="Profile Picture"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
