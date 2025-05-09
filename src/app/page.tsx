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
import React, { useEffect, useState } from "react";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
import InformationSection from "./components/InformationSection";
import Section from "./components/Section";
// import { Atom } from "react-loading-indicators";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import AboutSection from "./components/About";
import Waves from "react-animated-waves";

const Home = () => {
  const experiences = [
    {
      role: null,
      company: null,
      date: "",
      location: "",
      description: (
        <div className="text-base/7">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

              <h3 className="text-lg font-semibold">
                Chef d&apos;équipe Front-End{" "}
                <Link href="https://www.legafrik.com/">
                  <span className="text-blue-500 hover:underline">
                    Legafrik
                  </span>{" "}
                  .
                  <br />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-600">
                    sept. 2024 - Mars 2025 | Abidjan, Côte d’Ivoire
                  </time>
                </Link>
              </h3>

              <p className="mb-4 text-base font-normal ">
                <div className="">
                  En tant que chef d&apos;équipe Front-End, chargé de la
                  coordination et l&apos;orientation de l&apos;équipe qui se
                  concentre sur le développement des interfaces utilisateur, des
                  fonctionnalités et l&apos;expérience utilisateur globale.
                </div>
                <div>
                  Travaillez en étroite collaboration avec des équipes
                  interfonctionnelles, notamment des développeurs, des
                  concepteurs et des chefs de produit, pour mettre en œuvre et
                  défendre les meilleures pratiques en matière
                  d&apos;accessibilité Web.
                </div>
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

              <h3 className="text-lg font-semibold">
                Développeur FullStack{" "}
                <Link href="https://www.legafrik.com/">
                  <span className="text-blue-500 hover:underline">
                    Legafrik
                  </span>{" "}
                  <br />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-600">
                    Juillet. 2023 - Sept. 2024 | Abidjan, Côte d’Ivoire
                  </time>
                </Link>
              </h3>
              <p className="text-base font-normal ">
                Occupant le poste de développeur Full-Stack au sein d&apos;une
                équipe dynamique et très travailleuse, mes tâches au quotidien
                consistent à maintenir, optimiser et à intégrer des nouveaux
                modules dans les application et site web de Legafrik en externes
                et internes.
              </p>
            </li>
          </ol>
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
      location: "Abidjan, Côte d’Ivoire",
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
      location: "Abidjan, Côte d’Ivoire",

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
      location: "Abidjan, Côte d’Ivoire",

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
    {
      icon: whatsapp,
      href: "https://wa.me/+2250747313348?text=Comment pouvons-nous vous aider ?",
    },
    {
      icon: linkedin,
      href: "https://www.linkedin.com/in/abdoulaye-sereme-6786441bb/",
    },
    { icon: gmail, href: "mailto:seremeabd@gmail.com" },

    { icon: github1, href: "https://github.com/moulinho" },
  ];

  const projects = [
    // {
    //   title: "Moide-ferme",
    //   description:
    //     "Moide-ferme est une plateforme de création et de vente de produits d'élevage tels que des équipements, des aliments et des produits de consommation.",
    //   tools: [
    //     <Image key="jsIcon" src={jsIcon} className="" alt="icon" width={30} />,
    //     <Image
    //       key="reactIcon"
    //       src={reactIcon}
    //       className=""
    //       alt="icon"
    //       width={30}
    //     />,
    //     <Image
    //       key="reduxIocn"
    //       src={reduxIcon}
    //       className=""
    //       alt="icon"
    //       width={30}
    //     />,
    //     <Image
    //       key="tailwindIcon"
    //       src={tailwindIcon}
    //       className=""
    //       alt="icon"
    //       width={30}
    //     />,
    //   ],
    //   icon: folder,
    //   href: "https://moide-ferme.ci/",
    // },

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
      title: "MonBarra",
      description:
        "Site d'offre d'emploi de vos rêves avec nous avec un design simples  et un parcour utilisateur fluide.",
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
      // repos: "https://github.com/moulinho/Movie-Store-QuasarFramework",
      href: "https://moulinho.github.io/",
    },
    {
      title: "ZIUM",
      description:
        "Une application web de vente de bijoux, vetement et de chapeau.",
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
      // repos: "https://github.com/moulinho/Ziums",
      href: "https://ziums.vercel.app/",
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
      description: "Une application web de vente de vetement et d’accessoir.",
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
      description: "Application de selection de films et de series.",
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
      title: "Stiky note",
      description: "Application de prise de note.",
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
      description: "Application de particule animée.",
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
      href: "https://animation-canvas.vercel.app/",
    },

    {
      title: "Happy new year",
      description: "Application de voeux de bonne année.",
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

  const [stateLoad, setstateLoad] = useState(true);
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

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

  useEffect(() => {
    setTimeout(() => {
      setstateLoad(false);
    }, 4500);
  }, [stateLoad]);

  useEffect(() => {
    const controls = animate(count, 100, { duration: 3 });
    return () => controls.stop();
  }, []);
  const loadingPage = () => {
    return (
      <div className="flex flex-col text-center items-center justify-center min-h-screen">
        <motion.pre
          style={{
            fontSize: 64,
            color: "#000000",
          }}
        >
          {rounded}
        </motion.pre>
        <Waves amplitude={50} colors={["#FF6AC6", "#436EDB", "#FF6AC6"]} />
      </div>
    );
  };

  return (
    <>
      {stateLoad ? (
        loadingPage()
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container mx-auto px-4"
        >
          
          <Header />
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="lg:w-4/12 mt-2 lg:mt-0 lg:pl-12">
              <div className="sticky top-20">
                <Section title="">
                  <InformationSection image={circleImage} Icons={Icons} />
                </Section>
              </div>
            </div>
            <div className="md:w-7/12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="container mx-auto px-4"
              >
                {/* About Section */}
                <Section title="A propos" id="A propos">
                  <AboutSection />
                </Section>

                {/* Experiences Section */}
                <Section title="Expériences" id="experiences">
                  <span>
                    {experiences.map((exp, index) => (
                      <ExperienceCard key={index} {...exp} />
                    ))}
                  </span>
                </Section>

                {/* Projects Section */}
                <Section title="Projets" id="Projets">
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
                    id="projects"
                  >
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: index * 0.2,
                        }} // Delay each item
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <ProjectCard {...project} />
                      </motion.div>
                    ))}
                  </div>
                </Section>
              </motion.div>
            </div>
          </div>

          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Home;
