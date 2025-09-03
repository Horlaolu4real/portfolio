"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs } from "react-icons/si";

const tools = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" size={50} /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={50} /> },
  { name: "SCSS", icon: <FaSass color="#CC6699" size={50} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" size={50} /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={50} /> },
  { name: "React", icon: <FaReact color="#61DAFB" size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" size={50} /> },
];

const ToolsSection = () => {
  return (
    <section className="w-full py-[4rem] px-[1.25rem] bg-transparent flex flex-col align-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="
    text-[36px] md:text-5xl 
    font-[MAINLUX-Bold] font-light 
    text-center mb-12 text-[#1e1e1e] relative
    after:content-[''] after:block after:w-[60px] after:h-[3px]
    after:mt-4 after:mx-auto 
    after:bg-gradient-to-r after:from-[#16796f] after:to-[#06b6d4]
    after:rounded-sm
  "
      >
        Tools
      </motion.h2>

      <nav className="flex items-center justify-center mb-12 ">
        <ul className="flex flex-wrap gap-6 list-none p-0 m-0">
          {tools.map((tool, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1, y: -2, color: "#16796f" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="font-[MAINLUX-Bold] text-[1.25em] text-[#1e1e1e] font-light"
            >
              {tool.name}
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="grid gap-[1.5em] w-full h-full grid-cols-2 justify-center sm:grid-cols-3 lg:grid-cols-4">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white/70 rounded-2xl p-6 shadow-md w-full max-w-[220px] 
              transition duration-300 ease-out 
              hover:scale-[1.1] hover:bg-[#1e1e1e] hover:text-[#ffffff] hover:shadow-lg"
          >
            {tool.icon}
            <p className="mt-3 text-base font-semibold font-[MAINLUX-Bold]">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
