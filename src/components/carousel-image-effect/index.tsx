import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "@/components/images/name.png";

const CarouselLogo = () => {
  const logos = [...Array(10)].map((_, i) => (
    <Image key={i} src={logo} alt="Olaoluwa Logo" className={styles.logo} />
  ));
  return (
    <section className=" flex justify-center align-center overflow-hidden max-w-[1400px] h-full w-full py-[3rem] px-[0rem] mx-auto">
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
