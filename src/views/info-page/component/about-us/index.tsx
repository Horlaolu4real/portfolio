// "use client";
// import React from "react";
// import styles from "./styles.module.scss";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section className={styles.wrapper}>
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className={styles.toolsHeader}
//       >
//         About Me
//       </motion.h2>
//       <div className={styles.decription}>
//         <div className={styles.description_display}>
//           <h4 className={styles.description_firm}>
//             I’m a Software Engineer With a Strong Focus on Front-end Development
//             Based in Lagos, Nigeria
//           </h4>
//           <div className={styles.tech_journey}>
//             <p className={styles.journey}>
//               My journey into Frontend devloper began three years ago, driven by
//               a deep interest in turning creative designs into interactive,
//               dynamic web applications. Over time, I’ve expanded my skills to
//               become proficient in both web-design and web-development , giving
//               me the versatility to build end-to-end solutions.
//             </p>
//             <p className={styles.journey}>
//               I’m passionate about using modern technologies to develop fast,
//               responsive, and accessible user interfaces.
//             </p>
//             <p className={styles.journey}>
//               Whether I’m collaborating with a team or building something from
//               the ground up, I take pride in delivering high-quality software
//               that meets users’ needs and exceeds their expectations.
//             </p>
//           </div>
//         </div>
//         <div className={styles.animate_carousel}>
//           <div className={styles.track}>
//             <div className={styles.list_of_experience}>
//               <p className={styles.font}>Rogue devTech</p>
//               <h5 className={styles.role}>Front-end-developer</h5>
//             </div>
//             <div className={styles.list_of_experience}>
//               <p className={styles.font}>Rogue devTech</p>
//               <h5 className={styles.role}>Front-end-developer</h5>
//             </div>
//             <div className={styles.list_of_experience}>
//               <p className={styles.font}>Rogue devTech</p>
//               <h5 className={styles.role}>Front-end-developer</h5>
//             </div>
//             <div className={styles.list_of_experience}>
//               <p className={styles.font}>Rogue devTech</p>
//               <h5 className={styles.role}>Front-end-developer</h5>
//             </div>

//             <div className={styles.list_of_experience}>
//               <p className={styles.font}>Rogue devTech</p>
//               <h5 className={styles.role}>Front-end-developer</h5>
//             </div>

//             <div className={styles.list_of_experience}>
//               <p className={styles.font}>Rogue devTech</p>
//               <h5 className={styles.role}>Front-end-developer</h5>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";
import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-[3.25rem] pt-[16px] px-[20px] pb-[20px]">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative text-[#1e1e1e] text-center font-[MAINLUX-Bold] font-light text-[28px] sm:text-[32px] lg:text-[40px] after:content-[''] after:block after:w-[60px] after:h-[3px] after:mx-auto after:mt-4 after:rounded-[2px] after:bg-gradient-to-r after:from-[#16796f] after:to-[#06b6d4]"
      >
        About Me
      </motion.h2>
      <div className="flex w-full justify-center flex-col gap-[8px] lg:gap-[32px] lg:border-red-500 lg:flex-row">
        <div className="flex flex-col gap-[1.85rem] w-full border-0 lg:w-1/2 lg:border-r-2 lg:border-[#1e1e1e] lg:pt-[0] pr-[1.25rem] pb-[0px] pl-[0px]">
          <h4 className="font-[MAINLUX-Bold] font-light text-[24px] sm:text-[28px] lg:text-[32px]">
            I’m a Software Engineer With a Strong Focus on Front-end Development
            Based in Lagos, Nigeria
          </h4>
          <div className="flex flex-col gap-5">
            <p className="font-[MAINLUX-Bold] font-light text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#1e1e1e] pt-[10px]">
              My journey into Frontend devloper began three years ago, driven by
              a deep interest in turning creative designs into interactive,
              dynamic web applications. Over time, I’ve expanded my skills to
              become proficient in both web-design and web-development, giving
              me the versatility to build end-to-end solutions.
            </p>
            <p className="font-[MAINLUX-Bold] font-light text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#1e1e1e] pt-[10px]">
              I’m passionate about using modern technologies to develop fast,
              responsive, and accessible user interfaces.
            </p>
            <p className="font-[MAINLUX-Bold] font-light text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#1e1e1e] pt-[10px]">
              Whether I’m collaborating with a team or building something from
              the ground up, I take pride in delivering high-quality software
              that meets users’ needs and exceeds their expectations.
            </p>
          </div>
        </div>

        <div className="w-full static overflow-hidden whitespace-nowrap lg:w-1/2 lg:relative">
          <div className={styles.track}>
            {[...Array(12)].fill(0).map((_, idx) => (
              <div key={idx} className="flex flex-col gap-[8px] mr-[1.25rem]">
                <p className="font-[MAINLUX-Bold] font-light text-[28px] sm:text-[36px] lg:text-[46px] text-[#1e1e1e]">
                  Rogue devTech
                </p>
                <h5 className="font-[MAINLUX-Bold] font-light text-[16px] sm:text-[18px] lg:text-[20px] text-[#1e1e1e]">
                  Front-end-developer
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
