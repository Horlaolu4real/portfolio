import Navbar from "@/components/Nav/Navbar";
import type { Metadata } from "next";
import { Syne, Karla } from "next/font/google";
import "../styles/globals.scss";
import Footer from "@/components/foot/Footer";

// Self-hosted at build time — no request to Google at runtime, and no
// render-blocking @import in the stylesheet.
const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olaoluwa Yusuf Portfolio",
  description: "Frontend Developer Portfolio",
};

// Light is the site's default and every page load starts there, so the
// first thing anyone sees is always the light palette. A visitor's switch
// to dark lasts for their browsing session only (sessionStorage), which is
// why this never persists across a fresh visit. The stale localStorage key
// from the earlier persist-forever behaviour is cleared on sight.
const NO_FLASH = `(function(){try{localStorage.removeItem("theme");var s=sessionStorage.getItem("theme");document.documentElement.setAttribute("data-theme",s==="dark"?"dark":"light");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${syne.variable} ${karla.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH }} />
      </head>
      <body>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
