"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import imgOne from "../.././../../../public/new-cover.jpg";
import imgTwo from "../.././../../../public/second-new-cover.jpg";
import imgThree from "../.././../../../public/third-cover.jpg";
import Image from "next/image";

const Project = () => {
  return (
    <section className={styles.wrapper}>
      {/* <h4 className={styles.txt}>Projects</h4> */}

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.toolsHeader}
      >
        Projects
      </motion.h2>
      <div className={styles.img_racket_firm}>
        <div className={styles.img_container}>
          <div className={styles.img_link}>
            <a href="">
              {" "}
              <Image
                src={imgOne}
                alt="images"
                className={styles.img_link}
              />{" "}
            </a>
          </div>

          <p className={styles.firm}>Clubarant</p>
        </div>
        <div className={styles.img_container}>
          <div className={styles.img_link}>
            <a href="">
              {" "}
              <Image src={imgTwo} alt="images" className={styles.img_link} />
            </a>
          </div>

          <p className={styles.firm}>Rogue dev</p>
        </div>
        <div className={styles.img_container}>
          <div className={styles.img_link}>
            <a href="">
              {" "}
              <Image src={imgThree} alt="images" className={styles.img_link} />
            </a>
          </div>

          <p className={styles.firm}>Clubarant</p>
        </div>
      </div>
    </section>
  );
};

export default Project;
