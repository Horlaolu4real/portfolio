import React from "react";
import computer from "../../../../../public/Hero-portfolio.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[600px] mx-auto overflow-hidden lg:h-[850px] relative">
        <Image src={computer} fill alt="computer" className="object-cover" />
        <div className="absolute inset-0 w-full h-full bg-black/30">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 lg:gap-4">
            <h1 className="font-[Poppins] font-light text-white/70 text-[16px] lg:text-[20px] text-center">
              Frontend Engineer
            </h1>
            <p className="font-[MAINLUX-Bold] font-light text-white/70 text-[clamp(2.4rem,6vw,6rem)]">
              Olaoluwa Yusuf
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
