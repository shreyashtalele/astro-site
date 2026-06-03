"use client";

import { useEffect, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-120px 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed left-0 top-0 z-50 flex w-full justify-center"
    >
      <nav
        className={`mt-4 w-[95%] max-w-6xl rounded-full border px-5 py-3 backdrop-blur-xl transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border-white/10 bg-[#0B0B1A]/85 shadow-[0_0_40px_rgba(212,175,55,0.1)]"
            : "border-white/[0.06] bg-white/[0.03]"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="text-sm font-semibold tracking-[0.2em] text-[#F2D6A0]">
              ASTRO PATIL
            </span>
          </a>

          <div className="ml-auto hidden items-center gap-8 md:flex">
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
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#D4AF37]"
                  />
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/70 md:hidden"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-[76px] flex w-[95%] max-w-6xl -translate-x-1/2 flex-col gap-1 rounded-2xl border border-white/10 bg-[#0B0B1A]/95 px-5 py-4 backdrop-blur-2xl md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-3 py-3 text-sm transition-colors ${
                    active === link.href
                      ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                      : "text-[#F2D6A0]/70 hover:bg-white/[0.04] hover:text-[#F2D6A0]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
