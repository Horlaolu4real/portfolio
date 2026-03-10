"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * CurvedLine
 * ──────────────────────────────────────────────────────────
 * A full-page SVG bezier curve that runs vertically from top
 * to bottom of the layout, drawing itself as the user scrolls.
 *
 * The path weaves left → right → left giving it the organic
 * "ruling itself" feel seen on Gideon's portfolio.
 */
export default function CurvedLine() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  // Smooth spring so the drawing feels fluid not mechanical
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // pathLength goes 0 → 1 as user scrolls top → bottom
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Subtle opacity fade-in at the very start
  const opacity = useTransform(smoothProgress, [0, 0.02], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient that uses your brand orange → fades out */}
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e56337" stopOpacity="0" />
            <stop offset="20%" stopColor="#e56337" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#f49778" stopOpacity="0.35" />
            <stop offset="80%" stopColor="#e56337" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#e56337" stopOpacity="0" />
          </linearGradient>

          {/* Glow blur filter */}
          <filter id="lineGlow" x="-50%" y="-5%" width="200%" height="110%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/*
          The bezier path:
          Starts top-centre, weaves left then right then left again,
          ending at bottom-centre — same organic flow as Gideon's site.

          M  500   0    → start top-centre
          C  150 200    → pull hard left in upper third
             850 400    → swing hard right at midpoint
             200 600    → pull left again in lower-mid
          S  800 800    → mirror right near bottom
             500 1000   → arrive bottom-centre
        */}
        <motion.path
          d="M 500 0 C 150 200, 850 400, 200 600 S 800 800, 500 1000"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#lineGlow)"
          style={{
            pathLength,
            opacity,
          }}
        />

        {/*
          Second path — offset slightly, lower opacity.
          Creates the layered depth effect.
        */}
        <motion.path
          d="M 500 0 C 150 200, 850 400, 200 600 S 800 800, 500 1000"
          stroke="#e56337"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeOpacity="0.15"
          style={{
            pathLength,
            opacity,
          }}
        />

        {/* Travelling dot — rides the tip of the drawn line */}
        <motion.circle
          r="3"
          fill="#e56337"
          filter="url(#lineGlow)"
          style={{ opacity }}
          // offsetDistance animates along the path
        >
          <animateMotion
            dur="0.01s"
            fill="freeze"
            path="M 500 0 C 150 200, 850 400, 200 600 S 800 800, 500 1000"
            keyPoints="1"
            keyTimes="1"
          />
        </motion.circle>
      </svg>
    </div>
  );
}
