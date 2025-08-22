"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
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
    { name: "Contact", link: "/#contact" },
  ];
  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.nav_wrapper}>
        <div className={styles.nav_text}>
          <div className={styles.nav_container}>
            <div className={styles.logo}>
              <Link href="/">
                <h1>Olaoluwa</h1>
              </Link>
            </div>
            {!menuOpen && (
              <button
                className={styles.hamburger}
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <FaBars />
              </button>
            )}
            <div
              className={`${styles.route} ${menuOpen ? styles.menu_open : ""}`}
            >
              {menuOpen && (
                <button
                  className={styles.close}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              )}
              <ul className={styles.nav_links}>
                {navList.map((item) => (
                  <li
                    key={item.name}
                    className={pathname === item.link ? styles.active : ""}
                  >
                    <Link href={item.link} onClick={() => setMenuOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`${styles.menu_backdrop} ${
              menuOpen ? styles.visible : ""
            }`}
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
