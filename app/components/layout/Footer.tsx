import {
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

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
    <footer className="relative overflow-hidden border-t border-white/[0.06] pt-10 pb-6">
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[160px] w-[420px] rounded-full bg-[#D4AF37]/[0.035] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-6 border-b border-white/[0.06] pb-6 md:grid-cols-3 md:items-start">
          <div>
            <a href="#home" className="inline-flex text-[#F2D6A0]">
              <span className="text-sm font-semibold tracking-[0.2em]">
                ASTRO PATIL
              </span>
            </a>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#F2D6A0]/50">
              Vedic Astrology, Palmistry, Numerology and Vastu guidance with a
              modern approach.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-center">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]/60">
              Navigation
            </h4>

            <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
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

          <div className="flex flex-col gap-3 md:items-end">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]/60">
              Connect
            </h4>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/917385803537?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:scale-105 hover:border-[#25D366]/40 hover:text-[#25D366]"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="tel:+917385803537"
                aria-label="Call Astro Patil"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:scale-105 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                <FaPhoneAlt size={15} />
              </a>

              <a
                href="mailto:astropatilofficial@gmail.com"
                aria-label="Email Astro Patil"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:scale-105 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                <FaEnvelope size={15} />
              </a>

              <a
                href="https://instagram.com/astropatil_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:scale-105 hover:border-[#E1306C]/40 hover:text-[#E1306C]"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://chat.astrotalk.com/BnlV/j0phqq83?slug=Trishit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AstroTalk profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:scale-105 hover:border-[#FF6B35]/40 hover:text-[#FF6B35]"
              >
                <span className="text-[11px] font-bold tracking-wide">AT</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-5 md:flex-row">
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
