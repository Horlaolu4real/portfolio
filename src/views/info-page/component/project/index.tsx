"use client";
import React from "react";
import { motion } from "framer-motion";
import imgOne from "../.././../../../public/new-cover.jpg";
import imgTwo from "../.././../../../public/second-new-cover.jpg";
import imgThree from "../.././../../../public/third-cover.jpg";
import Image from "next/image";

const Project = () => {
  const boxVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section
      id="projects"
      className="w-full h-full p-5 flex flex-col items-center justify-center max-w-[1440px] mx-auto gap-5 "
    >
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-[36px] md:text-[48px] font-light text-center mb-12 text-[#1e1e1e] relative font-[MAINLUX-Bold]
    after:content-[''] after:block after:w-[60px] after:h-[3px] after:mt-4 after:mx-auto after:bg-gradient-to-r after:from-[#16796f] after:to-[#06b6d4] after:rounded"
      >
        Projects
      </motion.h2>
      <motion.div
        variants={boxVariants}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex  lg:items-center flex-col justify-between gap-5 lg:flex-row"
      >
        <div className="flex flex-col">
          <div className="w-fit min-h[250px] h-[270px] bg-transparent overflow-hidden">
            <a
              href="https://www.clubarant.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-inherit bg-inherit"
            >
              <Image
                src={imgOne}
                alt="Clubarant website"
                className="w-full h-full rounded-tl-none rounded-tr-[24px] rounded-br-none rounded-bl-[24px] objet-cover"
              />
            </a>
          </div>

          <p className="font-[MAINLUX-Bold] text-4xl font-light bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pt-4 px-[0px] pb-0">
            Clubarant
          </p>
        </div>

        <div className="flex flex-col">
          <div className="w-fit min-h[250px] h-[270px] bg-transparent overflow-hidden">
            <a
              href="https://www.roguedevtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-inherit bg-inherit"
            >
              {" "}
              <Image
                src={imgTwo}
                alt="images"
                className="w-full h-full rounded-tl-none rounded-tr-[24px] rounded-br-none rounded-bl-[24px] objet-cover"
              />
            </a>
          </div>

          <p className="font-[MAINLUX-Bold] text-4xl font-light bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pt-4 px-[0px] pb-0">
            Rogue dev
          </p>
        </div>
        <div className="flex flex-col">
          <div className="w-fit min-h[250px] h-[270px] bg-transparent overflow-hidden">
            <a
              href="https://todoweb-lake.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-inherit bg-inherit"
            >
              <Image
                src={imgThree}
                alt="images"
                className="w-full h-full rounded-tl-none rounded-tr-[24px] rounded-br-none rounded-bl-[24px] objet-cover"
              />
            </a>
          </div>

          <p className="font-[MAINLUX-Bold] text-4xl font-light bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pt-4 px-[0px] pb-0">
            TodoApp
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
