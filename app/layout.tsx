import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jude Victor | Embedded Systems & Robotics Developer",
  description:
    "Portfolio of Jude Victor — Electronics, Robotics, and Embedded Systems Developer. Building prototypes from prosthetic hands to autonomous robots.",
  keywords: [
    "embedded systems", "robotics", "electronics", "PCB design",
    "ROS", "motor control", "prototyping", "Jude Victor",
  ],
  authors: [{ name: "Jude Victor" }],
  openGraph: {
    title: "Jude Victor | Embedded Systems & Robotics Developer",
    description: "Electronics & Robotics Developer — Prototyping Until Shutdown",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
