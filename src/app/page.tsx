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
      <div className="flex items-center justify-center min-h-screen">
        {" "}
        <motion.pre
          style={{
            fontSize: 64,
            color: "#000000",
          }}
        >
          {rounded}
        </motion.pre>
        {/* /  <Atom
      //     color="#000000"
      //     size="large"
      //     text="Loading..."
      //     speedPlus={-5}
      //     textColor=""
      //   /> */}
      </div>
      // <div style={{ position: "relative" }}>
      //   <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
      //     <motion.path
      //       d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
      //       fill="transparent"
      //       strokeWidth="12"
      //       stroke="var(--hue-6-transparent)"
      //       strokeLinecap="round"
      //       initial={{ pathLength: 0.001 }}
      //       animate={{ pathLength: 1 }}
      //       transition={transition}
      //     />
      //   </svg>
      //   <motion.div
      //     style={{
      //       width: 50,
      //       height: 50,
      //       backgroundColor: "#000000",
      //       borderRadius: 10,
      //       position: "absolute",
      //       top: 0,
      //       left: 0,
      //       offsetPath: `path("M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5")`,
      //     }}
      //     initial={{ offsetDistance: "0%", scale: 2.5 }}
      //     animate={{ offsetDistance: "100%", scale: 1 }}
      //     transition={transition}
      //   />
      // </div>
    );
  };
  // const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

  return (
    <>
      {stateLoad ? (
        loadingPage()
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Start position: slightly below and invisible
          animate={{ opacity: 1, x: 0 }} // End position: fully visible at normal position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          className="container mx-auto px-4"
        >
          <Header />
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="lg:w-3/12 mt-2 lg:mt-0 lg:pl-12">
              <div className="sticky top-20">
                <Section title="">
                  <InformationSection image={circleImage} Icons={Icons} />
                </Section>
              </div>
            </div>
            <div className="md:w-7/12">
              <motion.div
                initial={{ opacity: 0, y: 50 }} // Start position: slightly below and invisible
                animate={{ opacity: 1, y: 0 }} // End position: fully visible at normal position
                transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                className="container mx-auto px-4"
              >
                {/* About Section */}
                <Section title="A propos">
                  <p id="about">
                    Je suis un développeur passionné par la création
                    d&apos;interfaces utilisateur accessibles et parfaites au
                    pixel près, qui associent un design réfléchi à une
                    ingénierie robuste. Mon travail préféré se situe à
                    l&apos;intersection de la conception et du développement,
                    créant des expériences qui non seulement sont superbes, mais
                    sont méticuleusement conçues pour la performance et la
                    convivialité.
                  </p>
                  <br />
                  <p>
                    Actuellement, je suis ingénieur front-end chez Legafrik,
                    spécialisé dans la numerisation de creation
                    d&apos;entreprise. Je contribue à la création et à la
                    maintenance des composants d&apos;interface utilisateur qui
                    alimentent le front-end de Legafrik, garantissant que notre
                    plateforme répond aux normes d&apos;accessibilité Web et aux
                    meilleures pratiques pour offrir une expérience utilisateur
                    inclusive.
                  </p>
                  <br />
                  <p>
                    Par le passé, j&apos;ai eu l&apos;occasion de développer des
                    logiciels dans des environnements très divers, des agences
                    de construction de logement, entreprises specialisee dans la
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
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }} // Start hidden and below
                        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: index * 0.2,
                        }} // Delay each item
                        viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% visible
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
