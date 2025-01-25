import React from "react";

function Header() {
  return (
    <div className="header sticky top-0 z-50 mb-14 w-[100vw] md:w-[30vw] mx-auto bg-orange-50 pb-5 pt-1">
      <ul className=" flex flex-wrap justify-center md:justify-evenly items-center sticky h-12 w-[90vw] md:w-[25vw] bg-black text-white mt-4 mx-auto rounded-md shadow-lg">
        <li className="px-4 py-2 text-sm md:text-base hover:text-gray-300 transition">
          <a href="#about">A propos</a>
        </li>
        <li className="px-4 py-2 text-sm md:text-base hover:text-gray-300 transition">
          <a href="#experiences">Expériences</a>
        </li>
        <li className="px-4 py-2 text-sm md:text-base hover:text-gray-300 transition">
          <a href="#projects">Projets</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
