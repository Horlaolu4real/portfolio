"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GridPattern from "@/components/Decoratives/GridPattern";

import imgOne from "../.././../../../public/new-cover.jpg";
import imgTwo from "../.././../../../public/second-new-cover.jpg";
import imgThree from "../.././../../../public/third-cover.jpg";

const Project = () => {
  const boxVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

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
        className="text-[36px] md:text-[48px] font-light text-center mb-12 text-[#1e1e1e] relative font-[MAINLUX-Bold]
        after:content-[''] after:block after:w-[60px] after:h-[3px] after:mt-4 after:mx-auto
        after:bg-gradient-to-r after:from-[#16796f] after:to-[#06b6d4] after:rounded"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 place-items-center"
      >
        {/* CARD 1 */}
        <a
          href="https://www.clubarant.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center w-full no-underline hover:no-underline text-inherit"
        >
          <div className="relative w-full h-[280px] sm:h-[300px] overflow-hidden rounded-[24px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={imgOne}
              alt="Clubarant website"
              fill
              priority
              className="object-cover rounded-[24px]"
            />
          </div>

          <p className="mt-6 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
            Clubarant
          </p>
        </a>
        <a
          href="https://www.roguedevtech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center w-full no-underline hover:no-underline text-inherit"
        >
          <div className="relative w-full h-[280px] sm:h-[300px] overflow-hidden rounded-[24px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={imgTwo}
              alt="Rogue dev website"
              fill
              priority
              className="object-cover rounded-[24px]"
            />
          </div>

          <p className="mt-6 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
            Rogue Dev
          </p>
        </a>

        {/* CARD 3 */}
        <a
          href="https://todoweb-lake.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center w-full no-underline hover:no-underline text-inherit"
        >
          <div className="relative w-full h-[280px] sm:h-[300px] overflow-hidden rounded-[24px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={imgThree}
              alt="Todo app demo"
              fill
              priority
              className="object-cover rounded-[24px]"
            />
          </div>

          <p className="mt-6 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
            TodoApp
          </p>
        </a>
      </motion.div>
    </section>
  );
};

export default Project;
