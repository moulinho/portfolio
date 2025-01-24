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
  <section className="my-8 text-base/7">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

const Home = () => {
  const experiences = [
    {
      role: (
        <span className="font-semibold"> Chef d&apos;équipe Front-End</span>
      ),
      company: "Legafrik",
      date: "Juillet 2023 - Present",
      description: (
        <div className="text-base/7">
          <p className="">
            En tant que chef d'équipe Front-End, chargé de la coordination et
            l'orientation de l'équipe qui se concentre sur le développement des
            interfaces utilisateur, des fonctionnalités et l'expérience
            utilisateur globale.
          </p>
          <p>
            Travaillez en étroite collaboration avec des équipes
            interfonctionnelles, notamment des développeurs, des concepteurs et
            des chefs de produit, pour mettre en œuvre et défendre les
            meilleures pratiques en matière d'accessibilité Web.
          </p>
        </div>
      ),
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
      <div className="flex justify-center mb-24">
        <Header />
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          {/* About Section */}
          <Section title="A propos">
            <p>
              Je suis un développeur passionné par la création d&apos;interfaces
              utilisateur accessibles et parfaites au pixel près, qui associent
              un design réfléchi à une ingénierie robuste. Mon travail préféré
              se situe à l&apos;intersection de la conception et du
              développement, créant des expériences qui non seulement sont
              superbes, mais sont méticuleusement conçues pour la performance et
              la convivialité.
            </p>
            <br />
            <p>
              Actuellement, je suis ingénieur front-end chez Legafrik,
              spécialisé dans la numerisation de creation d&apos;entreprise. Je
              contribue à la création et à la maintenance des composants
              d&apos;interface utilisateur qui alimentent le front-end de
              Legafrik, garantissant que notre plateforme répond aux normes
              d&apos;accessibilité Web et aux meilleures pratiques pour offrir
              une expérience utilisateur inclusive.
            </p>
            <br />
            <p>
              Par le passé, j&apos;ai eu l&apos;occasion de développer des
              logiciels dans des environnements très divers, des agences de
              construction de logement, entreprises specialisee dans la
              techonologie agricole et entreprise de vente de logiciel sur
              mesure.
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
