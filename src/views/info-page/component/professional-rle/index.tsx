"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import GridPattern from "@/components/Decoratives/GridPattern";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";

const tools = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" size={50} /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={50} /> },
  { name: "SCSS", icon: <FaSass color="#CC6699" size={50} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" size={50} /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={50} /> },
  { name: "React", icon: <FaReact color="#61DAFB" size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" size={50} /> },
  {
    name: "Framer Motion",
    icon: <SiFramer size={50} color="#0055FF" />,
  },
];

const ToolsSection = () => {
  return (
    <section className="relative w-full flex-col  max-w-[1440px] mx-auto px-4">
      <GridPattern size={44} opacity={0.03} color="#06b6d4" />
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-[36px] md:text-[48px] font-light text-center mb-12 text-[#1e1e1e] relative font-[MAINLUX-Bold]
    after:content-[''] after:block after:w-[60px] after:h-[3px] after:mt-4 after:mx-auto after:bg-gradient-to-r after:from-[#16796f] after:to-[#06b6d4] after:rounded"
      >
        Tools & Skills
      </motion.h2>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center mb-12 w-full"
      >
        <ul className="flex flex-wrap gap-4 list-none p-0 m-0 justify-center">
          {tools.map((tool, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05, color: "#16796f" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="font-[MAINLUX-Bold] text-sm md:text-base text-[#1e1e1e] font-light"
            >
              {tool.name}
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid gap-2 w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      >
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center
    bg-[#f2f2f2] rounded-2xl p-8 w-full h-[220px]
    shadow-sm hover:shadow-md"
          >
            <div className="text-5xl mb-4">{tool.icon}</div>
            <p className="text-center text-sm font-semibold font-[MAINLUX-Bold] tracking-wide text-[#1e1e1e]">
              {tool.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ToolsSection;
