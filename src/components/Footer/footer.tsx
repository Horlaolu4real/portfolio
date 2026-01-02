"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import GridPattern from "@/components/Decoratives/GridPattern";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import logo from "@/components/images/logo-size.webp";

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const x = (clientX / width - 0.5) * 100;
    const y = (clientY / height - 0.5) * 100;

    mouseX.set(x);
    mouseY.set(y);
  };

  const footerLinks = [
    {
      label: "Email",
      href: "mailto:olaoluwayusuf121@gmail.com",
      icon: FiMail,
      color: "from-cyan-400 to-blue-500",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/olaoluwa-yusuf-00387a2bb/",
      icon: FiLinkedin,
      color: "from-blue-500 to-indigo-500",
    },
    {
      label: "GitHub",
      href: "https://github.com/Horlaolu4real",
      icon: FiGithub,
      color: "from-violet-500 to-purple-500",
    },
  ];

  const techStack = [
    { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
    { icon: SiReact, label: "React", color: "text-cyan-400" },
    { icon: SiTailwindcss, label: "Tailwind", color: "text-blue-400" },
  ];

  const floatingOrbs = [
    { delay: 0, size: 40, x: 10, y: 20 },
    { delay: 2, size: 60, x: 85, y: 40 },
    { delay: 4, size: 30, x: 25, y: 80 },
  ];

  const FloatingOrb = ({ delay = 0, size = 40, x = 0, y = 0 }) => (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.15), transparent 70%)",
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.1],
        scale: [1, 1.1, 1],
        x: [0, Math.random() * 20 - 10, 0],
        y: [0, Math.random() * 20 - 10, 0],
      }}
      transition={{
        duration: 10 + Math.random() * 5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden mt-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 border-t border-gray-800"
    >
      {/* Grid pattern (consistent "brick" effect) */}
      {floatingOrbs.map((orb, index) => (
        <FloatingOrb key={index} {...orb} />
      ))}
      {/* Standardized grid background */}
      <GridPattern size={50} opacity={0.05} color="#06b6d4" />
      <motion.div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
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
            "linear-gradient(90deg, transparent, #06b6d4, #8b5cf6, transparent)",
          backgroundSize: "300% 100%",
        }}
      />
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative mb-6">
              <Image
                src={logo}
                alt="Olaoluwa Yusuf Logo"
                className="w-48 h-auto filter drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              />
              <motion.div
                className="absolute -inset-4 blur-3xl opacity-20 -z-10"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.3), transparent 50%)",
                    "radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.3), transparent 50%)",
                    "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.3), transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 font-[Poppins] text-sm md:text-base text-center lg:text-left mb-6 max-w-sm"
            >
              Crafting exceptional digital experiences with modern web
              technologies and innovative design.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <tech.icon className={`w-5 h-5 ${tech.color}`} />
                  <span className="text-xs text-gray-300 font-medium">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center lg:items-center"
          >
            <h3 className="font-[Poppins] font-semibold text-white text-lg mb-6 tracking-wider">
              CONNECT WITH ME
            </h3>

            <div className="space-y-4">
              {footerLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 no-underline`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ x: 5 }}
                    style={{ textDecoration: "none" }}
                  >
                    <motion.div
                      className="relative"
                      animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </motion.div>
                    <span className="font-[Poppins] text-gray-300 group-hover:text-white transition-colors">
                      {link.label}
                    </span>

                    {/* Hover gradient effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-gradient-to-r ${link.color} transition-opacity duration-300 -z-10`}
                      initial={false}
                      animate={{
                        backgroundPosition:
                          hoveredIndex === index
                            ? ["0% 50%", "100% 50%", "0% 50%"]
                            : "0% 50%",
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center lg:items-end"
          >
            <h3 className="font-[Poppins] font-semibold text-white text-lg mb-6 tracking-wider">
              LET WORK TOGETHER
            </h3>

            <motion.a
              href="/resume.pdf"
              download
              className="group relative px-8 py-4 rounded-xl overflow-hidden no-underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ textDecoration: "none" }}
            >
              {/* Animated gradient background */}
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

              {/* Content */}
              <div className="relative flex items-center gap-3">
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiDownload className="w-5 h-5 text-white" />
                </motion.div>
                <span className="font-[Poppins] font-semibold text-white text-base">
                  Download Resume
                </span>
              </div>
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gray-400 font-[Poppins] text-sm text-center lg:text-right"
            >
              Available for freelance projects and full-time opportunities
            </motion.p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-[Poppins] text-gray-500 text-sm">
            © {new Date().getFullYear()} Olaoluwa Yusuf. All rights reserved.
          </p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.p
              className="font-[Poppins] text-gray-500 text-sm"
              animate={{
                color: ["#6b7280", "#06b6d4", "#6b7280"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Crafted with precision and passion
            </motion.p>
            <motion.div
              className="w-1 h-1 rounded-full bg-cyan-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </motion.svg>
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
