"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // scroll behavior
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 30);

      if (current > lastScroll && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // active section detection
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full z-50 flex justify-center"
        >
          <div
            className={`mt-4 w-[95%] max-w-6xl px-6 py-3 rounded-full border backdrop-blur-xl transition-all duration-500 ${
              scrolled
                ? "bg-[#0B0B1A]/80 border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.1)]"
                : "bg-white/[0.03] border-white/[0.06]"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <a href="#home" className="flex items-center gap-2.5">
                <span className="text-sm tracking-[0.2em] font-semibold text-[#F2D6A0]">
                  ASTROPATIL
                </span>
              </a>

              {/* NAV RIGHT */}
              <div className="hidden md:flex items-center gap-8 ml-auto">
                {links.map((link) => (
                  <div key={link.href} className="relative">
                    <a
                      href={link.href}
                      className={`text-sm transition-colors duration-200 ${
                        active === link.href
                          ? "text-[#D4AF37]"
                          : "text-[#F2D6A0]/60 hover:text-[#F2D6A0]"
                      }`}
                    >
                      {link.label}
                    </a>

                    {active === link.href && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-[#D4AF37]"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* MOBILE MENU BUTTON */}
              <div className="flex items-center">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60"
                >
                  {menuOpen ? <X size={16} /> : <Menu size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-[80px] w-[95%] max-w-6xl rounded-2xl border border-white/10 bg-[#0B0B1A]/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-2 md:hidden"
              >
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 text-sm text-[#F2D6A0]/70 hover:text-[#D4AF37] border-b border-white/[0.05]"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
