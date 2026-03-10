// "use client";
// import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import Link from "next/link";
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 25,
//     },
//   },
// };

// const mobileMenuVariants: Variants = {
//   closed: {
//     opacity: 0,
//     x: "100%",
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//     },
//   },
//   open: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.4,
//       ease: "easeOut",
//       staggerChildren: 0.1,
//       delayChildren: 0.1,
//     },
//   },
// };

// const mobileItemVariants: Variants = {
//   closed: { opacity: 0, x: 20 },
//   open: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       stiffness: 200,
//       damping: 20,
//     },
//   },
// };

// const Navbar: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState<number | null>(null);
//   const [hash, setHash] = useState<string>("");
//   const pathname = usePathname();

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   useEffect(() => {
//     const updateHash = () => setHash(window.location.hash || "");
//     window.addEventListener("hashchange", updateHash);
//     updateHash();
//     return () => window.removeEventListener("hashchange", updateHash);
//   }, []);

//   const navList = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/#about" },
//     { name: "Projects", link: "/#projects" },
//     { name: "Contact", link: "/#details" },
//   ];

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled || menuOpen
//             ? "backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-[0_6px_30px_rgba(0,0,0,0.35)] py-2"
//             : "bg-transparent py-4"
//         }`}
//       >
//         <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between h-16">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="relative"
//           >
//             <Link
//               href="/"
//               className="hover:no-underline font-[MAINLUX-Bold] text-2xl relative group"
//               style={{ textDecoration: "none" }}
//             >
//               <span
//                 className={
//                   isScrolled
//                     ? "text-white"
//                     : "bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent"
//                 }
//               >
//                 Olaoluwa
//               </span>
//               <motion.span
//                 className="absolute inset-0 -z-10 blur-xl opacity-0 group-hover:opacity-30"
//                 animate={{
//                   background: [
//                     "radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.3), transparent 50%)",
//                     "radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.3), transparent 50%)",
//                     "radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.3), transparent 50%)",
//                   ],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             </Link>
//           </motion.div>
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="hidden lg:flex items-center gap-8"
//           >
//             {navList.map((item, index) => (
//               <motion.div
//                 key={item.name}
//                 variants={itemVariants}
//                 onMouseEnter={() => setHoveredItem(index)}
//                 onMouseLeave={() => setHoveredItem(null)}
//                 className="relative"
//               >
//                 <Link
//                   href={item.link}
//                   className="relative font-[Inter] text-[18px] font-medium tracking-wide px-2 py-1 rounded-lg transition-all duration-300"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <span
//                     className={`relative z-10 ${
//                       (
//                         item.link.includes("#")
//                           ? hash === item.link.slice(item.link.indexOf("#"))
//                           : pathname === item.link
//                       )
//                         ? "text-cyan-300"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                   >
//                     {item.name}
//                   </span>
//                   {(item.link.includes("#")
//                     ? hash === item.link.slice(item.link.indexOf("#"))
//                     : pathname === item.link) && (
//                     <motion.div
//                       layoutId="activeIndicator"
//                       className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   )}
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//           <motion.button
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//             className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm"
//             onClick={() => setMenuOpen(!menuOpen)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             animate={{ rotate: menuOpen ? 180 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="relative w-6 h-5">
//               <motion.span
//                 className="absolute left-0 w-6 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
//                 animate={{
//                   top: menuOpen ? "50%" : "0%",
//                   rotate: menuOpen ? 45 : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <motion.span
//                 className="absolute left-0 w-6 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
//                 animate={{
//                   top: "50%",
//                   opacity: menuOpen ? 0 : 1,
//                 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <motion.span
//                 className="absolute left-0 w-6 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
//                 animate={{
//                   top: menuOpen ? "50%" : "100%",
//                   rotate: menuOpen ? -45 : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>
//           </motion.button>
//         </div>
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 h-px"
//           animate={{ opacity: [0.4, 1, 0.4] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           style={{
//             background:
//               "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
//           }}
//         />
//       </motion.nav>
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={mobileMenuVariants}
//             className="fixed inset-0 z-40 lg:hidden"
//             style={{
//               background:
//                 "linear-gradient(135deg, rgba(17,24,39,0.98) 0%, rgba(3,7,18,0.98) 100%)",
//               backdropFilter: "blur(20px)",
//             }}
//           >
//             <div className="relative h-full flex flex-col items-center justify-center px-6">
//               <motion.button
//                 aria-label="Close menu"
//                 className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
//                 onClick={() => setMenuOpen(false)}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <span className="text-2xl text-white">×</span>
//               </motion.button>
//               <motion.div className="flex flex-col items-center gap-8">
//                 {navList.map((item) => (
//                   <motion.div
//                     key={item.name}
//                     variants={mobileItemVariants}
//                     className="relative"
//                   >
//                     <Link
//                       href={item.link}
//                       onClick={() => setMenuOpen(false)}
//                       className="relative text-2xl font-medium tracking-wide px-4 py-2 rounded-lg transition-all duration-300 block"
//                       style={{ textDecoration: "none" }}
//                     >
//                       <span
//                         className={`relative z-10 ${
//                           pathname === item.link
//                             ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
//                             : "text-white hover:text-gray-300"
//                         }`}
//                       >
//                         {item.name}
//                       </span>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0d0d0d]/75 backdrop-blur-[20px] border-b border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-transparent",
      ].join(" ")}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="page_container flex items-center justify-between py-5">
        {/* ── Logo ── */}
        <Link
          href="#home"
          onClick={() => setActiveLink("Home")}
          className="flex items-center gap-1 text-white font-bold text-xl tracking-tight group"
        >
          <span
            className="text-[--accent] transition-transform duration-300 group-hover:-translate-x-0.5"
            style={{ color: "var(--accent)" }}
          >
            {"<"}
          </span>
          <span className="font-syne">Olaoluwa Yusuf</span>
          <span
            className="text-[--accent] transition-transform duration-300 group-hover:translate-x-0.5"
            style={{ color: "var(--accent)" }}
          >
            {"/>"}
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Desktop nav"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeLink === label;
            return (
              <a
                key={label}
                href={href}
                onClick={() => setActiveLink(label)}
                className="relative text-sm font-medium transition-colors duration-300 group"
                style={{
                  color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                }}
              >
                {label}
                {/* Sliding underline */}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    width: isActive ? "100%" : "0%",
                    backgroundColor: "var(--accent)",
                  }}
                />
                {/* Hover underline via CSS */}
                <style>{`
                  a[href="${href}"]:hover span { width: 100% !important; }
                  a[href="${href}"]:hover { color: #fff !important; }
                `}</style>
              </a>
            );
          })}
        </nav>

        {/* ── CTA ── */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
          style={{
            border: "1px solid rgba(229, 99, 55, 0.4)",
            color: "var(--accent)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "rgba(229,99,55,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "transparent";
          }}
        >
          Resume ↗
        </motion.a>

        {/* ── Hamburger ── */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-[2px] w-full rounded-full bg-white origin-center"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[2px] w-full rounded-full bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-[2px] w-full rounded-full bg-white origin-center"
          />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t"
            style={{
              backgroundColor: "rgba(13,13,13,0.95)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <ul className="page_container flex flex-col py-6 gap-6">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                >
                  <a
                    href={href}
                    onClick={() => {
                      setActiveLink(label);
                      setMenuOpen(false);
                    }}
                    className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.07 }}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{
                    border: "1px solid rgba(229, 99, 55, 0.4)",
                    color: "var(--accent)",
                  }}
                >
                  Resume ↗
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
