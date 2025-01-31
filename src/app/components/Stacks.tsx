import React from "react";
import jsIcon from "../../../public/javascript.svg";
import vueIcon from "../../../public/vue.svg";
import reactIcon from "../../../public/react.svg";
import sassIcon from "../../../public/scss.svg";
import bootstrapIcon from "../../../public/Bootstrap.svg";
import tailwindIcon from "../../../public/tailwind.svg";
import nuxtIcon from "../../../public/nuxt.svg";
import quasarIcon from "../../../public/quasar.svg";

import nextIcon from "../../../public/nextjs.svg";
import nodeIcon from "../../../public/node.svg";
import expressIcon from "../../../public/express.svg";
import mongoIcon from "../../../public/mongodb.svg";
import mysqlIcon from "../../../public/mysql.svg";
import Image from "next/image";

const frontendStacks = [
  { name: "JavaScript", icon: jsIcon },
  { name: "Vue.js", icon: vueIcon },
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "Nuxt.js", icon: nuxtIcon },

  { name: "QUASAR", icon: quasarIcon },
  { name: "SASS", icon: sassIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
];

const backendStacks = [
  { name: "Node.js", icon: nodeIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "MySQL", icon: mysqlIcon },
];

const Stacks = () => {
  return (
    <div className=" ">

      {/* Front-end Stacks */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 px-2 rounded-md  bg-white">Front-end</h3>
        <div className="flex flex-wrap  gap-6">
          {frontendStacks.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <Image src={stack.icon} alt={stack.name} width={30} height={30} className="w-10 h-10" />
              <p className="text-sm mt-2 text-gray-700">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Back-end Stacks */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4 px-2 rounded-md  bg-white">Back-end</h3>
        <div className="flex flex-wrap gap-6">
          {backendStacks.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <Image src={stack.icon} alt={stack.name} width={30} height={30}  />
              <p className="text-sm mt-2 text-gray-700">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
