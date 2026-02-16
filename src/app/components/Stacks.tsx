import React from "react";
import Image from "next/image";
import Link from "next/link";

const jsIcon = "/javascript.svg";
const vueIcon = "/vue.svg";
const reactIcon = "/react.svg";
const sassIcon = "/scss.svg";
const bootstrapIcon = "/Bootstrap.svg";
const tailwindIcon = "/tailwind.svg";
const nuxtIcon = "/nuxt.svg";
const quasarIcon = "/quasar.svg";
const angular = "/angularLogo.png";

const nextIcon = "/nextjs.svg";
const nodeIcon = "/node.svg";
const expressIcon = "/express.svg";
const mongoIcon = "/mongodb.svg";
const mysqlIcon = "/mysql.svg";
const typescript = "/typescript.svg";
const NestjsIcon = "/NestjsIcon.png";
const StrapiIcon = "/StrapiIcon.png";



const figmaIcon = "/figma.svg";
const adobeXDIcon = "/adobeXD.png";

const frontendStacks = [
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: typescript },
  { name: "Vue.js", icon: vueIcon },
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "Nuxt.js", icon: nuxtIcon },
  { name: "QUASAR", icon: quasarIcon },
  { name: "SASS", icon: sassIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Angular", icon: angular },
];

const backendStacks = [
  { name: "Node.js", icon: nodeIcon },
  { name: 'Nest.js', icon: NestjsIcon },
  { name: 'Strapi.js', icon: StrapiIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "MySQL", icon: mysqlIcon },
];

const designStacks = [
  { name: "Figma", icon: figmaIcon, link: "https://www.figma.com/design/iTITS5oXOu2UyhdcAiKVDd/serresIvore?node-id=64-20&t=7G7Z6DPjHDNjFHT2-1" },

];

const Stacks = () => {
  return (
    <div className=" ">


      {/* Design Stacks */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 px-2 rounded-md  bg-white">Design</h3>
        <div className="flex flex-wrap gap-6">
          {designStacks.map((stack, index) => (
            <Link href={stack.link} target="_blank" key={index}
              className="flex flex-col items-center transition-transform transform hover:scale-105">

              <Image src={stack.icon} alt={stack.name} width={30} height={30} className={`${stack.icon === adobeXDIcon ? "w-16 " : "w-10 "} h-10`} />
              <p className="text-sm mt-2 text-gray-700">{stack.name}</p>
            </Link>
          ))}
        </div>
      </div>

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
              <Image
                src={stack.icon}
                alt={stack.name}
                width={30}
                height={30}
                className={`${stack.icon === NestjsIcon || stack.icon === StrapiIcon ? "w-16" : "w-10"} h-10`}
              />
              <p className="text-sm mt-2 text-gray-700">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Stacks;
