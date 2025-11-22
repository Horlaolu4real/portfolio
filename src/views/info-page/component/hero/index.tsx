"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";

const images: string[] = [
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
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideVariants: Variants = {
  enter: {
    x: "100%",
    opacity: 1,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    x: "-100%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const name = "Olaoluwa Yusuf";

  return (
    <section className="lg:m-6 m-0">
      <div className="w-full h-[420px] sm:h-[500px] md:h-[650px] lg:h-[850px] mx-auto overflow-hidden lg:rounded-xl rounded relative">
        <AnimatePresence>
          <motion.div
            key={index}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[index]}
              alt={`hero-${index}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* OVERLAY + TEXT */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 text-center px-4">
            <h1 className="font-[Poppins] font-light text-white/70 text-[15px] sm:text-[18px] lg:text-[20px]">
              Frontend Engineer
            </h1>

            <motion.p
              key={index} // re-run text stagger on every slide
              className="font-[MAINLUX-Bold] text-white text-[clamp(2.4rem,6vw,6rem)] flex gap-1"
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
