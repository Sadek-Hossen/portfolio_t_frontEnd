"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import useEffectBackendReuse from "@/useEfect-reuse/useEffect";



const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
 const { user, loading } = useEffectBackendReuse()
  console.log("user:", user)
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        w-full
        dark:bg-slate-900/80 bg-transparent
        backdrop-blur-md
        px-2.5 py-2
      "
    >
      {/* logo */}
      <Link href="/">
        <Image
          width={100}
          height={100}
          src="/favicon.ico"
          alt="logo"
          className="rounded-full w-[55px]"
        />
      </Link>

      {/* nav links */}
      <ul className="items-center border px-20 py-4 rounded-2xl bg-blue-400/30 gap-[20px] text-[1rem] text-white md:flex hidden">
        <Link href="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link href="#CountDount">
          <li className="nav-item">Works</li>
        </Link>
        <Link href="#Experience">
          <li className="nav-item">Experience</li>
        </Link>
        <Link href="#projects">
          <li className="nav-item">Projects</li>
        </Link>
        <Link href="#Tech">
          <li className="nav-item">Technology</li>
        </Link>
        <Link href="/contrcut">
          <li className="nav-item">Contruct</li>
        </Link>
        {user?  <Link href="/messages">
          <li className="nav-item">Message</li>
        </Link> :""}
      </ul>

      {/* action buttons */}
      <div className="items-center gap-[10px] flex">
       <Link href={"/img/SadekResume.pdf"}>
        <button className="py-[7px] text-[1rem] px-[16px] dark:text-[#abc2d3] rounded-full capitalize bg-amber-100 hover:text-[#3B9DF8] transition-all duration-300 sm:flex hidden">
          Resume
        </button>
       </Link>

        <CiMenuFries
          className="text-[1.8rem] dark:text-[#abc2d3] mr-1 text-[#424242] cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-40"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white p-4 text-center absolute top-[70px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300 dark:bg-slate-700`}
      >
        

        <ul className="flex flex-col gap-[20px] text-[1rem]">
       <Link href="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link href="#CountDount">
          <li className="nav-item">Works</li>
        </Link>
        <Link href="#Experience">
          <li className="nav-item">Experience</li>
        </Link>
        <Link href="#projects">
          <li className="nav-item">Projects</li>
        </Link>
        <Link href="#Tech">
          <li className="nav-item">Technology</li>
        </Link>
        <Link href="/contrcut">
          <li className="nav-item">Contruct</li>
        </Link>
        {user?  <Link href="/messages">
          <li className="nav-item">Message</li>
        </Link> :""}
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
