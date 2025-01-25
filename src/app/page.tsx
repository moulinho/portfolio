// import Image from "next/image";
"use client";
import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import whatsapp from "../../public/whatsapp.svg";
import github1 from "../../public/github1.svg";
import github from "../../public/github.svg";
import gmail from "../../public/gmail.svg";
import file from "../../public/file.svg";
import folder from "../../public/folder.svg";
import linkedin from "../../public/linkedin.svg";
import circleImage from "../../public/circleImage.svg";
import jsIcon from "../../public/javascript.svg";
import cssIcon from "../../public/css.svg";
import sassIcon from "../../public/scss.svg";
import bootstrapIcon from "../../public/Bootstrap.svg";
import tailwindIcon from "../../public/tailwind.svg";
import reactIcon from "../../public/react.svg";
import reduxIcon from "../../public/redux.svg";
import nextIcon from "../../public/next.svg";
import nuxtIcon from "../../public/nuxt.svg";
import vueIcon from "../../public/vue.svg";
import quasarIcon from "../../public/quasar.svg";
import piniaIcon from "../../public/Pinia.svg";
import React, {  useEffect } from "react";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import InformationSection from "./components/InformationSection";
import Section from "./components/Section";



const Home = () => {
  const experiences = [
    {
      role: (
        <span className="font-semibold"> Chef d&apos;équipe Front-End</span>
      ),
      company: <Link href="https://www.legafrik.com/">Legafrik</Link>,
      date: "Juillet 2023 - Present",
      description: (
        <div className="text-base/7">
          <div className="">
            En tant que chef d&apos;équipe Front-End, chargé de la coordination
            et l&apos;orientation de l&apos;équipe qui se concentre sur le
            développement des interfaces utilisateur, des fonctionnalités et
            l&apos;expérience utilisateur globale.
          </div>
          <div>
            Travaillez en étroite collaboration avec des équipes
            interfonctionnelles, notamment des développeurs, des concepteurs et
            des chefs de produit, pour mettre en œuvre et défendre les
            meilleures pratiques en matière d&apos;accessibilité Web.
          </div>
        </div>
      ),
      skills: ["JavaScript", "React.js", "TypeScript", "HubSpot", "Laravel"],
    },
    {
      role: "Développeur front-end",
      company: (
        <Link href="https://jool-international.com/">Jool International</Link>
      ),
      date: "Août 2021 - Février 2023",
      description: (
        <div className="text-base/7">
          En tant que développeur Front End au sein d&apos;une équipe dynamique,
          très travailleuse et collaborative, mes tâches au quotidien consistent
          à créer, styliser et livrer des sites Web, des systèmes de conception,
          des applications web et des expériences numériques de haute qualité
          pour des clients tels que: JOOL ID, FENOPJERCI: FEDERATION NATIONALE
          DES UNIONS DE LA JEUNESSE RURALE DE COTE D&apos;IVOIRE
        </div>
      ),
      skills: [
        "JavaScript",
        "Vue.js",
        "React.js",
        "Strapi",
        "Node.js",
        "Angular",
        "Quasar Framework",
        "Figma",
        "Adobe XD",
      ],
    },
    {
      role: "Développeur front-end",
      company: "WeFly Agri",
      date: "Mai 2021 - Août 2021",
      description: (
        <div className="text-base/7">
          J&apos;interviens sur les projets existants en implémentant de
          nouvelles maquettes, rendre cross-plateforme et rendre les pages
          dynamiques en ajoutant les API.
        </div>
      ),
      skills: [
        "JavaScript",
        "Vue.js",
        "React.js",
        "Strapi",
        "Node.js",
        "Quasar Framework",
        "Adobe XD",
      ],
    },
    {
      role: "Développeur front-end",
      company: (
        <Link href="https://wagsystems.wixsite.com/wagsystems">WAGSystems</Link>
      ),
      date: "Août 2020 -November 2020",
      description: (
        <div className="text-base/7">
          J&apos;interviens sur les projets existants en implémentant de
          nouvelles maquettes, rendre cross-plateforme et rendre les pages
          dynamiques en ajoutant les API.
        </div>
      ),
      skills: ["JavaScript", "Php", "Jquery"],
    },
  ];

  const Icons = [
    { icon: whatsapp, href: "https://github.com/pierre-lucas-gomez" },
    {
      icon: linkedin,
      href: "https://www.linkedin.com/in/pierre-lucas-gomez-049a561b5/",
    },
    { icon: gmail, href: "mailto:pierre.lucas.gomez@gmail.com" },

    { icon: github1, href: "https://github.com/pierre-lucas-gomez" },
  ];

  const projects = [
    {
      title: "Datagreff",
      description:
        "Datagreffe est une plateforme qui vous permet d’accéder et de collecter toutes les informations légales, juridiques et financières sur les entreprises de votre choix.",
      tools: [
        <Image key="jsIcon" src={jsIcon} className="" alt="icon" width={30} />,
        <Image
          key="reactIcon"
          src={reactIcon}
          className=""
          alt="icon"
          width={30}
        />,
        <Image
          key="reduxIocn"
          src={reduxIcon}
          className=""
          alt="icon"
          width={30}
        />,
        <Image
          key="tailwindIcon"
          src={tailwindIcon}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: folder,
      href: "https://datagreffe.ci/",
    },
    {
      title: "Legafrik",
      description:
        "Legafrik est une plateforme qui permet à chacun de créer son entreprise en générant des documents de création en formats PDF et Word à partir d’un formulaire.",
      tools: [
        <Image key="jsIcon" src={jsIcon} className="" alt="icon" width={30} />,
        <Image
          key="reactIcon"
          src={reactIcon}
          className=""
          alt="icon"
          width={30}
        />,
        <Image
          key="reduxIocn"
          src={reduxIcon}
          className=""
          alt="icon"
          width={30}
        />,
        <Image
          key="tailwindIcon"
          src={tailwindIcon}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: file,
      href: "https://www.legafrik.com/",
    },
    {
      title: "Création de carte avec illustration",
      description:
        "Laissez libre cours à votre imagination et faites passer vos messages de manière inoubliable !",
      tools: [
        <Image key="jsIcon" src={jsIcon} className="" alt="icon" width={30} />,
        <Image
          key="nextIcon"
          src={nextIcon}
          className=""
          alt="icon"
          width={35}
        />,
        <Image
          key="cssIcon"
          src={cssIcon}
          className=""
          alt="icon"
          width={30}
        />,
        <Image
          key="tailwindIcon"
          src={tailwindIcon}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: github,
      repos: "https://github.com/moulinho/carte-project",
      href: "https://carte-project.vercel.app/",
    },

    {
      title: "Shopping website",
      description: "Une application web de vente de vetement et d’accessoir",
      tools: [
        <Image key="jsIcon" src={jsIcon} className="" alt="icon" width={30} />,
        <Image
          key="nuxtIcon"
          src={nuxtIcon}
          className=""
          alt="icon"
          width={30}
        />,
        <Image
          key="piniaIcon"
          src={piniaIcon}
          className=""
          alt="icon"
          width={20}
        />,
        <Image
          key="bootstrapIcon"
          src={bootstrapIcon}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: github,
      repos: "https://github.com/moulinho/shopping-website-Nuxt3-i18n-pinia",
      href: "https://shopping-website-nuxt3-i18n-pinia.vercel.app/",
    },
    {
      title: "Movie store",
      description: "Application de selection de films et de series",
      tools: [
        <Image key="jsIcon" src={jsIcon} className="" alt="icon" width={30} />,
        <Image
          key="vueIcon"
          src={vueIcon}
          className=""
          alt="icon"
          width={30}
        />,
        <Image
          key="quasarIcon"
          src={quasarIcon}
          className=""
          alt="icon"
          width={30}
        />,
        <Image
          key="sassIcon"
          src={sassIcon}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: github,
      repos: "https://github.com/moulinho/Movie-Store-QuasarFramework",
      href: "https://movie-store-quasar-framework.vercel.app/#/",
    },
    {
      title: "ZIUM",
      description:
        "Une application web de vente de bijoux, vetement et de chapeau",
      tools: [
        <Image key="jsIcon" src={jsIcon} className="" alt="icon" width={30} />,
        <Image
          key="nextIcon"
          src={nextIcon}
          className=""
          alt="icon"
          width={35}
        />,
        <Image
          key="cssIcon"
          src={cssIcon}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: github,
      repos: "https://github.com/moulinho/Ziums",
      href: "https://ziums.vercel.app/",
    },
    {
      title: "Stiky note",
      description: "Application de prise de note",
      tools: [
        <Image key="jsIcon" src={jsIcon} className="" alt="icon" width={30} />,
        <Image
          key="cssIcon"
          src={cssIcon}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: github,
      repos: "https://github.com/moulinho/sticky-notes",
      href: "https://sticky-notes-sage-xi.vercel.app/",
    },
    {
      title: "Particule animate",
      description: "Application de particule animée",
      tools: [
        <Image key="jsIcon" src={jsIcon} className="" alt="icon" width={30} />,
        <Image
          key="cssIcon"
          src={cssIcon}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: github,
      repos: "https://github.com/moulinho/animation-canvas",
      href: "https://sticky-notes-sage-xi.vercel.app/",
    },

    {
      title: "Happy new year",
      description: "Application de voeux de bonne année",
      tools: [
        <Image key="jsIcon" src={jsIcon} className="" alt="icon" width={30} />,
        <Image
          key="cssIcon"
          src={cssIcon}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: github,
      repos: "https://github.com/moulinho/fireworks",
      href: "https://fireworks-azure-pi.vercel.app/",
    },
  ];

  // Handle scroll event
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) {
          header?.classList.add("shadow-sm");
        } else {
          header?.classList.remove("shadow-sm");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="header sticky top-0 z-50 mb-14 bg-orange-50 pb-5 pt-1">
        <Header />
      </div>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="lg:w-3/12 mt-2 lg:mt-0 lg:pl-12 ">
          <Section title="">
            <InformationSection image={circleImage} Icons={Icons} />
          </Section>
        </div>
        <div className="md:w-7/12">
          {/* About Section */}
          <Section title="A propos">
            <p id="about">
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
            <span id="experiences">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </span>
          </Section>

          {/* Projects Section */}
          <Section title="Projets">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
              id="projects"
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
