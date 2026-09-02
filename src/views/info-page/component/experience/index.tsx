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

interface Bullet {
  /** Client name, when the bullet describes a specific project. */
  name?: string;
  text: string;
}

interface Role {
  title: string;
  company: string;
  period: string;
  context: string;
  bullets: Bullet[];
}

const ROLES: Role[] = [
  {
    title: "Full-Stack Developer",
    company: "TBII",
    period: "May 2026 — Present",
    context: "Canadian e-commerce platform",
    bullets: [
      {
        text: "Built and maintain a full-stack e-commerce platform using Express and Nunjucks, deployed on DigitalOcean.",
      },
      {
        text: "Integrated a supplier API to pull and advertise products, enabling automated product listing and sale on the platform.",
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Rogue Dev Tech",
    period: "Dec 2023 — Aug 2025",
    context: "Agency delivering web projects for external client companies",
    bullets: [
      {
        name: "Bricklage",
        text: "Real estate e-commerce platform; built real-time features for property buyers, sellers, and agents.",
      },
      {
        name: "Azu Travels",
        text: "Flight booking platform handling real-time flight requests, integrated with a backend API for end-to-end booking functionality.",
      },
      {
        name: "TANS",
        text: "Led design-to-code implementation from Figma specifications, maintaining design fidelity throughout.",
      },
      {
        name: "Clubarant",
        text: "Implemented pixel-perfect UI from design specs and integrated backend APIs into the web architecture.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Ambient glow — mirrors the About section, flipped to the left. */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none"
        style={{ backgroundColor: "rgba(229,99,55,0.05)" }}
        aria-hidden
      />

      <div className="page_container relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label block mb-3">Where I&apos;ve Worked</span>
          <h2
            className="text-[36px] md:text-[48px] font-bold text-[color:var(--text-primary)]"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Experience
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-5"
        >
          {ROLES.map((role) => (
            <motion.article
              key={role.company}
              variants={fadeUp}
              className="rounded-2xl p-6 md:p-9 transition-colors duration-300"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {/* Header: role + company on the left, dates on the right. */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3
                    className="text-[20px] md:text-[26px] font-bold leading-tight text-[color:var(--text-primary)]"
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {role.title}
                    <span style={{ color: "var(--text-tertiary)" }}> · </span>
                    <span style={{ color: "var(--accent-ink)" }}>
                      {role.company}
                    </span>
                  </h3>
                  <p
                    className="mt-1.5 text-[14px] md:text-[15px] font-karla"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {role.context}
                  </p>
                </div>

                <span
                  className="shrink-0 self-start rounded-full px-3.5 py-1.5 text-[11px] md:text-[12px] font-karla font-semibold tracking-[0.08em] uppercase whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--bg-subtle)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {role.period}
                </span>
              </div>

              <ul className="mt-6 flex flex-col gap-3.5">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet.name ?? bullet.text}
                    className="relative pl-5 text-[15px] md:text-[16px] leading-[1.7] font-karla"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="absolute left-0 top-[0.65em] h-[6px] w-[6px] rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                      aria-hidden
                    />
                    {bullet.name && (
                      <span
                        className="font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {bullet.name} —{" "}
                      </span>
                    )}
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
