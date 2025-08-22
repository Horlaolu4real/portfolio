import Navbar from "@/components/Navbar/navbar";
import type { Metadata } from "next";
import "../styles/globals.scss";
import Footer from "@/components/Footer/footer";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
