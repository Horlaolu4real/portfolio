"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  type Variants,
} from "framer-motion";
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

  // motion values for subtle parallax on mouse move
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      SetStartIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const name = "Olaoluwa Yusuf";

  const handleMouseMove = (e: React.MouseEvent) => {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    const mx = (e.clientX - halfW) / 40; // smaller divisor for subtle motion
    const my = (e.clientY - halfH) / 60;
    x.set(mx);
    y.set(my);
  };

  const imageVariants: Variants = {
    enter: { opacity: 0, scale: 1.06 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full pt-28 md:pt-32">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="w-full min-h-[420px] md:h-[560px] lg:h-[760px] xl:h-[850px] mx-auto overflow-hidden relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full"
            style={{ x, y }}
          >
            <Image
              src={images[startIndex]}
              alt={`hero-${startIndex}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* subtle floating accents */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12, y: [0, -12, 0], x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-10 -top-12 w-48 h-48 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#16796f] blur-3xl opacity-10"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08, y: [0, 10, 0], x: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-12 bottom-8 w-56 h-56 rounded-full bg-gradient-to-tr from-[#a78bfa] to-[#06b6d4] blur-3xl opacity-10"
        />

        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/30 to-black/60">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 lg:gap-4 px-4">
            <h1 className="font-[Poppins] font-light text-white/75 text-[14px] md:text-[16px] lg:text-[18px] text-center tracking-wide">
              Frontend Engineer
            </h1>
            <motion.p
              key={startIndex}
              className="font-[MAINLUX-Bold] font-light text-white drop-shadow-2xl text-[clamp(2rem,5.5vw,4.5rem)] leading-tight text-center"
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
