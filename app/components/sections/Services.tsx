"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Briefcase,
  Home,
  Users,
  CheckCircle,
  Lock,
  Hash,
  Gem,
  Clock,
  Hand,
  Eye,
} from "lucide-react";

const services = [
  {
    title: "Kundli Reading",
    desc: "In-depth birth chart analysis to uncover life patterns, strengths, and future possibilities with precise astrological insights.",
    icon: Sparkles,
  },
  {
    title: "Palmistry",
    desc: "Hand analysis to reveal personality traits, life direction, health indicators, and hidden potential.",
    icon: Hand,
  },
  {
    title: "Face Reading ",
    desc: "In-depth facial feature analysis to understand personality traits, emotions, behavior patterns, and life tendencies for better self-awareness.",
    icon: Eye,
  },
  {
    title: "Vastu Consultation",
    desc: "Align your home or workspace with Vastu principles to attract positivity, growth, and balance.",
    icon: Home,
  },
  {
    title: "Marriage Compatibility",
    desc: "Detailed kundli matching to evaluate emotional, mental, and spiritual compatibility for long-term harmony.",
    icon: Heart,
  },
  {
    title: "Career & Education Guidance",
    desc: "Clarity on job opportunities, promotions, government roles, and academic direction based on planetary alignment.",
    icon: Briefcase,
  },
  {
    title: "Numerology",
    desc: "Discover your life path, destiny numbers, and how they influence decisions, relationships, and success.",
    icon: Hash,
  },
  // {
  //   title: "Gemstone Recommendation",
  //   desc: "Personalized gemstone suggestions to strengthen beneficial planetary energies and reduce obstacles.",
  //   icon: Gem,
  // },
  {
    title: "Muhurta (Auspicious Timing)",
    desc: "Find the perfect time for weddings, business launches, travel, and major life events.",
    icon: Clock,
  },
];

export default function Services() {
  return (
    <section className="relative pt-12 pb-12 px-6 lg:px-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#D4AF37]/[0.03] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-[#F2D6A0]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
            <span className="text-lg tracking-[0.18em] uppercase text-[#D4AF37]/60 font-medium">
              What I Offer
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative group"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-[#D4AF37]/[0.05] blur-lg transition duration-500" />

                <div className="relative h-full rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 transition-all duration-300 group-hover:border-[#D4AF37]/30 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] mb-4 group-hover:border-[#D4AF37]/40 transition-colors duration-300">
                    <Icon size={18} className="text-[#D4AF37]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-sm font-medium mb-2">
                    {service.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-xs text-[#F2D6A0]/55 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md px-8 py-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-[#F2D6A0]/60">
            <div className="flex items-center gap-3">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span>9+ Years Experience</span>
            </div>

            <div className="hidden md:block h-5 w-px bg-white/10" />

            <div className="flex items-center gap-3">
              <Users size={14} className="text-[#D4AF37]" />
              <span>5000+ Clients Guided</span>
            </div>

            <div className="hidden md:block h-5 w-px bg-white/10" />

            <div className="flex items-center gap-3">
              <CheckCircle size={14} className="text-[#D4AF37]" />
              <span>Root Cause Analysis</span>
            </div>

            <div className="hidden md:block h-5 w-px bg-white/10" />

            <div className="flex items-center gap-3">
              <Lock size={14} className="text-[#D4AF37]" />
              <span>100% Confidential</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
