import React from 'react'

function Header() {
  return (
    <ul className="header flex flex-wrap justify-center md:justify-evenly items-center h-12 w-[90vw] md:w-[25vw] bg-black text-white mt-4 mx-auto rounded-md shadow-lg">
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
  
  )
}

export default Header