"use client";

import dynamic from "next/dynamic";

const StarField = dynamic(() => import("@/app/components/sections/StarField"), {
  ssr: false,
});

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base */}
      <div className="absolute inset-0 bg-[#0B0B1A]" />

      {/* Smooth galaxy gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1A] via-[#140a28] to-[#0B0B1A]" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-90">
        <StarField />
      </div>

      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_70%)]" />
    </div>
  );
}
