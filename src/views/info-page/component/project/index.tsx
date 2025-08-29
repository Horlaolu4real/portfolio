"use client";
import React from "react";
import { motion } from "framer-motion";
import imgOne from "../.././../../../public/new-cover.jpg";
import imgTwo from "../.././../../../public/second-new-cover.jpg";
import imgThree from "../.././../../../public/third-cover.jpg";
import Image from "next/image";

const Project = () => {
  return (
    <section className="w-full h-full p-5 flex flex-col items-center justify-center max-w-[1440px] mx-auto gap-5 ">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[36px] md:text-[48px] font-light text-center mb-12 text-[#1e1e1e] relative font-[MAINLUX-Bold]
    after:content-[''] after:block after:w-[60px] after:h-[3px] after:mt-4 after:mx-auto after:bg-gradient-to-r after:from-[#16796f] after:to-[#06b6d4] after:rounded"
      >
        Projects
      </motion.h2>
      <div className="flex w-full items-center flex-col justify-between gap-5 lg:flex-row">
        <div className="flex flex-col">
          <div className="w-fit h-[328px] bg-transparent overflow-hidden">
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

          <p className="font-[MAINLUX-Bold] font-light text-[#1e1e1e] pt-4 px-[0px] pb-0">
            Clubarant
          </p>
        </div>

        <div className="flex flex-col">
          <div className="w-fit h-[328px] bg-transparent overflow-hidden">
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

          <p className="font-[MAINLUX-Bold] font-light text-[#1e1e1e] pt-4 px-[0px] pb-0">
            Rogue dev
          </p>
        </div>
        <div className="flex flex-col">
          <div className="w-fit h-[328px] bg-transparent overflow-hidden">
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

          <p className="font-[MAINLUX-Bold] font-light text-[#1e1e1e] pt-4 px-[0px] pb-0">
            TodoApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
