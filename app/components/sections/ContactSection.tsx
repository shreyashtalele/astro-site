"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "7385803537",
    href: "tel:7385803537",
  },
  {
    icon: Mail,
    label: "Email",
    value: "astropatilofficial@gmail.com",
    href: "mailto:astropatilofficial@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, India",
    href: "https://maps.google.com/?q=Pune,India",
  },
];

export default function ContactSection() {
  const [error, setError] = useState("");

  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !phone || !service || !message) {
      setError("Please fill all fields before sending.");
      return;
    }

    const cleanPhone = phone.replace(/\s+/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError("Please enter a valid 10 digit Indian mobile number.");
      return;
    }

    const ownerNumber = "917385803537";

    const text = ` New Astrology Enquiry

 Name: ${name}
 Phone: ${cleanPhone}
 Service: ${service}

 Message:
${message}`;

    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative pt-12 pb-16 px-6 lg:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
            <span className="text-lg tracking-[0.18em] uppercase text-[#D4AF37]/60 font-medium">
              Get in Touch
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-4"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={
                    item.label === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-[#D4AF37]/20 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] flex items-center justify-center">
                    <Icon size={15} className="text-[#D4AF37]" />
                  </div>

                  <div>
                    <p className="text-[10px] text-[#F2D6A0]/35 uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#F2D6A0]/80">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}

            <motion.a
              href="https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 flex items-center justify-center py-3.5 rounded-xl bg-gradient-to-r from-[#c9a037] via-[#f0d060] to-[#c9a037] text-black font-semibold text-sm"
            >
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-md p-6 flex flex-col gap-4"
          >
            <form onSubmit={handleWhatsApp} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  aria-label="Your name"
                  required
                  className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-[#F2D6A0]/80 placeholder:text-[#F2D6A0]/25 focus:outline-none focus:border-[#D4AF37]/40"
                />

                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter mobile number"
                  aria-label="Mobile number"
                  required
                  className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-[#F2D6A0]/80 placeholder:text-[#F2D6A0]/25 focus:outline-none focus:border-[#D4AF37]/40"
                />
              </div>

              <select
                name="service"
                defaultValue=""
                aria-label="Select astrology service"
                required
                className="bg-[#141426] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-[#F2D6A0]/80 focus:outline-none focus:border-[#D4AF37]/40"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Kundli Reading">Kundli Reading</option>
                <option value="Marriage Compatibility">
                  Marriage Compatibility
                </option>
                <option value="Career Guidance">Career Guidance</option>
                <option value="Vastu Consultation">Vastu Consultation</option>
                <option value="Numerology">Numerology</option>
                <option value="Face Reading">Face Reading</option>
                <option value="Palmistry">Palmistry</option>
              </select>

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us what you'd like guidance on..."
                aria-label="Message"
                required
                className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-[#F2D6A0]/80 placeholder:text-[#F2D6A0]/25 focus:outline-none focus:border-[#D4AF37]/40 resize-none"
              />

              {error && (
                <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-lg border border-[#D4AF37]/25 bg-[#D4AF37]/[0.05] text-[#D4AF37] text-sm font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
