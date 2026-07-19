import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AmbientLight } from "@/components/AmbientLight";

const siteUrl = "https://thebrewtheory.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Brew Theory: Brewing Experiences. Building Communities.",
    template: "%s | The Brew Theory",
  },
  description:
    "The Brew Theory is a volunteer-led community that partners with cafés across Lucknow to create workshops, game nights, open mics, and networking experiences.",
  keywords: [
    "The Brew Theory",
    "Lucknow events",
    "café events Lucknow",
    "community events Lucknow",
    "open mic Lucknow",
    "networking Lucknow",
  ],
  authors: [{ name: "The Brew Theory" }],
  openGraph: {
    title: "The Brew Theory: Brewing Experiences. Building Communities.",
    description:
      "A volunteer-led community partnering with cafés across Lucknow to create unforgettable events and experiences.",
    url: siteUrl,
    siteName: "The Brew Theory",
    images: [{ url: "/images/logo.png", width: 1024, height: 1024, alt: "The Brew Theory" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "The Brew Theory: Brewing Experiences. Building Communities.",
    description:
      "A volunteer-led community partnering with cafés across Lucknow to create unforgettable events and experiences.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MotionConfig reducedMotion="user">
          <AmbientLight />
          <SmoothScroll />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </MotionConfig>
      </body>
    </html>
  );
}
