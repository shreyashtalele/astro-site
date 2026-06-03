// FutureCTA.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function FutureCTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles: {
      x: number;
      y: number;
      r: number;
      ox: number;
      oy: number;
      speed: number;
      angle: number;
      opacity: number;
    }[] = [];

    const buildParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 55; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.3,
          ox: Math.random() * canvas.width,
          oy: Math.random() * canvas.height,
          speed: Math.random() * 0.004 + 0.002,
          angle: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.5 + 0.15,
        });
      }
    };
    buildParticles();

    const onResize = () => {
      resize();
      buildParticles();
    };
    window.addEventListener("resize", onResize);

    let frame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.angle += p.speed;
        p.x = p.ox + Math.cos(p.angle) * 28;
        p.y = p.oy + Math.sin(p.angle) * 18;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0720]/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_50%,rgba(55,20,100,0.3),transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_50%_70%,rgba(212,175,55,0.06),transparent_70%)]" />

      {/* Particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative max-w-3xl mx-auto text-center px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
          <span className="text-base tracking-[0.20em] uppercase text-[#D4AF37]/60 font-medium">
            Book a Session
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight mb-4">
            Still confused
            <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] via-[#F2D6A0] to-[#c9a84c]">
                about your future?
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            </span>
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-[#F2D6A0]/45 text-sm md:text-base leading-relaxed mb-10 max-w-sm mx-auto"
        >
          Get personalised guidance rooted in ancient Vedic wisdom. Your clarity
          is one conversation away.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary */}
          <motion.a
            href="https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20personal%20astrology%20guidance."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="relative group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#c9a037] via-[#f0d060] to-[#c9a037] text-black shadow-[0_0_24px_rgba(212,175,55,0.28)] hover:shadow-[0_0_40px_rgba(212,175,55,0.45)] transition-shadow duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative z-10">Chat on WhatsApp</span>
          </motion.a>

          {/* Secondary */}
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-[#F2D6A0]/60 text-sm hover:border-[#D4AF37]/30 hover:text-[#F2D6A0]/80 transition-all duration-300"
          >
            View Services
          </motion.a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-7 text-[11px] text-[#F2D6A0]/25 tracking-wide"
        >
          5000+ consultations · 100% confidential · Vedic astrology
        </motion.p>
      </div>
    </section>
  );
}
