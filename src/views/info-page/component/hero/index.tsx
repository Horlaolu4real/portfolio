import React from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapped}>
        <div className={styles.overlay}>
          <div className={styles.txt}>
            <h1>Frontend Engineer</h1>
            <p>Olaoluwa Yusuf</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
