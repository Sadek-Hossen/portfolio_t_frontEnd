import React from "react";
import { FaLaptopCode, FaServer } from "react-icons/fa"; // FaServer used instead of FaComputer
import { IoQrCodeSharp, IoLogoDesignernews } from "react-icons/io5";

const datas = [
  {  id:1,
    title: "Front-End Development",
    description:
      "Building responsive, interactive, and visually appealing websites using HTML, CSS, JavaScript, and modern frameworks.",
    logo: FaLaptopCode,
  },
  { id:2,
    title: "Back-End Development",
    description:
      "Creating robust server-side applications, APIs, and databases using Node.js, Express, and other backend technologies.",
    logo: IoQrCodeSharp,
  },
  { id:3,
    title: "Graphic Design",
    description:
      "Designing creative graphics, UI elements, and visuals with modern design tools for web and digital media.",
    logo: IoLogoDesignernews,
  },
  { id:4,
    title: "Advanced Computer Skills",
    description:
      "Expertise in software, tools, and advanced computer applications to optimize productivity and technical solutions.",
    logo: FaServer, // Changed from FaComputer
  },
];



function Experiences() {
  return (
    <div className="py-12 bg-transparent">
      {/* Header */}
      <div className="flex flex-col justify-center items-center py-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
          My Achives
        </h1>
        <p className="text-center mt-4 max-w-xl bg-gradient-to-r from-blue-300 to-gray-300 bg-clip-text text-transparent">
          Offering specialized development and learning solutions using modern
          technologies and industry best practices.
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-6xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-4">
        {datas.map((e, id) => {
          const Icon = e.logo; // get React component
          return (
            <div
              key={id}
              className="flex hover:border-amber-400 border-2 flex-col items-center bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow hover:scale-105 transition-transform duration-300"
            >
              <Icon className="text-5xl text-blue-400 mb-4" />
              <h2 className="text-xl font-bold text-white text-center mb-2">
                {e.title}
              </h2>
              <p className="text-gray-300 text-center text-sm">{e.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experiences;
