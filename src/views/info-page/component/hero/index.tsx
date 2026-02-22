"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const heroImage = "/Hero-portfolio.webp";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <div className="relative max-w-[1440px] mx-auto px-6 pt-28 pb-24 lg:pt-36 lg:pb-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-col items-center text-center gap-8"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.h1
              variants={item}
              className="font-[Poppins] font-light text-white/80 text-sm md:text-base tracking-widest uppercase"
            >
              Frontend Engineer
            </motion.h1>
            <motion.h2
              variants={item}
              className="font-[MAINLUX-Bold] text-6xl md:text-7xl lg:text-8xl leading-tight"
            >
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Olaoluwa Yusuf
              </motion.span>
            </motion.h2>
            <motion.div
              variants={item}
              className="h-1 w-40 rounded-full mx-auto"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{
                background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #06b6d4)",
                backgroundSize: "200% 100%",
              }}
            />
            <motion.p
              variants={item}
              className="font-[Poppins] text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Crafting fast, accessible, and delightful interfaces with modern
              web technologies.
            </motion.p>
            <motion.div variants={item} className="flex items-center gap-4">
              <Link
                href="/#projects"
                className="px-6 py-3 rounded-lg bg-[#06b6d4] text-black font-[Lato] text-[16px]"
              >
                View Projects
              </Link>
              <Link
                href="/#details"
                className="px-6 py-3 rounded-lg border border-white/20 text-white font-[Lato] text-[16px]"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
