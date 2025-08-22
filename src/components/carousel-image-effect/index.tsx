import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "@/components/images/name-size.webp";

const CarouselLogo = () => {
  const logos = [...Array(10)].map((_, i) => (
    <Image key={i} src={logo} alt="Olaoluwa Logo" className={styles.logo}  />
  ));
  return (
    <section className={styles.wrapper}>
      <div className={styles.carousel}>
        <div className={styles.track}>
          {logos}
          {logos}
        </div>
      </div>
    </section>
  );
};

export default CarouselLogo;
