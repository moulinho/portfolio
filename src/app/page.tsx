"use client";
import "../i18n/config";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Waves from "react-animated-waves";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import InformationSection from "./components/InformationSection";
import AboutSection from "./components/About";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import ProjectDesign from "./components/ProjectDesign";

import circleImage from "../../public/circleImage.svg";
import { socialIcons } from "@/data/socialIcons";
import { experiencesData } from "@/data/experiences";
import { projectsData, designProjectsData } from "@/data/projects";

const Home = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  // Memoized projects with translated descriptions
  const projects = useMemo(
    () =>
      projectsData.map((project) => ({
        ...project,
        title: project.titleKey ? t(project.titleKey) : project.title!,
        description: t(project.descriptionKey),
      })),
    [t]
  );

  // Memoized design projects with translated descriptions
  const designProjects = useMemo(
    () =>
      designProjectsData.map((project) => ({
        ...project,
        description: project.descriptionKey
          ? t(project.descriptionKey)
          : project.description!,
      })),
    [t]
  );

  // Scroll handler with useCallback
  const handleScroll = useCallback(() => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header?.classList.add("shadow-sm");
    } else {
      header?.classList.remove("shadow-sm");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    const controls = animate(count, 100, { duration: 1.5 });
    controls.then(() => setIsLoading(false));
    return () => controls.stop();
  }, [count]);

  if (isLoading) {
    return (
      <div className="flex flex-col text-center items-center justify-center min-h-screen">
        <motion.pre style={{ fontSize: 64, color: "#000000" }}>
          {rounded}
        </motion.pre>
        <Waves amplitude={50} colors={["#FF6AC6", "#436EDB", "#FF6AC6"]} />
      </div>
    );
  }

  return (
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
              <InformationSection image={circleImage} Icons={socialIcons} />
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
                {experiencesData.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </span>
            </Section>

            <Section title={t("sections.projects")} id="projects">
              {/* Design Projects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                {designProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <ProjectDesign {...project} />
                  </motion.div>
                ))}
              </div>

              {/* Development Projects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
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
  );
};

export default Home;
