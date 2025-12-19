// components/Card.jsx
"use client";
import Image from "next/image";
import React from "react";



const dataCard = [
    {img:"",title:"",}
]

const Projects = () => {
   return (
    <div className="relative w-[190px] h-[254px] flex flex-col justify-end p-3 gap-3 rounded-lg cursor-pointer text-white overflow-hidden group bg-black">
      
      {/* Gradient border/background */}
      <div className="absolute inset-0 -left-1 w-[200px] h-[264px] rounded-xl bg-gradient-to-br from-[#e81cff] to-[#40c9ff] transition-transform duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-[-90deg] group-hover:scale-x-[1.34] group-hover:scale-y-[0.77] z-0"></div>
      
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fc00ff] to-[#00dbde] transform scale-[0.95] blur-[20px] transition-[filter] duration-700 group-hover:blur-[30px] z-0"></div>
      
      {/* Text content (on top) */}
      <div className="relative z-10">
        <Image
        width={200} 
        height={200}
        src={"https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"} alt="img" />

       
        <p className="text-[20px] font-bold capitalize">Popular this month</p>
        <p className="text-[14px]">Powered By</p>
        <p className="text-[14px] font-semibold text-[#e81cff]">Uiverse</p>
      </div>
    </div>
  );
}
export default Projects;
