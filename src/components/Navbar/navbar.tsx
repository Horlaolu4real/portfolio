"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import GridPattern from "@/components/Decoratives/GridPattern";
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const mobileItemVariants: Variants = {
  closed: { opacity: 0, x: 20 },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Contact", link: "/#details" },
  ];

  // Floating orbs for navbar background
  const floatingOrbs = [
    { delay: 0, size: 20, x: 10, y: 30 },
    { delay: 1.5, size: 15, x: 85, y: 60 },
    { delay: 3, size: 25, x: 50, y: 20 },
  ];

  interface FloatingOrbProps {
    delay?: number;
    size?: number;
    x?: number;
    y?: number;
  }

  const FloatingOrb: React.FC<FloatingOrbProps> = ({
    delay = 0,
    size = 20,
    x = 0,
    y = 0,
  }) => (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background:
          "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.15), transparent 70%)",
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.05, 0.15, 0.05],
        scale: [1, 1.1, 1],
        x: [0, Math.random() * 10 - 5, 0],
        y: [0, Math.random() * 10 - 5, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || menuOpen
            ? "backdrop-blur-xl bg-black/30 border-b border-white/10 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <GridPattern
          size={30}
          opacity={0.05}
          color="#06b6d4"
          className="-z-10"
        />
        {floatingOrbs.map((orb, index) => (
          <FloatingOrb key={index} {...orb} />
        ))}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center pointer-events-none">
          <motion.div
            className="h-1 w-28 rounded-full"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
              backgroundSize: "200% 100%",
            }}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link
              href="/"
              className="hover:no-underline font-[MAINLUX-Bold] text-2xl relative group"
              style={{ textDecoration: "none" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Olaoluwa
              </span>
              <motion.span
                className="absolute inset-0 -z-10 blur-xl opacity-0 group-hover:opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.4), transparent 50%)",
                    "radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.4), transparent 50%)",
                    "radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.4), transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Link>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center gap-8"
          >
            {navList.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                <Link
                  href={item.link}
                  className="relative font-[Inter] text-[24px] font-medium tracking-wide px-2 py-1 rounded-lg transition-all duration-300"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className={`relative z-10 ${
                      pathname === item.link
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute inset-0 rounded-lg -z-10"
                    animate={{
                      background:
                        hoveredItem === index
                          ? [
                              "linear-gradient(90deg, rgba(6,182,212,0.1), rgba(139,92,246,0.1), rgba(6,182,212,0.1))",
                            ]
                          : "linear-gradient(90deg, transparent, transparent)",
                      backgroundSize:
                        hoveredItem === index ? "200% 100%" : "100% 100%",
                      backgroundPosition:
                        hoveredItem === index
                          ? ["0% 50%", "100% 50%", "0% 50%"]
                          : "0% 50%",
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {pathname === item.link && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-6 h-5">
              <motion.span
                className="absolute left-0 w-6 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                animate={{
                  top: menuOpen ? "50%" : "0%",
                  rotate: menuOpen ? 45 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute left-0 w-6 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                animate={{
                  top: "50%",
                  opacity: menuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute left-0 w-6 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                animate={{
                  top: menuOpen ? "50%" : "100%",
                  rotate: menuOpen ? -45 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(17,24,39,0.98) 0%, rgba(3,7,18,0.98) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            <GridPattern size={40} opacity={0.08} color="#06b6d4" />
            {floatingOrbs.map((orb, index) => (
              <FloatingOrb key={index} {...orb} size={orb.size * 2} />
            ))}

            <div className="relative h-full flex flex-col items-center justify-center px-6">
              <motion.button
                aria-label="Close menu"
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-2xl text-white">×</span>
              </motion.button>
              <motion.div className="flex flex-col items-center gap-8">
                {navList.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={mobileItemVariants}
                    className="relative"
                  >
                    <Link
                      href={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="relative text-2xl font-medium tracking-wide px-4 py-2 rounded-lg transition-all duration-300 block"
                      style={{ textDecoration: "none" }}
                    >
                      <span
                        className={`relative z-10 ${
                          pathname === item.link
                            ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                            : "text-white hover:text-gray-300"
                        }`}
                      >
                        {item.name}
                      </span>
                      {pathname === item.link && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-0 right-0 text-center"
              >
                <p className="text-gray-400 text-sm font-[Poppins]">
                  Crafting digital excellence
                </p>
                <motion.div
                  className="h-px w-32 mx-auto mt-2"
                  animate={{
                    background: [
                      "linear-gradient(90deg, transparent, #06b6d4, transparent)",
                      "linear-gradient(90deg, transparent, #8b5cf6, transparent)",
                      "linear-gradient(90deg, transparent, #06b6d4, transparent)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
