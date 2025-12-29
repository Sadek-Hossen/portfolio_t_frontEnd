"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projectsData } from "@/datas/data";

// ================== DATA ==================
export const dataCard = projectsData;

// ================== ANIMATION VARIANTS ==================
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// ================== COMPONENT ==================
const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? dataCard : dataCard.slice(0, 6);

  return (
    <div id="projects" className="px-4 md:px-8 py-8">
      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatePresence>
          {visibleItems.map((card) => (
            <Link
              href={`/Projects/${card.id}`}
              key={card.id}
              className="hover:shadow-fuchsia-900 shadow-xl"
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                exit="exit"
                layout
                className="relative w-full h-[300px] flex flex-col justify-end p-4 gap-3 rounded-xl cursor-pointer text-white overflow-hidden group bg-black shadow-lg"
              >
                {/* Gradient */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#e81cff] to-[#40c9ff]
                  transition-transform duration-700 group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77]"
                />

                {/* Blur */}
                <div className="absolute inset-0 bg-gradient-to-br scale-[0.95] blur-[20px] group-hover:blur-[30px]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start">
                  <div className="w-full h-40 relative rounded-md overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-base font-bold mt-2">{card.title}</p>

                  <Link
                    href={card.liveDemo}
                    target="_blank"
                    className="text-sm text-[#40c9ff] underline mt-1"
                  >
                    Live Demo
                  </Link>

                  <p className="text-xs opacity-70">id: {card.id}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* See More Button */}
      <div className="py-6 flex items-center justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="py-2 px-6 bg-teal-500 rounded-3xl text-white hover:bg-white hover:text-black font-bold transition-all shadow-lg"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
