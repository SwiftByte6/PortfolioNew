import { RiSupabaseFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejsSmall as Nodejs } from "react-icons/di";
import { FaGitAlt, FaFigma } from "react-icons/fa";
import { SiFramer, SiVercel, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";

export const UppertechStack = [
  {
    name: "Supabase",
    icon: <RiSupabaseFill className="text-green-500 text-4xl" />,
  },
  {
    name: "Next Js",
    icon: <RiNextjsFill className="text-black dark:text-white text-4xl" />,
  },
  {
    name: "Tailwindcss",
    icon: <RiTailwindCssFill className="text-sky-400 text-4xl" />,
  },
  {
    name: "Node",
    icon: <Nodejs className="text-green-600 text-4xl" />,
  },{
    name:"React JS",
    icon:<FaReact className="text-blue-500 text-4xl"/>
  }
];

export const LowerTechStack = [
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 text-3xl" />,
  },
  {
    name: "Motion",
    icon: <SiFramer className="text-pink-500 text-3xl" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-purple-600 text-3xl" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-black dark:text-white text-3xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-3xl" />,
  },
  {
    name: "ThreeJs",
    icon:<TbBrandThreejs className="text-4xl"/>
  
  },
];
