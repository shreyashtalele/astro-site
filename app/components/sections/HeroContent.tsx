"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      className="w-full lg:w-[52%]"
      initial={{ opacity: 0, x: -36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/70 to-transparent" />
        <span className="text-[10px] tracking-[0.22em] uppercase text-[#D4AF37]/60 font-medium">
          Tech Meets Vedic Astrology
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] mb-5 text-white tracking-tight"
      >
        Decode your destiny
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] via-[#F2D6A0] to-[#c9a84c]">
          with precision
        </span>
        <br />& ancient wisdom
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="text-[#F2D6A0]/45 text-sm mb-10 leading-relaxed max-w-sm"
      >
        Software Engineer + Astrologer with 9+ years experience · Backed by 20+
        years family legacy · Root-cause analysis with accurate, practical
        remedies.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.36 }}
        className="flex flex-wrap gap-3"
      >
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/11233556780"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="relative group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#c9a037] via-[#f0d060] to-[#c9a037] text-black shadow-[0_0_24px_rgba(212,175,55,0.28)] hover:shadow-[0_0_40px_rgba(212,175,55,0.45)] transition-shadow duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="relative z-10">Get Personal Guidance</span>
        </motion.a>

        {/* Explore */}
        <motion.a
          href="#services"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-medium border border-white/10 text-[#F2D6A0]/70 bg-white/[0.03] backdrop-blur-sm hover:border-[#D4AF37]/30 hover:text-[#F2D6A0] transition-all duration-300"
        >
          Explore Services
        </motion.a>
      </motion.div>

      {/* Trust line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex items-center gap-4 mt-10"
      >
        <div className="flex items-center gap-3">
          {/* Left icon badge */}
          <div className="w-8 h-8 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-xs">
            ✦
          </div>

          {/* Right text */}
          <p className="text-[11px] text-[#F2D6A0]/35 leading-tight">
            Trusted by <span className="text-[#F2D6A0]/60">5000+ clients</span>{" "}
            · Accurate & confidential consultations
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
