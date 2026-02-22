"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import GridPattern from "@/components/Decoratives/GridPattern";

const Project = () => {
  const row: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const projects = [
    {
      title: "Clubarant",
      url: "https://www.clubarant.com/",
      techs: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "Rogue Dev",
      url: "https://www.roguedevtech.com/",
      techs: ["React", "SCSS", "Animations"],
    },
    {
      title: "TodoApp",
      url: "https://todoweb-lake.vercel.app/",
      techs: ["Next.js", "Module SCSS"],
    },
    {
      title: "Bricklage",
      url: "https://dev.bricklage.com/",
      techs: ["Next.js", "SCSS", "Deploy"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full flex flex-col items-center px-4 justify-center max-w-[1440px] mx-auto"
    >
      <GridPattern size={48} opacity={0.04} color="#06b6d4" />
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-[36px] md:text-[48px] font-light text-center mb-12 text-[#0b1020] relative font-[MAINLUX-Bold]"
      >
        Projects
      </motion.h2>

      <div className="w-full">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={row}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full py-10"
          >
            <div className="flex items-end justify-between gap-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ x: 4 }}
                className="font-[MAINLUX-Bold] text-[40px] md:text-[64px] lg:text-[80px] leading-none bg-gradient-to-b from-[#bbb] to-[#666] bg-clip-text text-transparent"
              >
                {p.title}
              </motion.h3>
              <div className="flex flex-col items-end gap-3">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-[#0b1020] text-[#0b1020] font-[Lato] text-[14px] hover:bg-[#0b1020] hover:text-white transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  VISIT SITE
                </a>
                <p className="text-sm text-[#0b1020] font-[Poppins]">
                  {p.techs.join(", ")}
                </p>
              </div>
            </div>
            <div className="mt-6 h-px bg-[#0b1020]/20" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
