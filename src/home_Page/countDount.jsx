"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const statsData = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Project Completed" },
  { value: 4, suffix: "+", label: "Happy Clients" },
  { value: 200, suffix: "+", label: "Problem Solved" },
];

// animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export default function CountDount() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    const intervals = statsData.map((item, index) => {
      const increment = Math.ceil(item.value / 100);

      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < item.value) {
            updated[index] += increment;
          } else {
            updated[index] = item.value;
          }
          return updated;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, [start]);

  return (
    <section id="CountDount" className="bg-transparent py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        onViewportEnter={() => setStart(true)}
      >
        {statsData.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white/10 hover:shadow-fuchsia-900 shadow-xl backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">
              {counts[index]}
              {item.suffix}
            </h2>
            <p className="mt-2 text-white text-sm sm:text-base leading-5">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
