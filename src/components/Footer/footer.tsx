import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "@/components/images/logo-size.webp";

const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <ul className={styles.footer_links}>
          <a href="mailto:olaoluwayusuf121@gmail.com">
            {" "}
            <li>olaoluwayusuf121@gmail.com</li>
          </a>
          <a
            href="https://www.linkedin.com/in/olaoluwa-yusuf-00387a2bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Linkedin</li>
          </a>
          <a href="https://github.com/Horlaolu4real" target="_blank">
            <li>Github</li>
          </a>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;
