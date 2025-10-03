"use client";
import "../i18n/config";
import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import whatsapp from "../../public/whatsapp.svg";
import capacitor from "../../public/capacitor.png";
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
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
                {t("experience.legafrik_lead")}{" "}
                <Link href="https://www.legafrik.com/">
                  <span className="text-blue-500 hover:underline">
                    Legafrik
                  </span>{" "}
                  .
                  <br />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-600">
                    {t("experience.legafrik_lead_date")}
                  </time>
                </Link>
              </h3>

              <p className="mb-4 text-base font-normal ">
                <div className="">{t("experience.legafrik_lead_desc1")}</div>
                <div>{t("experience.legafrik_lead_desc2")}</div>
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

              <h3 className="text-lg font-semibold">
                {t("experience.legafrik_fullstack")}{" "}
                <Link href="https://www.legafrik.com/">
                  <span className="text-blue-500 hover:underline">
                    Legafrik
                  </span>{" "}
                  <br />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-600">
                    {t("experience.legafrik_fullstack_date")}
                  </time>
                </Link>
              </h3>
              <p className="text-base font-normal ">
                {t("experience.legafrik_fullstack_desc")}
              </p>
            </li>
          </ol>
        </div>
      ),
      skills: ["JavaScript", "React.js", "TypeScript", "HubSpot", "Laravel"],
    },
    {
      role: t("experience.jool"),
      company: (
        <Link href="https://jool-international.com/">Jool International</Link>
      ),
      date: t("experience.jool_date"),
      location: t("experience.location"),
      description: (
        <div className="text-base/7">{t("experience.jool_desc")}</div>
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
      role: t("experience.wefly"),
      company: "WeFly Agri",
      date: t("experience.wefly_date"),
      location: t("experience.location"),
      description: (
        <div className="text-base/7">{t("experience.wefly_desc")}</div>
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
      role: t("experience.wag"),
      location: t("experience.location"),
      company: (
        <Link href="https://wagsystems.wixsite.com/wagsystems">WAGSystems</Link>
      ),
      date: t("experience.wag_date"),
      description: (
        <div className="text-base/7">{t("experience.wag_desc")}</div>
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
      title: "Moide-ferme",
      description:
        "Moide-ferme est une plateforme de création et de vente de produits d'élevage tels que des équipements, des aliments et des produits de consommation.",
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
      href: "https://moide-ferme.ci/",
    },


    {
      title: "Mobile Biflaz",
      description: t("projects.mobile_biflaz.description"),
      tools: [
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
          key="piniaIcon"
          src={piniaIcon}
          className=""
          alt="icon"
          width={30}
        />,
        <Image
          key="capacitor"
          src={capacitor}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: folder,
      href: "https://drive.google.com/file/d/1VMbvcfT99k77-ouXhq7-cvQuPW8P9PiB/view?usp=sharing",
    },
    {
      title: "Mobile monbarra",
      description: t("projects.mobile_monbarra.description"),
      tools: [
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
          key="piniaIcon"
          src={piniaIcon}
          className=""
          alt="icon"
          width={30}
        />,
        <Image
          key="capacitor"
          src={capacitor}
          className=""
          alt="icon"
          width={30}
        />,
      ],
      icon: folder,
      href: "https://drive.google.com/file/d/1CZUcxdQ5AdqMCklE7tVHREs1Uc34vfH0/view",
    },
    {
      title: "Datagreff",
      description: t("projects.datagreff.description"),
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
      description: t("projects.legafrik.description"),
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
      description: t("projects.monbarra.description"),
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
      href: "https://moulinho.github.io/",
    },
    {
      title: "ZIUM",
      description: t("projects.zium.description"),
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
      href: "https://ziums.vercel.app/",
    },
    {
      title: t("projects.card_creation.title"),
      description: t("projects.card_creation.description"),
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
      title: t("projects.shopping.title"),
      description: t("projects.shopping.description"),
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
      title: t("projects.movie_store.title"),
      description: t("projects.movie_store.description"),
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
      title: t("projects.sticky_note.title"),
      description: t("projects.sticky_note.description"),
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
      title: t("projects.particle_animate.title"),
      description: t("projects.particle_animate.description"),
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
      title: t("projects.happy_new_year.title"),
      description: t("projects.happy_new_year.description"),
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
  }, [count]);

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
                <Section title={t("sections.about")} id="about">
                  <AboutSection />
                </Section>

                <Section title={t("sections.experiences")} id="experiences">
                  <span>
                    {experiences.map((exp, index) => (
                      <ExperienceCard key={index} {...exp} />
                    ))}
                  </span>
                </Section>

                <Section title={t("sections.projects")} id="projects">
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
                        }}
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
