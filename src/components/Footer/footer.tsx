import React from "react";
import Image from "next/image";
import logo from "@/components/images/logo-size.webp";

const Footer = () => {
  return (
    <section className="w-full border-t-2 border-[#1e1e1e] px-[2rem] py-[1.25rem] bg-transparent">
      <footer className="w-full max-w-[1440px] flex justify-center items-center gap-8 flex-wrap text-#fff lg:flex-row lg:justify-between sm:flex-col sm:items-center sm:justify-center sm:gap-6">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-[200px] h-auto filter-[drop-shadow(0_2px_4px_rgba(0,0,0,0.3))]"
          />
        </div>
        <ul className="flex list-none flex gap-8 m-0 p-0 flex-wrap lg:gap-[6] lg:flex-row sm:flex-col sm:gap-4">
          <a
            href="mailto:olaoluwayusuf121@gmail.com"
            className="no-underline text-inherit bg-inherit"
          >
            {" "}
            <li className="text-[16px] cursor-pointer font-[Lato] font-light text-[#1e1e1e] hover:text-[#ffd700] transition-colors duration-300 ease-in-out">
              olaoluwayusuf121@gmail.com
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/olaoluwa-yusuf-00387a2bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-inherit bg-inherit"
          >
            <li className="text-[16px] cursor-pointer font-[Lato] font-light text-[#1e1e1e] hover:text-[#ffd700] transition-colors duration-300 ease-in-out">
              Linkedin
            </li>
          </a>
          <a
            href="https://github.com/Horlaolu4real"
            target="_blank"
            className="no-underline text-inherit bg-inherit"
          >
            <li className="text-[16px] cursor-pointer font-[Lato] font-light text-[#1e1e1e] hover:text-[#ffd700] transition-colors duration-300 ease-in-out">
              Github
            </li>
          </a>
          <li>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-[#1e1e1e] text-white font-[Lato] text-[16px] rounded-lg shadow-md hover:bg-[#ffd700] hover:text-black transition duration-300 ease-in-out cursor-pointer"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;
