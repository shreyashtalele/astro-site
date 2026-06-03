import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { SiAstro } from "react-icons/si";
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hello Astro Patil, I would like to book a consultation.",
  );

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] pt-16 pb-8">
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[200px] w-[500px] rounded-full bg-[#D4AF37]/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 border-b border-white/[0.06] pb-10 md:grid-cols-3">
          <div>
            <a href="#home" className="inline-flex text-[#F2D6A0]">
              <span className="text-sm font-semibold tracking-[0.2em]">
                ASTRO PATIL
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#F2D6A0]/50">
              Guiding lives through ancient Vedic wisdom and modern insight.
              Discover clarity, purpose, and direction in your journey.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-center">
            <h4 className="mb-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]/60">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 md:flex-row md:gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#F2D6A0]/60 transition-colors hover:text-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]/60">
              Connect
            </h4>

            <div className="flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/917385803537?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:border-[#25D366]/40 hover:text-[#25D366] hover:scale-105"
              >
                <FaWhatsapp size={18} />
              </a>

              {/* Phone */}
              <a
                href="tel:+917385803537"
                aria-label="Call Astro Patil"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] hover:scale-105"
              >
                <FaPhoneAlt size={15} />
              </a>

              {/* Email */}
              <a
                href="mailto:astropatilofficial@gmail.com"
                aria-label="Email Astro Patil"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] hover:scale-105"
              >
                <FaEnvelope size={15} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/astropatil_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:border-[#E1306C]/40 hover:text-[#E1306C] hover:scale-105"
              >
                <FaInstagram size={17} />
              </a>

              {/* AstroTalk */}
              <a
                href="https://chat.astrotalk.com/BnlV/j0phqq83?slug=Trishit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AstroTalk profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:border-[#FF6B35]/40 hover:text-[#FF6B35] hover:scale-105"
              >
                <span className="text-[11px] font-bold tracking-wide">AT</span>
              </a>
            </div>

            <p className="text-xs text-[#F2D6A0]/40">
              Available for consultations
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 md:flex-row">
          <p className="text-center text-xs text-[#F2D6A0]/40 md:text-left">
            © {new Date().getFullYear()} Astro Patil. All rights reserved.
          </p>

          <p className="text-xs text-[#F2D6A0]/35">
            Vedic Astrology • Palmistry • Vastu
          </p>
        </div>
      </div>
    </footer>
  );
}
