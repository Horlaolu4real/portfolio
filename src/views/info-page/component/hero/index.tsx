// "use client";
// import React from "react";
// import { motion, type Variants } from "framer-motion";
// import Link from "next/link";

// const heroImage = "/Hero-portfolio.webp";

// const container: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.05,
//       delayChildren: 0.3,
//     },
//   },
// };

// const item: Variants = {
//   hidden: { opacity: 0, y: 16 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const Hero = () => {
//   return (
//     <section className="relative w-full bg-gradient-to-br from-gray-950 via-black to-gray-900">
//       <div className="relative max-w-[1440px] mx-auto px-6 pt-28 pb-24 lg:pt-36 lg:pb-40">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
//           }}
//           className="flex flex-col items-center text-center gap-8"
//         >
//           <div className="flex flex-col items-center gap-6">
//             <motion.h1
//               variants={item}
//               className="font-[Poppins] font-light text-white/80 text-sm md:text-base tracking-widest uppercase"
//             >
//               Frontend Engineer
//             </motion.h1>
//             <motion.h2
//               variants={item}
//               className="font-[MAINLUX-Bold] text-6xl md:text-7xl lg:text-8xl leading-tight"
//             >
//               <motion.span
//                 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
//                 animate={{
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//                 style={{ backgroundSize: "200% 200%" }}
//               >
//                 Olaoluwa Yusuf
//               </motion.span>
//             </motion.h2>
//             <motion.div
//               variants={item}
//               className="h-1 w-40 rounded-full mx-auto"
//               animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//               style={{
//                 background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #06b6d4)",
//                 backgroundSize: "200% 100%",
//               }}
//             />
//             <motion.p
//               variants={item}
//               className="font-[Poppins] text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed"
//             >
//               Crafting fast, accessible, and delightful interfaces with modern
//               web technologies.
//             </motion.p>
//             <motion.div variants={item} className="flex items-center gap-4">
//               <Link
//                 href="/#projects"
//                 className="px-6 py-3 rounded-lg bg-[#06b6d4] text-black font-[Lato] text-[16px]"
//               >
//                 View Projects
//               </Link>
//               <Link
//                 href="/#details"
//                 className="px-6 py-3 rounded-lg border border-white/20 text-white font-[Lato] text-[16px]"
//               >
//                 Contact Me
//               </Link>
//             </motion.div>
//           </div>

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.35,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9 } },
};

const TECH_STACK: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Primary glow — uses your brand orange */}
        <div
          className="absolute top-[-15%] left-[15%] w-[560px] h-[560px] rounded-full blur-[140px]"
          style={{ backgroundColor: "rgba(229, 99, 55, 0.08)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[5%] w-[420px] h-[420px] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(229, 99, 55, 0.05)" }}
        />
        {/* Subtle dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="page_container relative py-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-7">
            <span
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium tracking-wide"
              style={{
                border: "1px solid rgba(229, 99, 55, 0.3)",
                backgroundColor: "rgba(229, 99, 55, 0.08)",
                color: "var(--accent)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(3.2rem,8vw,6.5rem)] font-extrabold text-white mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Frontend
            <br />
            <span style={{ color: "var(--accent)" }}>Engineer.</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "Karla, sans-serif",
            }}
          >
            I build fast, accessible, and visually intentional web experiences.
            Clean code. Thoughtful design. Every detail earns its place.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide text-black transition-colors duration-300"
              style={{ backgroundColor: "var(--accent)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#c9542c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--accent)";
              }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.75)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#fff";
                el.style.borderColor = "rgba(255,255,255,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "rgba(255,255,255,0.75)";
                el.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              Get in Touch →
            </motion.a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div variants={fadeIn} className="flex flex-wrap gap-2.5">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--text-tertiary)",
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 right-0 hidden md:flex flex-col items-center gap-3"
          aria-hidden
        >
          <span
            className="text-xs tracking-[0.25em] [writing-mode:vertical-rl]"
            style={{ color: "var(--text-tertiary)" }}
          >
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-12 origin-top"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
