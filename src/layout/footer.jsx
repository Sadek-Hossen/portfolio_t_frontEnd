import Image from "next/image";
import React from "react";
import logo from "@/app/favicon.ico";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { IoLogoTwitter, IoMdSend } from "react-icons/io";
import Link from "next/link";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* Logo & Info */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src={logo}
            alt="logo"
            width={80}
            height={80}
            className="rounded-full"
          />

          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-400" />
            <a href="tel:01889412738">01889412738</a>
          </p>

          <p className="flex items-center gap-2">
            <SiGmail className="text-red-400" />
            <a href="mailto:hossensadek726@gmail.com">
              hossensadek726@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FaLocationDot className="text-green-400" />
            Cox&apos;s Bazar, Bangladesh
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {[
            {
              href: "https://www.facebook.com/i.ma.na.dzu",
              icon: <CiFacebook />,
            },
            {
              href: "https://x.com/sadek726",
              icon: <IoLogoTwitter />,
            },
            {
              href: "/",
              icon: <CiLinkedin />,
            },
            {
              href: "https://www.instagram.com/web.developer4421/",
              icon: <FaInstagram />,
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              className="p-3 border border-gray-600 rounded-full text-xl hover:bg-blue-500 hover:text-white transition"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="flex justify-center md:justify-end">
       <Link href={"/contrcut"}>
          <button className="flex items-center gap-3 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition">
            Contact Me <IoMdSend />
          </button>
       </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Sadek Hossen. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
