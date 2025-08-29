"use client";

import React, { useEffect, useState } from "react";
// import computer from "../../../../../public/Hero-portfolio.webp";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/Hero-portfolio.webp",
  "/new-cover.jpg",
  "/second-new-cover.jpg",
  "/third-cover.jpg",
];

const Hero = () => {
  const [startIndex, SetStartIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      SetStartIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="w-full h-[600px] mx-auto overflow-hidden lg:h-[850px] relative">
        {/* <Image src={computer} fill alt="computer" className="object-cover" /> */}
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
            <p className="font-[MAINLUX-Bold] font-light text-white/70 text-[clamp(2.4rem,6vw,6rem)]">
              Olaoluwa Yusuf
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
