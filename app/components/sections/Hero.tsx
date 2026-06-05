"use client";

import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

const HeroVisual = dynamic(() => import("./HeroVisual"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center px-4 sm:px-6 lg:px-16 pt-16 md:pt-20 pb-0 overflow-hidden"
    >
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#0B0B1A] pointer-events-none z-10" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-10">
        <HeroContent />

        <div className="hidden lg:flex justify-center items-center w-full lg:w-[48%]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
