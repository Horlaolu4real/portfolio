"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
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
  const [hash, setHash] = useState<string>("");
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
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", updateHash);
    updateHash();
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const navList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Contact", link: "/#details" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || menuOpen
            ? "backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-[0_6px_30px_rgba(0,0,0,0.35)] py-2"
            : "bg-transparent py-4"
        }`}
      >
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
              <span
                className={
                  isScrolled
                    ? "text-white"
                    : "bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent"
                }
              >
                Olaoluwa
              </span>
              <motion.span
                className="absolute inset-0 -z-10 blur-xl opacity-0 group-hover:opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.3), transparent 50%)",
                    "radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.3), transparent 50%)",
                    "radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.3), transparent 50%)",
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
                  className="relative font-[Inter] text-[18px] font-medium tracking-wide px-2 py-1 rounded-lg transition-all duration-300"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className={`relative z-10 ${
                      (
                        item.link.includes("#")
                          ? hash === item.link.slice(item.link.indexOf("#"))
                          : pathname === item.link
                      )
                        ? "text-cyan-300"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                  {(item.link.includes("#")
                    ? hash === item.link.slice(item.link.indexOf("#"))
                    : pathname === item.link) && (
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
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm"
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
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          }}
        />
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
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
