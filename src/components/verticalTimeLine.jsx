"use client";

import React from "react";

const Timeline = () => {
  const items = [
    {
      title: "Full-Stack MERN Developer",
      desc: "Building scalable web applications using MongoDB, Express.js, React, and Node.js.",
      side: "left",
    },
    {
      title: "Front-End Specialist",
      desc: "Creating responsive, modern, and user-friendly interfaces with React, Next.js, Tailwind CSS.",
      side: "right",
    },
    {
      title: "Back-End Developer",
      desc: "Developing secure REST APIs, authentication systems, and database architectures.",
      side: "left",
    },
    {
      title: "Problem Solver & Researcher",
      desc: "Debugging complex issues and researching best practices to improve performance.",
      side: "right",
    },
    {
      title: "Continuous Learner",
      desc: "Always learning new technologies, tools, and improving coding standards.",
      side: "left",
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto py-24">
      {/* Gradient Vertical Line */}
      <div className="absolute left-1/2 top-0 h-[90%] justify-center items-center w-[10px] -translate-x-1/2
        bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

      <ul className="">
        {items.map((item, index) => (
          <li key={index} className="relative flex items-center">
            {/* Left card */}
            {item.side === "left" && (
              <div className="md:w-1/2  md:pr-12 text-right">
                <div className="rounded-2xl border mb-6 border-white/10  bg-white/5 
                  backdrop-blur-lg p-6 text-white shadow-xl ">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            )}

            {/* Center Dot */}
            <div className="absolute  left-1/2 -translate-x-1/2 z-10">
              <span className="flex h-5 w-5 rounded-full
                bg-gradient-to-r from-cyan-400 to-pink-500 ring-4 ring-[#0b1220]" />
            </div>

            {/* Right card */}
            {item.side === "right" && (
              <div className="md:w-1/2   md:pl-12 ml-auto md:text-left">
                <div className="rounded-2xl mb-6 md:mb-0 border border-white/10 bg-white/5 
                  backdrop-blur-lg p-6 text-white shadow-xl">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
