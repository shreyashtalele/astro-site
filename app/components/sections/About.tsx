"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Clock } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Clock, value: "9+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Clients Guided" },
  { icon: Sparkles, value: "20+", label: "Years Legacy" },
];

export default function About() {
  return (
    <section className="relative pt-10 pb-12 px-6 lg:px-16 scroll-mt-20 overflow-hidden">
      {/* Top blend from hero */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0B0B1A] to-transparent pointer-events-none z-10" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/[0.025] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* ── IMAGE ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative shrink-0 w-[260px] lg:w-[280px]"
          >
            {/* Outer glow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#D4AF37]/15 to-[#B76E79]/[0.08] blur-xl opacity-60" />

            {/* Gold border frame */}
            <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[#D4AF37]/40 via-[#D4AF37]/10 to-[#B76E79]/25">
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0b1a]">
                <div className="w-[280px] h-[373px] relative">
                  <Image
                    src="/images/Image.png"
                    alt="Vedic astrologer"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Kill white bg bleed */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b1a]/70 via-transparent to-[#0d0b1a]/20" />
              </div>
            </div>

            {/* Credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute -bottom-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-[#D4AF37]/20 bg-[#0d0b1a]/90 backdrop-blur-md z-20"
            >
              <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-[10px]">
                ✦
              </div>
              <div>
                <p className="text-white text-[11px] font-medium leading-none mb-0.5">
                  Vedic Certified
                </p>
                <p className="text-[#F2D6A0]/40 text-[10px] leading-none">
                  Since 2009
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── TEXT ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col justify-center flex-1"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
              <span className="text-[16px] tracking-[0.22em] uppercase text-[#D4AF37]/60 font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
              Rooted in tradition,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D6A0]">
                guided by stars
              </span>
            </h2>

            <p className="text-[#F2D6A0]/55 mb-4 leading-relaxed text-sm">
              I am a Software Engineer and a dedicated Astrologer with 9 years
              of professional experience, proudly carrying forward a sacred 20+
              year family legacy in Vedic Astrology, Palmistry, Vastu Shastra,
              Numerology, Face Reading, and Lal Kitab ✨.
            </p>

            <p className="text-[#F2D6A0]/55 mb-4 leading-relaxed text-sm">
              By blending the analytical precision of a tech professional with
              deep ancestral wisdom, I provide highly accurate chart readings
              and palm analysis. My approach focuses on identifying the root
              causes of life’s challenges and offering effective, time-tested
              remedies.
            </p>

            <p className="text-[#F2D6A0]/55 mb-8 leading-relaxed text-sm">
              Integrating these ancient sciences with Yoga 🧘, I offer a
              holistic path to help you navigate career, relationships, health,
              and life decisions with clarity, confidence, and peace of mind.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                    className="flex flex-col items-start gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 hover:border-[#D4AF37]/20 transition-colors duration-300"
                  >
                    <Icon size={14} className="text-[#D4AF37]/60" />
                    <p className="text-white font-semibold text-xl leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[#F2D6A0]/40 text-[11px] leading-tight">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
