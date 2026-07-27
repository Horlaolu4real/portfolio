// "use client";
// import React, { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import { motion, useMotionValue } from "framer-motion";
// import { FiMail, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
// import GridPattern from "@/components/Decoratives/GridPattern";
// import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
// import logo from "@/components/images/logo-size.webp";

// const Footer = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const [now, setNow] = useState<Date | null>(null);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const { clientX, clientY } = e;
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     const x = (clientX / width - 0.5) * 100;
//     const y = (clientY / height - 0.5) * 100;

//     mouseX.set(x);
//     mouseY.set(y);
//   };
//   useEffect(() => {
//     setNow(new Date());
//     const id = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(id);
//   }, []);
//   const timeString = useMemo(() => {
//     if (!now) return "";
//     const options: Intl.DateTimeFormatOptions = {
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: true,
//     };
//     return new Intl.DateTimeFormat("en-US", options).format(now);
//   }, [now]);

//   const footerLinks = [
//     {
//       label: "Email",
//       href: "mailto:olaoluwayusuf121@gmail.com",
//       icon: FiMail,
//       color: "from-cyan-400 to-blue-500",
//     },
//     {
//       label: "LinkedIn",
//       href: "https://www.linkedin.com/in/olaoluwa-yusuf-00387a2bb/",
//       icon: FiLinkedin,
//       color: "from-blue-500 to-indigo-500",
//     },
//     {
//       label: "GitHub",
//       href: "https://github.com/Horlaolu4real",
//       icon: FiGithub,
//       color: "from-violet-500 to-purple-500",
//     },
//   ];

//   const techStack = [
//     { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
//     { icon: SiReact, label: "React", color: "text-cyan-400" },
//     { icon: SiTailwindcss, label: "Tailwind", color: "text-blue-400" },
//   ];

//   const floatingOrbs = [
//     { delay: 0, size: 40, x: 10, y: 20 },
//     { delay: 2, size: 60, x: 85, y: 40 },
//     { delay: 4, size: 30, x: 25, y: 80 },
//   ];

//   const FloatingOrb = ({ delay = 0, size = 40, x = 0, y = 0 }) => (
//     <motion.div
//       className="absolute rounded-full pointer-events-none"
//       style={{
//         width: size,
//         height: size,
//         background:
//           "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.15), transparent 70%)",
//         left: `${x}%`,
//         top: `${y}%`,
//       }}
//       initial={{ opacity: 0, scale: 0 }}
//       animate={{
//         opacity: [0.1, 0.2, 0.1],
//         scale: [1, 1.1, 1],
//         x: [0, Math.random() * 20 - 10, 0],
//         y: [0, Math.random() * 20 - 10, 0],
//       }}
//       transition={{
//         duration: 10 + Math.random() * 5,
//         repeat: Infinity,
//         delay,
//         ease: "easeInOut",
//       }}
//     />
//   );

//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       onMouseMove={handleMouseMove}
//       className="relative w-full overflow-hidden mt-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 border-t border-gray-800"
//     >
//       {/* Grid pattern (consistent "brick" effect) */}
//       {floatingOrbs.map((orb, index) => (
//         <FloatingOrb key={index} {...orb} />
//       ))}
//       {/* Standardized grid background */}
//       <GridPattern size={50} opacity={0.05} color="#06b6d4" />
//       <motion.div
//         className="absolute top-0 left-0 right-0 h-px pointer-events-none"
//         animate={{
//           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, #06b6d4, #8b5cf6, transparent)",
//           backgroundSize: "300% 100%",
//         }}
//       />
//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-8 md:py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
//           {/* Brand Column */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-col items-center lg:items-start"
//           >
//             <motion.div whileHover={{ scale: 1.05 }} className="relative mb-6">
//               <Image
//                 src={logo}
//                 alt="Olaoluwa Yusuf Logo"
//                 className="w-48 h-auto filter drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]"
//               />
//               <motion.div
//                 className="absolute -inset-4 blur-3xl opacity-20 -z-10"
//                 animate={{
//                   background: [
//                     "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.3), transparent 50%)",
//                     "radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.3), transparent 50%)",
//                     "radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.3), transparent 50%)",
//                   ],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-gray-400 font-[Poppins] text-sm md:text-base text-center lg:text-left mb-6 max-w-sm"
//             >
//               Crafting exceptional digital experiences with modern web
//               technologies and innovative design.
//             </motion.p>

//             {/* Tech Stack */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="flex gap-4"
//             >
//               {techStack.map((tech, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg backdrop-blur-sm"
//                 >
//                   <tech.icon className={`w-5 h-5 ${tech.color}`} />
//                   <span className="text-xs text-gray-300 font-medium">
//                     {tech.label}
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="flex flex-col items-center lg:items-center"
//           >
//             <h3 className="font-[Poppins] font-semibold text-white text-lg mb-6 tracking-wider">
//               CONNECT WITH ME
//             </h3>

//             <div className="space-y-4">
//               {footerLinks.map((link, index) => {
//                 const Icon = link.icon;
//                 return (
//                   <motion.a
//                     key={index}
//                     href={link.href}
//                     target={link.href.startsWith("http") ? "_blank" : undefined}
//                     rel="noopener noreferrer"
//                     className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 no-underline`}
//                     onMouseEnter={() => setHoveredIndex(index)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                     whileHover={{ x: 5 }}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <motion.div
//                       className="relative"
//                       animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
//                     </motion.div>
//                     <span className="font-[Poppins] text-gray-300 group-hover:text-white transition-colors">
//                       {link.label}
//                     </span>

//                     {/* Hover gradient effect */}
//                     <motion.div
//                       className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-gradient-to-r ${link.color} transition-opacity duration-300 -z-10`}
//                       initial={false}
//                       animate={{
//                         backgroundPosition:
//                           hoveredIndex === index
//                             ? ["0% 50%", "100% 50%", "0% 50%"]
//                             : "0% 50%",
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                       style={{
//                         backgroundSize: "200% 200%",
//                       }}
//                     />
//                   </motion.a>
//                 );
//               })}
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-col items-center lg:items-end"
//           >
//             <h3 className="font-[Poppins] font-semibold text-white text-lg mb-6 tracking-wider">
//               LET WORK TOGETHER
//             </h3>

//             <motion.a
//               href="/OLAOLUWA%20YUSUF%20FRONT.pdf"
//               download
//               className="group relative px-8 py-4 rounded-xl overflow-hidden no-underline"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               style={{ textDecoration: "none" }}
//             >
//               {/* Animated gradient background */}
//               <motion.div
//                 className="absolute inset-0"
//                 animate={{
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 style={{
//                   background:
//                     "linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)",
//                   backgroundSize: "300% 100%",
//                 }}
//               />

//               {/* Content */}
//               <div className="relative flex items-center gap-3">
//                 <motion.div
//                   animate={{ y: [0, -2, 0] }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <FiDownload className="w-5 h-5 text-white" />
//                 </motion.div>
//                 <span className="font-[Poppins] font-semibold text-white text-base">
//                   Download Resume
//                 </span>
//               </div>
//             </motion.a>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="mt-8 text-gray-400 font-[Poppins] text-sm text-center lg:text-right"
//             >
//               Available for freelance projects and full-time opportunities
//             </motion.p>
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: "100%" }}
//           transition={{ delay: 0.6, duration: 1 }}
//           className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12"
//         />

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           className="flex flex-col md:flex-row justify-between items-center gap-6"
//         >
//           <div className="flex items-center gap-2 text-gray-300 font-[Poppins] text-sm">
//             <span>Lagos, Ng</span>
//             <span>•</span>
//             <span className="font-mono">{timeString}</span>
//           </div>
//           <a
//             href="mailto:olaoluwayusuf121@gmail.com"
//             className="font-[MAINLUX-Bold] text-2xl text-gray-200 hover:text-white transition-colors"
//             style={{ textDecoration: "none" }}
//           >
//             olaoluwayusuf121@gmail.com
//           </a>
//           <div className="flex items-center gap-3">
//             {footerLinks.map((link, i) => {
//               const Icon = link.icon;
//               return (
//                 <a
//                   key={i}
//                   href={link.href}
//                   target={link.href.startsWith("http") ? "_blank" : undefined}
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 rounded-xl border border-white/20 text-gray-200 hover:bg-white/10 transition-colors flex items-center gap-2"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <Icon className="w-4 h-4" />
//                   <span className="text-xs font-[Poppins] tracking-wide">
//                     {link.label.toUpperCase()}
//                   </span>
//                 </a>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//       {/* Scroll to top button */}
//       <motion.button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center z-50"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1 }}
//       >
//         <motion.svg
//           className="w-6 h-6 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           animate={{ y: [0, -3, 0] }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M5 10l7-7m0 0l7 7m-7-7v18"
//           />
//         </motion.svg>
//       </motion.button>
//     </motion.footer>
//   );
// };

// export default Footer;

"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiDownload, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import logo from "@/components/images/logo-size.webp";

// ── Types ──────────────────────────────────────────────────
interface FooterLink {
  label: string;
  href: string;
  icon: React.ElementType;
  /** Optional brand accent used on hover (falls back to --accent). */
  brand?: string;
}

interface PhoneNumber {
  label: string; // network / line label, e.g. "Glo"
  display: string; // pretty number shown to the visitor
  href: string; // tel: link
}

interface TechItem {
  icon: React.ElementType;
  label: string;
  color: string;
}

interface OrbProps {
  delay?: number;
  size?: number;
  x?: number;
  y?: number;
}

// ── Data ───────────────────────────────────────────────────
// Pre-filled WhatsApp greeting so visitors start the chat with one tap.
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Olaoluwa, I saw your portfolio and I'd love to connect."
);

const FOOTER_LINKS: FooterLink[] = [
  { label: "Email", href: "mailto:olaoluwayusuf121@gmail.com", icon: FiMail },
  {
    label: "WhatsApp",
    href: `https://wa.me/2348112731701?text=${WHATSAPP_MESSAGE}`,
    icon: FaWhatsapp,
    brand: "#25D366",
  },
  {
    label: "X",
    href: "https://x.com/OlaoluwaYusuf1",
    icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olaoluwa-yusuf-00387a2bb/",
    icon: FiLinkedin,
  },
  { label: "GitHub", href: "https://github.com/Horlaolu4real", icon: FiGithub },
];

// Two lines — visitors can call whichever network they're on.
const PHONE_NUMBERS: PhoneNumber[] = [
  { label: "Glo", display: "+234 811 273 1701", href: "tel:+2348112731701" },
  { label: "Airtel", display: "+234 802 940 8718", href: "tel:+2348029408718" },
];

const TECH_STACK: TechItem[] = [
  { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
  { icon: SiReact, label: "React", color: "text-[#61DAFB]" },
  { icon: SiTailwindcss, label: "Tailwind", color: "text-[#06B6D4]" },
];

const FLOATING_ORBS: OrbProps[] = [
  { delay: 0, size: 40, x: 10, y: 20 },
  { delay: 2, size: 60, x: 85, y: 40 },
  { delay: 4, size: 30, x: 25, y: 80 },
];

// ── Floating orb — brand orange instead of cyan ───────────
const FloatingOrb = ({ delay = 0, size = 40, x = 0, y = 0 }: OrbProps) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      // was: rgba(6,182,212,…) cyan — now brand orange
      background:
        "radial-gradient(circle at 30% 30%, rgba(229,99,55,0.15), transparent 70%)",
      left: `${x}%`,
      top: `${y}%`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.1, 0.25, 0.1],
      scale: [1, 1.12, 1],
      x: [0, 12, 0],
      y: [0, -10, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

// ── Component ──────────────────────────────────────────────
const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [now, setNow] = useState<Date | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set((e.clientX / window.innerWidth - 0.5) * 100);
    mouseY.set((e.clientY / window.innerHeight - 0.5) * 100);
  };

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeString = useMemo(() => {
    if (!now) return "";
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(now);
  }, [now]);

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden mt-8"
      style={{
        // was: gray-950 → black → gray-900  |  now: your canvas colours
        background:
          "linear-gradient(135deg, #0d0d0d 0%, #0a0a0a 50%, #111111 100%)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Floating orbs */}
      {FLOATING_ORBS.map((orb, i) => (
        <FloatingOrb key={i} {...orb} />
      ))}

      {/* Top animated border — was cyan/purple, now orange */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(90deg, transparent, #e56337, #f49778, transparent)",
          backgroundSize: "300% 100%",
        }}
      />

      <div className="relative z-10 page_container py-10 md:py-16 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10 lg:gap-12 items-start">
          {/* ── Col 1: Brand ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start lg:items-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative mb-6">
              <Image
                src={logo}
                alt="Olaoluwa Yusuf Logo"
                className="w-48 h-auto"
                style={{
                  // was cyan drop-shadow — now orange
                  filter: "drop-shadow(0 0 24px rgba(229,99,55,0.3))",
                }}
              />
              {/* Logo ambient glow */}
              <motion.div
                className="absolute -inset-4 blur-3xl opacity-20 -z-10"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 30%, rgba(229,99,55,0.35), transparent 55%)",
                    "radial-gradient(circle at 70% 30%, rgba(244,151,120,0.25), transparent 55%)",
                    "radial-gradient(circle at 30% 30%, rgba(229,99,55,0.35), transparent 55%)",
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
              className="text-sm md:text-base text-center md:text-left lg:text-left mb-6 max-w-xs md:max-w-sm font-[Karla]"
              style={{ color: "var(--text-secondary)" }}
            >
              Crafting exceptional digital experiences with modern web
              technologies and intentional design.
            </motion.p>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-3 flex-wrap"
            >
              {TECH_STACK.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <tech.icon className={`w-4 h-4 ${tech.color}`} />
                  <span className="text-xs text-white/60 font-[Karla] font-medium">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Col 2: Connect ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center md:items-start lg:items-center"
          >
            <h3
              className="font-[Karla] font-semibold text-white text-base mb-6 tracking-[0.15em]"
              style={{ color: "var(--text-primary)" }}
            >
              CONNECT WITH ME
            </h3>

            <div className="space-y-3 w-full max-w-[220px] md:max-w-[260px]">
              {FOOTER_LINKS.map((link, i) => {
                const Icon = link.icon;
                const isHovered = hoveredIndex === i;
                const hoverColor = link.brand ?? "var(--accent)";
                // Brand-tinted background/border on hover (WhatsApp green, etc.)
                const tint = link.brand
                  ? { bg: `${link.brand}14`, border: `${link.brand}4d` }
                  : { bg: "rgba(229,99,55,0.08)", border: "rgba(229,99,55,0.3)" };
                return (
                  <motion.a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 no-underline"
                    style={{
                      backgroundColor: isHovered ? tint.bg : "rgba(255,255,255,0.04)",
                      border: isHovered
                        ? `1px solid ${tint.border}`
                        : "1px solid rgba(255,255,255,0.07)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ x: 5 }}
                  >
                    {/* Icon — spins on hover (your original interaction, kept) */}
                    <motion.div
                      animate={{ rotate: isHovered ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon
                        className="w-5 h-5 transition-colors duration-300"
                        style={{
                          color: isHovered ? hoverColor : "rgba(255,255,255,0.5)",
                        }}
                      />
                    </motion.div>
                    <span
                      className="font-[Karla] text-sm transition-colors duration-300"
                      style={{
                        color: isHovered ? "#fff" : "rgba(255,255,255,0.55)",
                      }}
                    >
                      {link.label}
                    </span>
                  </motion.a>
                );
              })}

              {/* Call me — Glo / Airtel lines */}
              <div className="pt-2">
                <p
                  className="font-[Karla] text-xs tracking-[0.15em] mb-2"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  CALL ME
                </p>
                <div className="space-y-2">
                  {PHONE_NUMBERS.map((phone, i) => (
                    <motion.a
                      key={i}
                      href={phone.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors duration-300 no-underline group"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        textDecoration: "none",
                      }}
                    >
                      <FiPhone
                        className="w-4 h-4 shrink-0 transition-colors duration-300 group-hover:text-[color:var(--accent)]"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      />
                      <span className="flex flex-col leading-tight">
                        <span className="font-[Karla] text-sm text-white/75">
                          {phone.display}
                        </span>
                        <span
                          className="font-[Karla] text-[0.65rem] tracking-wide"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          {phone.label}
                        </span>
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Col 3: CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center md:col-span-2 md:items-center lg:col-span-1 lg:items-end"
          >
            <h3 className="font-[Karla] font-semibold text-white text-base mb-6 tracking-[0.15em]">
              LET&apos;S WORK TOGETHER
            </h3>

            {/* Resume download — was cyan/purple/pink gradient, now brand orange */}
            <motion.a
              href="/resume.pdf"
              download="Olaoluwa-Yusuf-Resume.pdf"
              className="group relative px-8 py-4 rounded-xl overflow-hidden no-underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ textDecoration: "none" }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                  // was: cyan → purple → pink  |  now: your orange ramp
                  background:
                    "linear-gradient(90deg, #e56337, #f49778, #eb761c, #e56337)",
                  backgroundSize: "300% 100%",
                }}
              />
              <div className="relative flex items-center gap-3">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiDownload className="w-5 h-5 text-black" />
                </motion.div>
                <span className="font-[Karla] font-bold text-black text-sm tracking-wide">
                  Download Resume
                </span>
              </div>
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-sm text-center md:max-w-xl lg:max-w-none lg:text-right font-[Karla]"
              style={{ color: "var(--text-secondary)" }}
            >
              Available for freelance projects and full-time opportunities
            </motion.p>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-px my-10 md:my-12 lg:my-10"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(229,99,55,0.3), transparent)",
          }}
        />

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-7 lg:gap-6"
        >
          {/* Location + live clock */}
          <div
            className="flex items-center gap-2 text-sm font-[Karla]"
            style={{ color: "var(--text-secondary)" }}
          >
            <span>Lagos, NG</span>
            <span style={{ color: "var(--accent)" }}>•</span>
            <span>{timeString}</span>
          </div>

          {/* Email — large, centred */}
          <a
            href="mailto:olaoluwayusuf121@gmail.com"
            className="font-[MAINLUX-Bold] text-xl lg:text-2xl transition-colors duration-300 text-center break-all md:break-normal"
            style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.6)";
            }}
          >
            olaoluwayusuf121@gmail.com
          </a>

          {/* Social icon pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2">
            {FOOTER_LINKS.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.08,
                    borderColor: "rgba(229,99,55,0.5)",
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl transition-colors duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-[Karla] tracking-widest">
                    {link.label.toUpperCase()}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll to top ── */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center z-50"
        style={{
          // was cyan/blue — now orange tinted
          backgroundColor: "rgba(229,99,55,0.15)",
          border: "1px solid rgba(229,99,55,0.25)",
          backdropFilter: "blur(8px)",
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(229,99,55,0.25)",
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to top"
      >
        <motion.svg
          className="w-5 h-5"
          style={{ color: "var(--accent)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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
