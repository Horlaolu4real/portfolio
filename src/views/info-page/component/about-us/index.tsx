"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-8 pt-12 px-4 pb-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-[#0b1020] text-center font-[MAINLUX-Bold] font-light text-[32px] lg:text-[40px]"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
        <div className="flex flex-col gap-5">
          <h4 className="font-[MAINLUX-Bold] font-light text-[26px] lg:text-[32px] text-[#0b1020]">
            Software Engineer focused on Front-end Development
          </h4>
          <p className="font-[Poppins] text-[16px] lg:text-[18px] leading-[1.7] text-[#222]">
            I turn creative ideas into responsive, accessible, and performant
            web experiences. Comfortable across the stack, I build clean
            interfaces, integrate APIs, and ship scalable features that users
            love.
          </p>
          <p className="font-[Poppins] text-[16px] lg:text-[18px] leading-[1.7] text-[#222]">
            Whether collaborating or building solo, I focus on clarity, speed,
            and maintainability—delivering reliable software that solves real
            problems.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="rounded-2xl bg-[#f2f2f2] h-[140px]" />
            <div className="rounded-2xl bg-[#eaeaea] h-[140px]" />
            <div className="rounded-2xl bg-[#eaeaea] h-[140px]" />
            <div className="rounded-2xl bg-[#f2f2f2] h-[140px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
