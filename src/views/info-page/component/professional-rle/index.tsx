"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiHeroku,
  SiRender,
} from "react-icons/si";

interface Tool {
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "deployment";
}

const TOOLS: Tool[] = [
  // ── Frontend ──────────────────────────────
  {
    name: "HTML",
    icon: <FaHtml5 color="#E34F26" size={44} />,
    category: "frontend",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt color="#1572B6" size={44} />,
    category: "frontend",
  },
  {
    name: "SCSS",
    icon: <FaSass color="#CC6699" size={44} />,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss color="#06B6D4" size={44} />,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript color="#F7DF1E" size={44} />,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="#3178C6" size={44} />,
    category: "frontend",
  },
  {
    name: "React",
    icon: <FaReact color="#61DAFB" size={44} />,
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color="var(--icon-mono)" size={44} />,
    category: "frontend",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer color="var(--icon-mono)" size={44} />,
    category: "frontend",
  },
  // ── Backend (new) ─────────────────────────
  {
    name: "Node.js",
    icon: <FaNodeJs color="#68A063" size={44} />,
    category: "backend",
  },
  {
    name: "Express",
    icon: <SiExpress color="var(--icon-mono)" size={44} />,
    category: "backend",
  },
  {
    name: "JWT Auth",
    icon: <SiJsonwebtokens color="#e56337" size={44} />,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#47A248" size={44} />,
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql color="#336791" size={44} />,
    category: "backend",
  },
  // ── Deployment ────────────────────────────
  {
    name: "Render",
    icon: <SiRender color="#46E3B7" size={44} />,
    category: "deployment",
  },
  {
    name: "Heroku",
    icon: <SiHeroku color="#430098" size={44} />,
    category: "deployment",
  },
];

type Filter = "all" | "frontend" | "backend" | "deployment";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const ToolsSection = () => {
  const [active, setActive] = React.useState<Filter>("all");

  const filtered =
    active === "all" ? TOOLS : TOOLS.filter((t) => t.category === active);

  const filters: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Deployment", value: "deployment" },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(229,99,55,0.04)" }}
        aria-hidden
      />

      <div className="page_container relative">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="section-label block mb-3">What I Work With</span>
          <h2
            className="text-[36px] md:text-[48px] font-bold text-[color:var(--text-primary)]"
            style={{ fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.02em" }}
          >
            Tools & Skills
          </h2>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-2 mb-12"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {filters.map(({ label, value }) => {
            const isActive = active === value;
            return (
              <button
                key={value}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(value)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 font-karla"
                style={{
                  backgroundColor: isActive
                    ? "var(--accent)"
                    : "var(--bg-subtle)",
                  color: isActive ? "#000" : "var(--text-secondary)",
                  border: isActive
                    ? "1px solid var(--accent)"
                    : "1px solid var(--border-subtle)",
                }}
              >
                {label}
              </button>
            );
          })}

        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          key={active} // re-triggers stagger on filter change
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
        >
          {filtered.map((tool) => (
            <motion.div
              key={tool.name}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "rgba(229,99,55,0.4)",
                backgroundColor: "rgba(229,99,55,0.05)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                minHeight: "160px",
                cursor: "default",
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12">
                {tool.icon}
              </div>

              {/* Name */}
              <p
                className="text-center text-[13px] font-semibold font-syne tracking-wide leading-tight"
                style={{ color: "var(--text-secondary)" }}
              >
                {tool.name}
              </p>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
