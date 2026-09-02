"use client";

import { useCallback, useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "light" | "dark";

/**
 * Light/dark switch.
 *
 * Light is the default on every page load. The inline script in layout.tsx
 * sets the attribute before first paint, so this component only reads what
 * is already on <html> rather than deciding it — that is what keeps the
 * toggle from flashing the wrong palette on load.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const read = () =>
      setTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

    read();
    setMounted(true);

    // The navbar renders this button twice (desktop + mobile). Watching the
    // attribute keeps both in sync, so neither can show the wrong icon.
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    // Only animate colours during the swap itself, so ordinary hovers
    // and scroll effects keep their own timings.
    root.classList.add("theme-anim");
    root.setAttribute("data-theme", next);
    try {
      // Session-scoped on purpose: light is the site default, so a new
      // visit always starts light rather than resuming a past choice.
      sessionStorage.setItem("theme", next);
    } catch {
      // Private browsing — the choice just will not persist.
    }
    setTheme(next);
    window.setTimeout(() => root.classList.remove("theme-anim"), 320);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 ${className}`}
      style={{
        border: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-subtle)",
        color: "var(--text-secondary)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-border)";
        e.currentTarget.style.color = "var(--accent-ink)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-subtle)";
        e.currentTarget.style.color = "var(--text-secondary)";
      }}
    >
      {/* Render neither icon until mounted: the server cannot know the
          visitor's theme, and guessing causes a hydration mismatch. */}
      {mounted &&
        (isDark ? (
          <FiSun size={16} aria-hidden />
        ) : (
          <FiMoon size={16} aria-hidden />
        ))}
    </button>
  );
}
