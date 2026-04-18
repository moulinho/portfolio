"use client";

import { useEffect } from "react";
import Image from "next/image";
import arrowcircle from "../../../public/arrowcircle.svg";

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollBtn = document.querySelector(".scrollBtn");
      if (window.scrollY > 150) {
        scrollBtn?.classList.remove("hidden");
      } else {
        scrollBtn?.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 hidden scrollBtn z-50">
      <button
        className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Image src={arrowcircle} alt="" aria-hidden="true" width={30} />
      </button>
    </div>
  );
};

export default ScrollToTop;
