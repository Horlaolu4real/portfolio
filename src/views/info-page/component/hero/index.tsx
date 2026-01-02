

"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const letter: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      mass: 0.8,
    },
  },
};
const FloatingOrb = ({ delay = 0, size = 80, x = 0, y = 0 }) => (
  <motion.div
    className="absolute rounded-full mix-blend-screen pointer-events-none"
    style={{
      width: size,
      height: size,
      background:
        "radial-gradient(circle at 30% 30%, rgba(120,119,198,0.3), transparent 70%)",
      left: `${x}%`,
      top: `${y}%`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.1, 0.4, 0.1],
      scale: [1, 1.2, 1],
      x: [0, Math.random() * 40 - 20, 0],
      y: [0, Math.random() * 40 - 20, 0],
    }}
    transition={{
      duration: 8 + Math.random() * 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);
const GridPattern = () => (
  <motion.div
    className="absolute inset-0 opacity-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.1 }}
    transition={{ duration: 1 }}
  >
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, #06b6d4 1px, transparent 1px),
          linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  </motion.div>
);

const Hero = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const imageX = useTransform(smoothX, [-100, 100], [-20, 20]);
  const imageY = useTransform(smoothY, [-100, 100], [-20, 20]);

  const textX = useTransform(smoothX, [-100, 100], [10, -10]);
  const textY = useTransform(smoothY, [-100, 100], [10, -10]);
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = (clientX / width - 0.5) * 200;
    const y = (clientY / height - 0.5) * 200;

    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x: clientX, y: clientY });
  };
  const orbs = [
    { delay: 0, size: 120, x: 10, y: 20 },
    { delay: 1, size: 80, x: 85, y: 15 },
    { delay: 2, size: 100, x: 20, y: 75 },
    { delay: 3, size: 60, x: 75, y: 65 },
  ];

  const imageVariants: Variants = {
    enter: {
      opacity: 0,
      scale: 1.1,
      rotate: 0.5,
    },
    center: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      rotate: -0.5,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  const borderVariants: Variants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
      <GridPattern />
      {orbs.map((orb, index) => (
        <FloatingOrb key={index} {...orb} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70" />

      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          mouseX.set(0);
          mouseY.set(0);
        }}
        className="relative w-full min-h-[500px] md:h-[700px] lg:h-[900px] mx-auto overflow-hidden cursor-none"
      >
        <motion.div
          className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-sm pointer-events-none z-50"
          style={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: isHovering ? 1 : 0,
          }}
          animate={{
            scale: isHovering ? [1, 1.2, 1] : 0,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full"
            style={{
              x: imageX,
              y: imageY,
            }}
          >
            <Image
              src={images[startIndex]}
              alt={`hero-${startIndex}`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <motion.div
          variants={borderVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)",
            backgroundSize: "400% 400%",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            style={{
              x: textX,
              y: textY,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="font-[Poppins] font-light text-white/80 text-sm md:text-base lg:text-lg tracking-widest uppercase letter-spacing-wider">
                Frontend Engineer & Creative Developer
              </h1>
            </motion.div>
            <div className="relative mb-8">
              <motion.h2
                key={startIndex}
                className="font-[MAINLUX-Bold] text-white drop-shadow-2xl text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {"Olaoluwa Yusuf".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letter}
                    className="inline-block hover:scale-110 transition-transform duration-300"
                    whileHover={{
                      scale: 1.2,
                      color: "#06b6d4",
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    style={{
                      textShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.div
                className="absolute inset-0 -z-10 blur-3xl opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.4), transparent 50%)",
                    "radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.4), transparent 50%)",
                    "radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.4), transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 180, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              className="relative h-1 mx-auto mb-12 overflow-hidden rounded-full"
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)",
                  backgroundSize: "300% 100%",
                }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-[Poppins] text-white/70 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
              Crafting immersive digital experiences with modern technologies
              and attention to detail.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 right-8 flex items-center gap-2 text-white/50 text-sm"
            >
              <span className="font-mono">
                {String(startIndex + 1).padStart(2, "0")}
              </span>
              <div className="h-px w-8 bg-white/30" />
              <span className="font-mono">
                {String(images.length).padStart(2, "0")}
              </span>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-px h-16 bg-gradient-to-b from-cyan-400/50 to-transparent" />
            <span className="text-xs text-white/50 tracking-widest">
              SCROLL
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
