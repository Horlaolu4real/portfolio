"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = NAV_LINKS.map((item) => document.querySelector(item.href)).filter(
      Boolean
    ) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveLink(`#${visible.target.id}`);
        }
      },
      { threshold: [0.25, 0.5, 0.7], rootMargin: "-30% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={scrolled ? { y: 0, opacity: 1 } : { y: -8, opacity: 0.92 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="page_container flex items-center justify-between py-4">
        <Link
          href="#home"
          onClick={() => setActiveLink("#home")}
          className="group inline-flex items-center gap-2 px-1 py-2 text-sm text-white/90 transition-all duration-300"
        >
          <span className="h-2 w-2 rounded-full bg-[--accent] transition-transform duration-300 group-hover:scale-125" />
          <span className="font-syne text-base tracking-wide">Olaoluwa</span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Desktop nav"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeLink === href;
            return (
              <a
                key={label}
                href={href}
                onClick={() => setActiveLink(href)}
                className={[
                  "relative px-1 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white",
                ].join(" ")}
              >
                {label}
                <span
                  className={[
                    "absolute -bottom-0.5 left-0 h-px bg-[--accent] transition-all duration-300",
                    isActive ? "w-full opacity-100" : "w-0 opacity-0",
                  ].join(" ")}
                />
              </a>
            );
          })}
        </nav>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/40 px-5 py-2.5 text-sm font-semibold text-[color:var(--accent)] transition-all duration-300 hover:border-[color:var(--accent)] hover:text-white"
        >
          Resume ↗
        </motion.a>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex h-10 w-10 flex-col justify-center gap-[5px] p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-[2px] w-full rounded-full bg-white origin-center"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[2px] w-full rounded-full bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-[2px] w-full rounded-full bg-white origin-center"
          />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t"
            style={{
              backgroundColor: "rgba(13,13,13,0.96)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <ul className="page_container flex flex-col gap-4 py-6">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                >
                  <a
                    href={href}
                    onClick={() => {
                      setActiveLink(href);
                      setMenuOpen(false);
                    }}
                    className={[
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      activeLink === href
                        ? "bg-white/[0.08] text-white"
                        : "text-white/70 hover:bg-white/[0.04] hover:text-white",
                    ].join(" ")}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.07 }}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{
                    border: "1px solid rgba(229, 99, 55, 0.4)",
                    color: "var(--accent)",
                  }}
                >
                  Resume ↗
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
