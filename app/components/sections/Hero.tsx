"use client";

import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

const Chakra = dynamic(() => import("./Chakra"), {
  ssr: false,
  loading: () => (
    <div className="hidden lg:flex justify-center items-center mt-10 lg:mt-0">
      <div className="w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full border border-[#D4AF37]/10 animate-pulse bg-[#D4AF37]/[0.03]" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center px-4 sm:px-6 lg:px-16 pt-24 md:pt-28 pb-10 overflow-hidden"
    >
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0B0B1A] pointer-events-none z-10" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-12">
        {/* LEFT CONTENT */}
        <HeroContent />

        {/* RIGHT CHAKRA (DESKTOP ONLY) */}
        <div className="hidden lg:flex justify-center items-center w-full lg:w-[48%]">
          <Chakra />
        </div>
      </div>
    </section>
  );
}
