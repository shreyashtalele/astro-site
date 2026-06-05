"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    const handleScroll = () => setScrolled(window.scrollY > 25);

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
        threshold: 0.4,
        rootMargin: "-100px 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className={`transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#050510]/65 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[62px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[76px] lg:px-10">
          {/* Brand */}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="relative"
          >
            <h1 className="text-[18px] font-semibold tracking-[0.3em] text-[#F6DFA8] sm:text-xl">
              ASTROPATIL
            </h1>

            <span className="absolute -bottom-1 left-0 h-px w-16 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/70 to-transparent" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  active === link.href
                    ? "text-[#D4AF37]"
                    : "text-[#F6DFA8]/65 hover:text-[#F6DFA8]"
                }`}
              >
                {link.label}

                {active === link.href && (
                  <motion.span
                    layoutId="desktop-active"
                    className="absolute -bottom-2 left-0 h-px w-full bg-[#D4AF37]"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="group relative hidden items-center justify-center overflow-hidden px-6 py-3 lg:flex"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37]" />
            <span className="absolute inset-[1px] bg-[#080814] transition-opacity duration-300 group-hover:opacity-0" />

            <span className="relative text-xs font-bold uppercase tracking-[0.22em] text-[#F6DFA8] transition-colors duration-300 group-hover:text-[#070713]">
              Get Guidance
            </span>
          </a>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center text-[#F6DFA8] lg:hidden"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mx-4 mb-4 border border-[#D4AF37]/12 bg-[#050510]/82 px-5 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col">
                {links.map((link) => {
                  const isActive = active === link.href;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`border-b border-white/[0.07] py-3.5 text-[17px] font-medium transition-colors ${
                        isActive ? "text-[#D4AF37]" : "text-[#F6DFA8]/82"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex w-full items-center justify-center bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-[#070713] shadow-[0_10px_30px_rgba(212,175,55,0.25)]"
              >
                Get Guidance
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
