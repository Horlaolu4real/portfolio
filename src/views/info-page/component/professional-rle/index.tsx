"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs } from "react-icons/si";
import styles from "./styles.module.scss";

const tools = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" size={50} /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={50} /> },
  { name: "SCSS", icon: <FaSass color="#CC6699" size={50} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" size={50} /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={50} /> },
  { name: "React", icon: <FaReact color="#61DAFB" size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" size={50} /> },
];

const ToolsSection = () => {
  return (
    <section className={styles.toolsSection}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.toolsHeader}
      >
        Tools
      </motion.h2>

      {/* Navbar */}
      <nav className={styles.toolsNav}>
        <ul>
          {tools.map((tool, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1, color: "#16796f" }}
              transition={{ type: "spring", stiffness: 200 }}
              className={styles.tool}
            >
              {tool.name}
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Icons Grid */}
      <div className={styles.toolsGrid}>
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15 }}
            className={styles.toolCard}
          >
            {tool.icon}
            <p>{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
