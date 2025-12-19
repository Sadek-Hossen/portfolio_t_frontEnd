"use client";

import { useEffect, useState } from "react";

const statsData = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Project Completed" },
  { value: 4, suffix: "+", label: "Happy Clients" },
  { value: 200, suffix: "+", label: " Problem Solved" },
];

export default function CountDount() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((item, index) => {
      const increment = Math.ceil(item.value / 100);

      return setInterval(() => {
        setCounts(prev => {
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
  }, []);

  return (
    <section className="bg-transparent  py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">
              {item.value === 1000
                ? Math.floor(counts[index] / 1000)
                : counts[index]}
              {item.suffix}
            </h2>
            <p className="mt-2 text-white text-sm sm:text-base leading-5">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
