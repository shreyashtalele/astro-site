"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sakshi",
    role: "Mumbai",
    text: "Incredibly accurate birth chart reading. The predictions aligned perfectly with events in my life.",
    rating: 5,
  },
  {
    name: "Piyush",
    role: "Nashik",
    text: "I was skeptical at first, but the kundli reading was so accurate it left me speechless.",
    rating: 5,
  },
  {
    name: "Vaishnavi",
    role: "Nagpur",
    text: "The marriage compatibility reading gave us deep clarity before our wedding.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Aishwarya",
    role: "Mumbai",
    text: "Career guidance was spot on. Helped me make a major decision with confidence.",
    rating: 5,
  },
  {
    name: "Dipanshu",
    role: "Kolkata",
    text: "Very accurate predictions and helpful guidance. Highly recommended.",
    rating: 5,
  },
  {
    name: "Priya",
    role: "Pune",
    text: "The gemstone recommendation made a noticeable difference in just weeks.",
    rating: 5,
    highlight: true,
  },
];

const VISIBLE = 3;
const AUTO_DELAY = 5000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const isPaused = useRef(false);

  const maxIndex = Math.max(testimonials.length - VISIBLE, 0);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) next();
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, [next]);

  const visibleTestimonials = testimonials.slice(index, index + VISIBLE);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
      scale: 0.96,
      filter: "blur(6px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      scale: 0.96,
      filter: "blur(6px)",
      transition: {
        duration: 0.45,
        ease: "easeOut" as const,
      },
    }),
  };
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-6 pt-12 pb-12 lg:px-16"
      onMouseEnter={() => {
        isPaused.current = true;
      }}
      onMouseLeave={() => {
        isPaused.current = false;
      }}
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
              <span className="text-lg font-medium tracking-[0.18em] text-[#D4AF37]/60 uppercase">
                What Clients Say
              </span>
            </div>

            <p className="max-w-md text-sm text-[#F2D6A0]/45">
              Trusted by clients across India for accurate guidance and
              practical remedies.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#F2D6A0]/60 transition-all duration-200 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#F2D6A0]/60 transition-all duration-200 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {visibleTestimonials.map((item, i) => (
                <motion.div
                  key={`${item.name}-${index}-${i}`}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.45,
                      delay: i * 0.12,
                      ease: "easeOut",
                    },
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.25 },
                  }}
                  className="group relative"
                >
                  {item.highlight && (
                    <motion.div
                      className="absolute -inset-2 rounded-xl bg-[#D4AF37]/[0.08] blur-2xl"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  <div
                    className={`relative h-full rounded-xl border p-5 backdrop-blur-md transition-all duration-300 ${
                      item.highlight
                        ? "border-[#D4AF37]/25 bg-[#D4AF37]/[0.04]"
                        : "border-white/10 bg-white/[0.03] group-hover:border-[#D4AF37]/25"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.1),transparent_60%)] opacity-30" />

                    <div className="relative mb-3">
                      <Quote
                        size={16}
                        className="text-[#D4AF37]/40"
                        fill="currentColor"
                      />
                    </div>

                    <p className="relative mb-5 text-sm leading-relaxed text-[#F2D6A0]/75">
                      {item.text}
                    </p>

                    <div className="relative mb-4 flex gap-0.5">
                      {Array.from({ length: item.rating }).map(
                        (_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={11}
                            className="text-[#D4AF37]"
                            fill="currentColor"
                          />
                        ),
                      )}
                    </div>

                    <div className="relative flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B76E79] text-xs font-semibold text-black">
                        {item.name[0]}
                      </div>

                      <div>
                        <h4 className="mb-1 text-sm font-medium text-white">
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
