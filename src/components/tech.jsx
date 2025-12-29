import React from "react";
import {
  FaJs,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGitSquare,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongoose,
  SiFirebase,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";

const techData = [
  { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
  { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3" },
  { icon: <FaJs />, color: "#F7DF1E", name: "JavaScript" },
  { icon: <RiTailwindCssFill />, color: "#38BDF8", name: "Tailwind CSS" },
  { icon: <FaReact />, color: "#61DAFB", name: "React" },
  { icon: <SiTypescript />, color: "#3178C6", name: "TypeScript" },
  { icon: <RiNextjsFill />, color: "#38BDF8", name: "Next.js" },
  { icon: <FaNodeJs />, color: "#339933", name: "Node.js" },
  { icon: <SiExpress />, color: "#444", name: "Express.js" },
  { icon: <SiMongoose />, color: "#880000", name: "Mongoose" },
  { icon: <BiLogoMongodb />, color: "#47A248", name: "MongoDB" },
  { icon: <SiFirebase />, color: "#FFCA28", name: "Firebase" },
  { icon: <FaGitSquare />, color: "#F05032", name: "Git" },
  { icon: <FaDocker />, color: "#2496ED", name: "Docker" },
];

function Tech() {
  return (
    <div id="Tech" className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {techData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 border-2 shadow-xl bg-black
            hover:shadow-blue-600/50 border-b-blue-900 py-6 md:py-10 rounded-2xl
            hover:scale-110 transition"
          >
            <div style={{ color: item.color }} className="text-5xl">
              {item.icon}
            </div>

            <p className="text-sm md:text-base text-white font-medium">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Tech;
