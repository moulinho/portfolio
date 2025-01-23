import React from 'react'

function Header() {
  return (
    <ul className="header flex justify-evenly items-center h-12 w-4/12 bg-gray-800 text-white mt-4 mx-auto rounded-md sticky">
        <li>
           <a href="#">A propos</a> </li>
        <li><a href="#">Expériences</a> </li>
        <li><a href="#">Projets</a> </li>
    </ul>
  )
}

export default Header