import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalBackground from "@/app/components/GlobalBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astro Patil | Vedic Astrology Consultation in Pune",
  description:
    "Get personalized Vedic astrology guidance for kundli reading, marriage compatibility, career, palmistry, numerology, face reading and vastu consultation.",
  keywords: [
    "Astro Patil",
    "Astrologer in Pune",
    "Vedic Astrology",
    "Kundli Reading",
    "Marriage Compatibility",
    "Career Astrology",
    "Palmistry",
    "Numerology",
    "Face Reading",
    "Vastu Consultation",
  ],
  openGraph: {
    title: "Astro Patil | Vedic Astrology Consultation",
    description:
      "Personalized astrology guidance for career, marriage, kundli, palmistry, numerology and vastu consultation.",
    type: "website",
    locale: "en_IN",
    siteName: "Astro Patil",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0B0B1A] text-[#F2D6A0] overflow-x-hidden">
        <GlobalBackground />

        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
