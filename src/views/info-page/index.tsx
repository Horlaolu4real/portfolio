import React from "react";
import Hero from "./component/hero";
import About from "./component/about-us";
import Project from "./component/project";
import CarouselLogo from "@/components/carousel-image-effect";
import ToolsSection from "./component/professional-rle";

const InfoPage = () => {
  return (
    <div className="flex flex-col gap-[2rem] w-full h-full lg:gap-[3rem]">
      <Hero />
      <About />
      <Project />
      <CarouselLogo />
      <ToolsSection />
    </div>
  );
};

export default InfoPage;
