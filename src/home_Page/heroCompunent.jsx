"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function HeroComponent() {
  const texts = [
    "I am Sadek Hossen (Emon)",
    "I am a Full-Stack Developer!",
    "Let's build something amazing!",
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pause = 1500;

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && charIndex < texts[textIndex].length) {
      timer = setTimeout(() => {
        setDisplayText((p) => p + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayText((p) => p.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((p) => (p + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  /* Image comparison logic */
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMove = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  const startDrag = (e) => {
    setDragging(true);
    handleMove(e.type.includes("touch") ? e.touches[0].clientX : e.clientX);
  };

  const stopDrag = () => setDragging(false);

  return (
    <section id="Home" className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-10 text-white">
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start space-y-6 w-full lg:w-1/2">
        {/* Hello */}
        <h1 className="text-[#0096FF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Hello!
        </h1>

        {/* Typing text */}
        <h1 className="text-[#0064FF] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Paragraph */}
        <p className="text-[#EBEAEA]/70 text-base sm:text-lg md:text-xl lg:text-xl font-medium w-full lg:w-[90%]">
          I am a Full-Stack MARN Web Developer with 2+ years of experience,
          eager to contribute to your amazing project.
        </p>

        {/* Buttons & Social Links */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
       <Link href={"/contrcut"}>
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition duration-300">
            Contact Me
          </button>
       </Link>
          <div className="flex gap-2 sm:gap-3">
            <Link
              href={"https://www.facebook.com/i.ma.na.dzu"}
              className="text-white p-3 border rounded-full hover:bg-blue-400 hover:text-black text-xl sm:text-2xl transition-all"
            >
              <CiFacebook />
            </Link>
            <Link
              href={"https://x.com/sadek726"}
              className="text-white p-3 border rounded-full hover:bg-blue-400 hover:text-black text-xl sm:text-2xl transition-all"
            >
              <IoLogoTwitter />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/sadek38/"}
              className="text-white p-3 border rounded-full hover:bg-blue-400 hover:text-black text-xl sm:text-2xl transition-all"
            >
              <CiLinkedin />
            </Link>
            <Link
              href={"https://www.instagram.com/web.developer4421/"}
              className="text-white p-3 border rounded-full hover:bg-blue-400 hover:text-black text-xl sm:text-2xl transition-all"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Right: Hero Image Comparison */}
      <div
        ref={containerRef}
        className="relative mt-10 lg:mt-0 w-full sm:w-[300px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-2xl border border-blue-300 select-none"
        onMouseDown={startDrag}
        onMouseMove={(e) => dragging && handleMove(e.clientX)}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={startDrag}
        onTouchMove={(e) => dragging && handleMove(e.touches[0].clientX)}
        onTouchEnd={stopDrag}
      >
        {/* After Image */}
        <Image
          src="/img/Me-after.jpg"
          alt="After"
          fill
          className="object-cover"
          draggable={false}
        />

        {/* Before Image */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src="/img/me3.png"
            alt="Before"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Divider Bubble */}
        <motion.div
          className="absolute top-0 h-full w-[3px] cursor-ew-resize flex items-center justify-center"
          style={{ left: `${position}%` }}
          onMouseDown={startDrag}
          animate={{
            scale: dragging ? [1, 1.3, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-6 h-6 bg-white rounded-full shadow flex items-center justify-center text-black"
            animate={{
              y: dragging ? [-5, 5, 0] : 0,
              scale: dragging ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            ⇆
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
