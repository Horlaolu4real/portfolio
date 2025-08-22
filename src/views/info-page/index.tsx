import React from "react";
import styles from "./styles.module.scss";
import Hero from "./component/hero";
import About from "./component/about-us";
import Project from "./component/project";
import CarouselLogo from "@/components/carousel-image-effect";
import ToolsSection from "./component/professional-rle";

const InfoPage = () => {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <About />
      <Project />
      <CarouselLogo />
      <ToolsSection />
    </div>
  );
};

export default InfoPage;
