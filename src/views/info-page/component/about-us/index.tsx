// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-8 pt-12 px-4 pb-16"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, type: "spring" }}
//         className="text-[#0b1020] text-center font-[MAINLUX-Bold] font-light text-[32px] lg:text-[40px]"
//       >
//         About Me
//       </motion.h2>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
//         <div className="flex flex-col gap-5">
//           <h4 className="font-[MAINLUX-Bold] font-light text-[26px] lg:text-[32px] text-[#0b1020]">
//             Software Engineer focused on Front-end Development
//           </h4>
//           <p className="font-[Poppins] text-[16px] lg:text-[18px] leading-[1.7] text-[#222]">
//             I turn creative ideas into responsive, accessible, and performant
//             web experiences. Comfortable across the stack, I build clean
//             interfaces, integrate APIs, and ship scalable features that users
//             love.
//           </p>
//           <p className="font-[Poppins] text-[16px] lg:text-[18px] leading-[1.7] text-[#222]">
//             Whether collaborating or building solo, I focus on clarity, speed,
//             and maintainability—delivering reliable software that solves real
//             problems.
//           </p>
//         </div>
//         <div className="flex items-center justify-center">
//           <div className="grid grid-cols-2 gap-4 w-full">
//             <div className="rounded-2xl bg-[#f2f2f2] h-[140px]" />
//             <div className="rounded-2xl bg-[#eaeaea] h-[140px]" />
//             <div className="rounded-2xl bg-[#eaeaea] h-[140px]" />
//             <div className="rounded-2xl bg-[#f2f2f2] h-[140px]" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "15+", label: "Happy Clients" },
  { value: "∞", label: "Lines of Code" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none"
        style={{ backgroundColor: "rgba(229,99,55,0.05)" }}
        aria-hidden
      />

      <div className="page_container relative">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label block mb-3">Who I Am</span>
          <h2
            className="text-[36px] md:text-[48px] font-bold text-white"
            style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}
          >
            About Me
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ── Left: copy ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.h3
              variants={fadeUp}
              className="font-[MAINLUX-Bold] text-[22px] lg:text-[28px] leading-snug"
              style={{ color: "var(--text-primary)" }}
            >
              Software Engineer focused on{" "}
              <span style={{ color: "var(--accent)" }}>
                Front-end Development
              </span>
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-[16px] lg:text-[17px] leading-[1.8] font-[Karla]"
              style={{ color: "var(--text-secondary)" }}
            >
              I turn creative ideas into responsive, accessible, and performant
              web experiences. Comfortable across the stack, I build clean
              interfaces, integrate APIs, and ship scalable features that users
              love.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[16px] lg:text-[17px] leading-[1.8] font-[Karla]"
              style={{ color: "var(--text-secondary)" }}
            >
              Whether collaborating or building solo, I focus on clarity, speed,
              and maintainability — delivering reliable software that solves
              real problems.
            </motion.p>

            {/* Skill tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Framer Motion",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-mono tracking-wide"
                  style={{
                    backgroundColor: "rgba(229,99,55,0.08)",
                    border: "1px solid rgba(229,99,55,0.2)",
                    color: "var(--accent)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: stats grid ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -6, borderColor: "rgba(229,99,55,0.35)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col justify-between p-6 rounded-2xl"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  minHeight: "140px",
                }}
              >
                <span
                  className="font-[MAINLUX-Bold] text-[40px] lg:text-[48px] leading-none"
                  style={{ color: "var(--accent)" }}
                >
                  {value}
                </span>
                <span
                  className="text-sm font-[Karla] mt-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
