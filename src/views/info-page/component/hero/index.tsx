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
      className="relative min-h-[auto] md:min-h-screen flex items-center overflow-hidden"
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
              "radial-gradient(circle, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="page_container relative py-20 md:py-40">
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
            className="text-[clamp(3.2rem,8vw,6.5rem)] font-extrabold text-[color:var(--text-primary)] mb-5"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Software
            <br />
            <span style={{ color: "var(--accent)" }}>Developer.</span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-karla), sans-serif",
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
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide text-[color:var(--on-accent)] transition-colors duration-300"
              style={{ backgroundColor: "var(--accent)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--accent-hover)";
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
                border: "1px solid var(--border-strong)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--text-primary)";
                el.style.borderColor = "var(--text-tertiary)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--text-secondary)";
                el.style.borderColor = "var(--border-strong)";
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
                  backgroundColor: "var(--bg-subtle)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-tertiary)",
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
