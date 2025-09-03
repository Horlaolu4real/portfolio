"use client";
import React from "react";
import Image from "next/image";
import logo from "@/components/images/logo-size.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full border-t-2 border-[#f2f2f2] px-6 py-8"
    >
      {/* Animated background shimmer */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
        className="w-full rounded-xl bg-gradient-to-r from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] bg-[length:200%_200%] p-6"
      >
        <footer
          id="details"
          className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-6 text-white sm:flex-col lg:flex-row lg:justify-between"
        >
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="logo"
              className="w-[180px] h-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
            />
          </div>

          {/* Links */}
          <ul className="list-none flex flex-col items-center gap-4 sm:flex-col lg:flex-row lg:gap-8">
            <a
              href="mailto:olaoluwayusuf121@gmail.com"
              className="hover:no-underline bg-inherit"
            >
              <li className="text-[16px] cursor-pointer font-[Lato] font-light text-white hover:text-[#ffd700] transition-colors duration-300 ease-in-out">
                olaoluwayusuf121@gmail.com
              </li>
            </a>

            <a
              href="https://www.linkedin.com/in/olaoluwa-yusuf-00387a2bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:no-underline bg-inherit"
            >
              <li className="text-[16px] cursor-pointer font-[Lato] font-light text-white hover:text-[#ffd700] transition-colors duration-300 ease-in-out">
                Linkedin
              </li>
            </a>

            <a
              href="https://github.com/Horlaolu4real"
              target="_blank"
              className="hover:no-underline bg-inherit"
            >
              <li className="text-[16px] cursor-pointer font-[Lato] font-light text-white hover:text-[#ffd700] transition-colors duration-300 ease-in-out">
                Github
              </li>
            </a>

            <li>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-[#ffd700] text-black font-[Lato] text-[16px] rounded-lg shadow-md hover:bg-[#e6c200] hover:text-black transition duration-300 ease-in-out cursor-pointer hover:no-underline"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </footer>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
