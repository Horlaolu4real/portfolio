"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";

const images = [
  "/Hero-portfolio.webp",
  "/new-cover.jpg",
  "/second-new-cover.jpg",
  "/third-cover.jpg",
];
const container: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  const [startIndex, SetStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      SetStartIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const name = "Olaoluwa Yusuf";

  return (
    <section className="w-full">
      <div className="w-full h-[400px] mx-auto overflow-hidden lg:h-[850px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="absolute w-full h-full"
          >
            <Image
              src={images[startIndex]}
              alt="image"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 w-full h-full bg-black/30">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 lg:gap-4">
            <h1 className="font-[Poppins] font-light text-white/70 text-[16px] lg:text-[20px] text-center">
              Frontend Engineer
            </h1>
            <motion.p
              key={startIndex}
              className="font-[MAINLUX-Bold] font-light text-white text-[clamp(2.4rem,6vw,6rem)] flex gap-1"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {name.split("").map((char, i) => (
                <motion.span key={i} variants={letter} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
