import Navbar from "@/components/Nav/Navbar";
import type { Metadata } from "next";
import "../styles/globals.scss";
import Footer from "@/components/foot/Footer";

export const metadata: Metadata = {
  title: "Olaoluwa Yusuf Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/*
          Syne — display font for h1/h2 headings across the portfolio.
          Loaded here once so every component can use font-family: Syne.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/*
          CurvedLine sits as a fixed full-screen layer at z-0.
          Everything else stacks above it at z-10+.
          It is "use client" so it runs only in the browser —
          the layout itself stays a Server Component.
        */}

        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
