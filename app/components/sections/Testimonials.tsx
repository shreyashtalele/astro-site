"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sakshi",
    role: "Mumbai",
    text: "Incredibly accurate birth chart reading. The predictions aligned perfectly with events in my life. I felt truly understood for the first time.",
    rating: 5,
  },
  {
    name: "Piyush",
    role: "Nashik",
    text: "I was skeptical at first, but the kundli reading was so accurate it left me speechless. Life-changing perspective. Thank you.",
    rating: 5,
  },
  {
    name: "Vaishnavi",
    role: "Nagpur",
    text: "The marriage compatibility reading gave us deep clarity before our wedding. We are so grateful for the honest and detailed guidance.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Aishwarya",
    role: "Mumbai",
    text: "Career guidance was spot on. Helped me make a major decision with confidence. The planetary analysis was remarkably precise.",
    rating: 5,
  },
  {
    name: "Dipanshu",
    role: "Kolkata",
    text: "Very accurate predictions and helpful guidance. The Vastu consultation transformed the energy in my home. Highly recommended.",
    rating: 5,
  },
  {
    name: "Priya",
    role: "Pune",
    text: "The gemstone recommendation made a noticeable difference in just weeks. I feel more centered and focused in everything I do.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Gaurav",
    role: "Pune",
    text: "Muhurta timing for my business launch was perfect. Everything fell into place beautifully. Will definitely consult again.",
    rating: 5,
  },
  {
    name: "Vividha",
    role: "Delhi",
    text: "Numerology reading was deeply insightful. My life path number explained so much about my personality and struggles.",
    rating: 5,
  },
  {
    name: "Nandini",
    role: "Bangalore",
    text: "The palmistry session was unlike anything I expected — detailed, personal, and genuinely thought-provoking. Truly a gifted reader.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Avrali",
    role: "Indore",
    text: "The face reading session felt incredibly accurate. It revealed personality traits about me that even close friends notice. Very insightful experience.",
    rating: 5,
  },
  {
    name: "Padma",
    role: "Hyderabad",
    text: "The astrology consultation was very detailed and practical. It helped me understand my current phase of life and gave clarity about next steps.",
    rating: 5,
  },
  {
    name: "Ananya",
    role: "Varanasi",
    text: "I didn’t expect palmistry to be this precise. The reader explained everything so calmly and it actually matched my life situations closely.",
    rating: 5,
  },
];

const VISIBLE = 3;
const TOTAL = testimonials.length;
const MAX_INDEX = TOTAL - VISIBLE;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const isPaused = useRef(false);

  // ✅ UPDATED: move 3 cards at a time
  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + VISIBLE > MAX_INDEX ? 0 : prev + VISIBLE));
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) =>
      prev - VISIBLE < 0 ? MAX_INDEX : prev - VISIBLE
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) next();
    }, 3500);
    return () => clearInterval(timer);
  }, [next]);

  const visible = testimonials.slice(index, index + VISIBLE);

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
      scale: 0.96,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
      scale: 0.96,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="relative pt-12 pb-12 px-6 lg:px-16 overflow-hidden"
      onMouseEnter={() => {
        isPaused.current = true;
      }}
      onMouseLeave={() => {
        isPaused.current = false;
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
              <span className="text-lg tracking-[0.18em] uppercase text-[#D4AF37]/60 font-medium">
                Client Stories
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* ❌ REMOVED: 01 / 10 counter */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#F2D6A0]/60 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#F2D6A0]/60 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid md:grid-cols-3 gap-6"
            >
              {visible.map((item, i) => (
                <motion.div
                  key={`${item.name}-${index}-${i}`}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative group"
                >
                  {item.highlight && (
                    <motion.div
                      className="absolute -inset-2 rounded-xl bg-[#D4AF37]/[0.08] blur-2xl"
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{
                        duration: 3,
                        repeat: 3,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  <div
                    className={`relative rounded-xl p-5 h-full border backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 ${
                      item.highlight
                        ? "border-[#D4AF37]/25 bg-[#D4AF37]/[0.04]"
                        : "border-white/10 bg-white/[0.03] group-hover:border-[#D4AF37]/25"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-xl opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.1),transparent_60%)]" />

                    <div className="relative mb-3">
                      <Quote size={16} className="text-[#D4AF37]/40" fill="currentColor" />
                    </div>

                    <p className="relative text-sm leading-relaxed text-[#F2D6A0]/75 mb-5">
                      {item.text}
                    </p>

                    <div className="relative flex gap-0.5 mb-4">
                      {Array.from({ length: item.rating }).map((_, si) => (
                        <Star
                          key={si}
                          size={11}
                          className="text-[#D4AF37]"
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <div className="relative flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B76E79] flex items-center justify-center text-xs text-black font-semibold shrink-0">
                        {item.name[0]}
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium mb-1">
                          {item.name}
                        </h4>
                        <span className="text-xs text-[#F2D6A0]/50">
                          {item.role}
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}