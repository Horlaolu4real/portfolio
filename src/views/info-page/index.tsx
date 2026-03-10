import React from "react";
import Hero from "./component/hero";
import About from "./component/about-us";
import Project from "./component/project";
import ToolsSection from "./component/professional-rle";


const InfoPage = () => {
  return (
    <div className="flex flex-col gap-[2rem] min-h-screen lg:gap-[3rem]">

      <Hero />
      <div className="flex flex-col gap-[2rem] min-h-screen lg:gap-[3rem]">
        <About />
        <Project />
        <ToolsSection />
      </div>
    </div>
  );
};

export default InfoPage;
