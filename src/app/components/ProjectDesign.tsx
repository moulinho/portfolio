import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import folder from "../../../public/folder.svg";
import TechIcon from "./TechIcon";

type ProjectDesignProps = {
  title: string;
  description: string;
  tools: string[];
  backgroundImage?: string;
};

const ProjectDesign = ({
  title,
  description,
  tools,
  backgroundImage,
}: ProjectDesignProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load image only when in view
  useEffect(() => {
    if (backgroundImage && isInView) {
      const img = new window.Image();
      img.src = backgroundImage;
      img.onload = () => setImageLoaded(true);
    }
  }, [backgroundImage, isInView]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[340px] h-[340px] bg-gray-200 text-white p-8 rounded-xl flex flex-col justify-between gap-4 transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
    >
      {/* Loading skeleton */}
      {backgroundImage && !imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}

      {/* Background image with hover effect - only render when in view */}
      {backgroundImage && isInView && (
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } ${isHovered ? "scale-110" : "scale-100"}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isHovered ? 0.5 : 0.3}), rgba(0, 0, 0, ${isHovered ? 0.5 : 0.3})), url(${backgroundImage})`,
          }}
        />
      )}

      {/* Header */}
      <div className="relative z-10 flex justify-start items-center">
        <Image
          src={folder}
          alt="Project folder"
          width={24}
          className="drop-shadow-md"
        />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-xl font-bold drop-shadow-lg">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-sm leading-relaxed drop-shadow-md line-clamp-3">
        {description}
      </p>

      {/* Tools */}
      <div className="relative z-10 flex flex-wrap gap-3 items-center">
        {tools.map((tool) => (
          <span
            key={tool}
            className="p-1 rounded-md bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
          >
            <TechIcon name={tool} size={28} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDesign;
