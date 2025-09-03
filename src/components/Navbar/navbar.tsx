// "use client";
// import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import styles from "./styles.module.scss";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Link from "next/link";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 250);
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const navList = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/#about" },
//     { name: "Projects", link: "/#projects" },
//     { name: "Details", link: "/#details" },
//   ];
//   return (
//     <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
//       <div className={styles.nav_wrapper}>
//         <div className={styles.nav_text}>
//           <div className={styles.nav_container}>
//             <div className={styles.logo}>
//               <Link href="/">
//                 <h1>Olaoluwa</h1>
//               </Link>
//             </div>
//             {!menuOpen && (
//               <button
//                 className={styles.hamburger}
//                 onClick={() => setMenuOpen(true)}
//                 aria-label="Open menu"
//               >
//                 <FaBars />
//               </button>
//             )}
//             <div
//               className={`${styles.route} ${menuOpen ? styles.menu_open : ""}`}
//             >
//               {menuOpen && (
//                 <button
//                   className={styles.close}
//                   onClick={() => setMenuOpen(false)}
//                   aria-label="Close menu"
//                 >
//                   <FaTimes />
//                 </button>
//               )}
//               <ul className={styles.nav_links}>
//                 {navList.map((item) => (
//                   <li
//                     key={item.name}
//                     className={pathname === item.link ? styles.active : ""}
//                   >
//                     <Link href={item.link} onClick={() => setMenuOpen(false)}>
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div
//             className={`${styles.menu_backdrop} ${
//               menuOpen ? styles.visible : ""
//             }`}
//             onClick={() => setMenuOpen(false)}
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Details", link: "/#details" },
  ];

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-300 
      ${
        isScrolled
          ? "bg-[#111]/90 backdrop-blur-md rounded-full w-[90%] py-6 px-6 shadow-md"
          : "bg-gradient-to-r from-[#1a1a1a]/70 via-[#2c2c2c]/70 to-[#1a1a1a]/70 w-[90%] py-6 px-6 rounded-2xl shadow-lg"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="hover:no-underline font-[MAINLUX-Bold] text-2xl text-[#ffd700]"
        >
          Olaoluwa
        </Link>

        {/* Hamburger (Mobile only) */}
        {!menuOpen && (
          <button
            className="lg:hidden text-[#ffd700] text-2xl z-[1002]"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        )}
        <div
          className={`lg:flex lg:items-center lg:gap-8 transition-transform duration-300 
          ${
            menuOpen
              ? "fixed top-0 right-0 w-[80%] sm:w-[100%] h-screen bg-gradient-to-b from-[#1a1a1a] via-[#222] to-[#111] flex flex-col items-start px-8 py-16 gap-6 shadow-lg z-[1001] translate-x-0"
              : "hidden lg:flex"
          }`}
        >
          {menuOpen && (
            <button
              className="absolute top-6 right-6 text-[#ffd700] text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
          )}

          <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10 list-none">
            {navList.map((item) => (
              <li
                key={item.name}
                className={`relative font-[Inter] text-[16px] transition-colors duration-300 
                ${
                  pathname === item.link
                    ? "text-[#ffd700] font-semibold"
                    : "text-gray-300 hover:text-[#ffd700]"
                }`}
              >
                <Link
                  href={item.link}
                  className="hover:no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[1000]"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
