"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    { name: "Details", link: "/#details" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav
      className={`
        fixed left-0 right-0 z-[1000] transition-all duration-300
        lg:mx-auto lg:w-[90%] lg:max-w-[1440px] lg:rounded-lg
        px-5 sm:px-8 md:px-10

        ${isScrolled ? "top-0" : "top-6"}

        ${
          isScrolled
            ? "bg-[#00000082] py-3 shadow-md lg:top-10"
            : "backdrop-blur-md py-4"
        }

        ${!isScrolled ? "mx-4 sm:mx-6 md:mx-8" : "mx-0"}
        ${!isScrolled ? "rounded-lg" : "rounded-none"}
      `}
    >
      <div className="relative flex items-center justify-between transition-colors duration-300">
        {/* Logo */}
        <Link
          href="/"
          className="hover:no-underline font-[MAINLUX-Bold] text-2xl text-[#ffd700]"
        >
          Olaoluwa
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 font-medium">
          {navList.map((item) => (
            <Link key={item.name} href={item.link}>
              <li
                className={`cursor-pointer transition ${
                  pathname === item.link
                    ? "text-[#ffd700]"
                    : "text-gray-300 hover:text-[#ffd700]"
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Desktop Right Buttons (If needed later) */}

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes size={24} className="text-[#ffd700]" />
            ) : (
              <FaBars size={24} className="text-[#ffd700]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden mt-4 flex flex-col gap-4 bg-[#111]/95 text-gray-200 rounded-lg shadow-lg p-6"
          >
            {navList.map((item) => (
              <Link key={item.name} href={item.link}>
                <li
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer transition ${
                    pathname === item.link
                      ? "text-[#ffd700]"
                      : "hover:text-[#ffd700]"
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[900]"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
