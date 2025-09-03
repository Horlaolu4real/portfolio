"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const items = Array(12).fill(0);

  return (
    <section
      id="about"
      className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-[3.25rem] pt-[16px] px-[20px] pb-[20px]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative text-[#1e1e1e] text-center font-[MAINLUX-Bold] font-light text-[28px] sm:text-[32px] lg:text-[40px] 
          after:content-[''] after:block after:w-[60px] after:h-[3px] after:mx-auto after:mt-4 after:rounded-[2px] 
          after:bg-gradient-to-r after:from-[#16796f] after:to-[#06b6d4]"
      >
        About Me
      </motion.h2>

      <div className="flex w-full justify-center flex-col gap-[8px] lg:gap-[32px] lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-[1.85rem] w-full lg:w-1/2 lg:border-r-2 lg:border-[#1e1e1e] lg:pr-[1.25rem]">
          <h4 className="font-[MAINLUX-Bold] font-light text-[24px] sm:text-[28px] lg:text-[32px]">
            I’m a Software Engineer With a Strong Focus on Front-end Development
            Based in Lagos, Nigeria
          </h4>
          <div className="flex flex-col gap-5">
            <p className="font-[MAINLUX-Bold] font-light text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#1e1e1e]">
              My journey into Frontend developer began three years ago, driven
              by a deep interest in turning creative designs into interactive,
              dynamic web applications...
            </p>
            <p className="font-[MAINLUX-Bold] font-light text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#1e1e1e]">
              I’m passionate about using modern technologies to develop fast,
              responsive, and accessible user interfaces.
            </p>
            <p className="font-[MAINLUX-Bold] font-light text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#1e1e1e]">
              Whether I’m collaborating with a team or building something from
              the ground up, I take pride in delivering high-quality software.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 overflow-hidden whitespace-nowrap relative">
          <motion.div
            className="flex mt-[120px]"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 12,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <div className="flex">
              {items.map((_, idx) => (
                <div
                  key={`main-${idx}`}
                  className="flex flex-col gap-[8px] mr-[1.25rem]"
                >
                  <p className="font-[MAINLUX-Bold] font-light text-[28px] sm:text-[36px] lg:text-[46px] text-[#1e1e1e]">
                    Rogue devTech
                  </p>
                  <h5 className="font-[MAINLUX-Bold] font-light text-[16px] sm:text-[18px] lg:text-[20px] text-[#1e1e1e]">
                    Front-end-developer
                  </h5>
                </div>
              ))}
            </div>
            <div className="flex">
              {items.map((_, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="flex flex-col gap-[8px] mr-[1.25rem]"
                >
                  <p className="font-[MAINLUX-Bold] font-light text-[28px] sm:text-[36px] lg:text-[46px] text-[#1e1e1e]">
                    Rogue devTech
                  </p>
                  <h5 className="font-[MAINLUX-Bold] font-light text-[16px] sm:text-[18px] lg:text-[20px] text-[#1e1e1e]">
                    Front-end-developer
                  </h5>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
