"use client";
import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className={styles.wrapper}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.toolsHeader}
      >
        About Me
      </motion.h2>
      <div className={styles.decription}>
        <div className={styles.description_display}>
          <h4 className={styles.description_firm}>
            I’m a Software Engineer With a Strong Focus on Front-end Development
            Based in Lagos, Nigeria
          </h4>
          <div className={styles.tech_journey}>
            <p className={styles.journey}>
              My journey into Frontend devloper began three years ago, driven by
              a deep interest in turning creative designs into interactive,
              dynamic web applications. Over time, I’ve expanded my skills to
              become proficient in both web-design and web-development , giving
              me the versatility to build end-to-end solutions.
            </p>
            <p className={styles.journey}>
              I’m passionate about using modern technologies to develop fast,
              responsive, and accessible user interfaces.
            </p>
            <p className={styles.journey}>
              Whether I’m collaborating with a team or building something from
              the ground up, I take pride in delivering high-quality software
              that meets users’ needs and exceeds their expectations.
            </p>
          </div>
        </div>
        <div className={styles.animate_carousel}>
          <div className={styles.track}>
            <div className={styles.list_of_experience}>
              <p className={styles.font}>Rogue devTech</p>
              <h5 className={styles.role}>Front-end-developer</h5>
            </div>
            <div className={styles.list_of_experience}>
              <p className={styles.font}>Rogue devTech</p>
              <h5 className={styles.role}>Front-end-developer</h5>
            </div>
            <div className={styles.list_of_experience}>
              <p className={styles.font}>Rogue devTech</p>
              <h5 className={styles.role}>Front-end-developer</h5>
            </div>
            <div className={styles.list_of_experience}>
              <p className={styles.font}>Rogue devTech</p>
              <h5 className={styles.role}>Front-end-developer</h5>
            </div>

            <div className={styles.list_of_experience}>
              <p className={styles.font}>Rogue devTech</p>
              <h5 className={styles.role}>Front-end-developer</h5>
            </div>

            <div className={styles.list_of_experience}>
              <p className={styles.font}>Rogue devTech</p>
              <h5 className={styles.role}>Front-end-developer</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
