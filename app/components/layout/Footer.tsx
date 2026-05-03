"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden border-t border-white/[0.05]">
      {/* Ambient Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[200px] bg-[#D4AF37]/[0.04] blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/[0.06]">
          {/* BRAND */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2 text-[#F2D6A0]">
              <span className="text-sm tracking-[0.2em] font-semibold">
                ASTRO PATIL
              </span>
            </a>

            <p className="text-sm text-[#F2D6A0]/50 leading-relaxed max-w-xs">
              Guiding lives through ancient Vedic wisdom and modern insight.
              Discover clarity, purpose, and direction in your journey.
            </p>
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-col items-start md:items-center gap-3">
            <h4 className="text-xs tracking-[0.2em] text-[#D4AF37]/60 uppercase mb-2">
              Navigation
            </h4>

            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-sm text-[#F2D6A0]/60 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT / SOCIAL */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <h4 className="text-xs tracking-[0.2em] text-[#D4AF37]/60 uppercase">
              Connect
            </h4>

            <div className="flex gap-3 items-center">
              {/* WhatsApp */}
              <a
                href="https://wa.me/7385803537"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 hover:text-[#25D366] hover:border-[#25D366]/40 transition"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M20.52 3.48A11.8 11.8 0 0012.05 0C5.47 0 .13 5.34.13 11.92c0 2.1.55 4.14 1.59 5.96L0 24l6.29-1.65a11.9 11.9 0 005.76 1.47h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.46-8.42zM12.06 21.5h-.01a9.5 9.5 0 01-4.83-1.32l-.35-.21-3.73.98 1-3.64-.23-.37a9.49 9.49 0 01-1.46-5.03c0-5.24 4.27-9.51 9.52-9.51 2.54 0 4.93.99 6.73 2.79a9.45 9.45 0 012.79 6.72c0 5.25-4.27 9.51-9.43 9.51zm5.52-7.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.29-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.18-1.41-.08-.12-.28-.2-.57-.35z" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:+917385803537"
                aria-label="Phone"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:astropatilofficial@gmail.com"
                aria-label="Email"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/astropatil_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 hover:text-[#E1306C] hover:border-[#E1306C]/40 transition"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 110 6 3 3 0 010-6zm-5 3a6 6 0 110 12 6 6 0 010-12z" />
                </svg>
              </a>

              {/* AstroTalk */}
              <a
                href="https://chat.astrotalk.com/BnlV/j0phqq83?slug=Trishit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AstroTalk"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 hover:text-[#FF6B35] hover:border-[#FF6B35]/40 transition"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm0 3a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              </a>
            </div>

            <p className="text-xs text-[#F2D6A0]/40">
              Available for consultations
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs text-[#F2D6A0]/40 text-center md:text-left">
            © {new Date().getFullYear()} Astro Patil. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-[#F2D6A0]/40">
            <a href="#" className="hover:text-[#D4AF37] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
