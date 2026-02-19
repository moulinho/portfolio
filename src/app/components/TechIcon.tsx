import Image, { StaticImageData } from "next/image";
import jsIcon from "../../../public/javascript.svg";
import cssIcon from "../../../public/css.svg";
import sassIcon from "../../../public/scss.svg";
import bootstrapIcon from "../../../public/Bootstrap.svg";
import tailwindIcon from "../../../public/tailwind.svg";
import reactIcon from "../../../public/react.svg";
import reduxIcon from "../../../public/redux.svg";
import nextIcon from "../../../public/next.svg";
import nuxtIcon from "../../../public/nuxt.svg";
import vueIcon from "../../../public/vue.svg";
import quasarIcon from "../../../public/quasar.svg";
import piniaIcon from "../../../public/Pinia.svg";
import capacitor from "../../../public/capacitor.png";

const figmaIcon = "/figma.svg";
const adobeXDIcon = "/adobeXD.png";

export const techIconsMap: Record<string, StaticImageData | string> = {
  javascript: jsIcon,
  css: cssIcon,
  scss: sassIcon,
  bootstrap: bootstrapIcon,
  tailwind: tailwindIcon,
  react: reactIcon,
  redux: reduxIcon,
  next: nextIcon,
  nuxt: nuxtIcon,
  vue: vueIcon,
  quasar: quasarIcon,
  pinia: piniaIcon,
  capacitor: capacitor,
  figma: figmaIcon,
  adobeXD: adobeXDIcon,
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const TechIcon = ({ name, size = 30, className = "" }: TechIconProps) => {
  const icon = techIconsMap[name];

  if (!icon) {
    return null;
  }

  return (
    <Image
      src={icon}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={className}
    />
  );
};

export const renderTechIcons = (tools: string[], size = 30) => {
  return tools.map((tool) => <TechIcon key={tool} name={tool} size={size} />);
};

export default TechIcon;
