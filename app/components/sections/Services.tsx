"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, CheckCircle, Lock } from "lucide-react";

import careerImg from "../../assets/image/career.png";
import faceImg from "../../assets/image/facereading.png";
import financeImg from "../../assets/image/finance.png";
import kundliImg from "../../assets/image/kundalireading.png";
import marriageImg from "../../assets/image/marraige.png";
import moneyImg from "../../assets/image/money.png";
import muhurtaImg from "../../assets/image/muhurta.png";
import numerologyImg from "../../assets/image/numerology.png";
import palmistryImg from "../../assets/image/palmistry.png";
import vastuImg from "../../assets/image/vastu.png";

type Service = {
  title: string;
  desc: string;
  image: StaticImageData;
};

const services: Service[] = [
  {
    title: "Kundli Reading",
    desc: "In-depth birth chart analysis to uncover life patterns, strengths, and future possibilities with precise astrological insights.",
    image: kundliImg,
  },
  {
    title: "Palmistry",
    desc: "Hand analysis to reveal personality traits, life direction, health indicators, and hidden potential.",
    image: palmistryImg,
  },
  {
    title: "Face Reading",
    desc: "Understand personality traits, emotions, behavior patterns, and life tendencies through facial analysis.",
    image: faceImg,
  },
  {
    title: "Vastu Consultation",
    desc: "Align your home or workspace with Vastu principles to attract positivity, growth, and balance.",
    image: vastuImg,
  },
  {
    title: "Marriage Compatibility",
    desc: "Detailed kundli matching to evaluate emotional, mental, and spiritual compatibility for long-term harmony.",
    image: marriageImg,
  },
  {
    title: "Career & Education Guidance",
    desc: "Clarity on job opportunities, promotions, government roles, and academic direction based on planetary alignment.",
    image: careerImg,
  },
  {
    title: "Numerology",
    desc: "Discover your life path, destiny numbers, and how they influence decisions, relationships, and success.",
    image: numerologyImg,
  },
  {
    title: "Muhurta",
    desc: "Find the perfect time for weddings, business launches, travel, and major life events.",
    image: muhurtaImg,
  },
  {
    title: "Money & Growth",
    desc: "Understand financial blocks, money flow, and growth opportunities to build better stability and prosperity.",
    image: moneyImg,
  },
  {
    title: "Finance Guidance",
    desc: "Astrological guidance for income, savings, investments, and financial decision-making.",
    image: financeImg,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 px-6 py-16 lg:px-16 overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#D4AF37]/[0.04] blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl text-[#F2D6A0]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/70 to-transparent" />
            <span className="text-lg tracking-[0.18em] uppercase text-[#D4AF37]/70 font-medium">
              What I Offer
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#171124]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:shadow-[0_24px_70px_rgba(212,175,55,0.10)]"
            >
              <div className="relative h-[210px] w-full overflow-hidden bg-[#0B0B1A]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority={i < 3}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#171124]" />
                <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#171124] to-transparent" />
              </div>

              <div className="relative px-6 pb-6 pt-2">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 text-[#F2D6A0]/68">
                  {service.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-md px-5 py-5 sm:px-8"
        >
          <div className="grid grid-cols-1 gap-5 text-xs text-[#F2D6A0]/65 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span>9+ Years Experience</span>
            </div>

            <div className="flex items-center gap-3">
              <Users size={14} className="text-[#D4AF37]" />
              <span>5000+ Clients Guided</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle size={14} className="text-[#D4AF37]" />
              <span>Root Cause Analysis</span>
            </div>

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
