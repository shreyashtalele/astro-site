"use client";

import { motion } from "framer-motion";
import { Moon, Sparkles, TrendingUp } from "lucide-react";

const GOLD = "#D4AF37";

const houses = [
  { n: 1, x: 250, y: 75 },
  { n: 2, x: 370, y: 135 },
  { n: 3, x: 425, y: 250 },
  { n: 4, x: 370, y: 370 },
  { n: 5, x: 250, y: 425 },
  { n: 6, x: 135, y: 370 },
  { n: 7, x: 75, y: 250 },
  { n: 8, x: 135, y: 135 },
  { n: 9, x: 250, y: 160 },
  { n: 10, x: 340, y: 250 },
  { n: 11, x: 250, y: 340 },
  { n: 12, x: 160, y: 250 },
];

function InfoCard({
  icon,
  label,
  value,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      className={`absolute rounded-2xl border border-[#D4AF37]/25 bg-white/[0.06] px-4 py-3 shadow-[0_0_35px_rgba(212,175,55,0.12)] backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#FFD700]">
          {icon}
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]/70">
            {label}
          </p>
          <p className="text-sm font-semibold text-white">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function InteractiveKundli() {
  return (
    <div className="relative mx-auto flex h-[430px] w-full max-w-[560px] items-center justify-center md:h-[560px]">
      {/* Background glow */}
      <div className="absolute h-[78%] w-[78%] rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute h-[52%] w-[52%] rounded-full bg-[#B76E79]/10 blur-2xl" />

      {/* Floating cards */}
      <InfoCard
        icon={<Moon size={18} />}
        label="Moon Sign"
        value="Virgo"
        className="left-2 top-10 hidden md:block"
        delay={0.2}
      />

      <InfoCard
        icon={<Sparkles size={18} />}
        label="Ascendant"
        value="Leo Rising"
        className="right-0 top-24 hidden md:block"
        delay={0.35}
      />

      <InfoCard
        icon={<TrendingUp size={18} />}
        label="Prediction Score"
        value="92% Aligned"
        className="bottom-16 left-6 hidden md:block"
        delay={0.5}
      />

      {/* Main glass panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex h-[330px] w-[330px] items-center justify-center rounded-[2rem] border border-[#D4AF37]/25 bg-[#09091b]/55 shadow-[0_0_80px_rgba(212,175,55,0.18)] backdrop-blur-xl md:h-[430px] md:w-[430px]"
      >
        <motion.div
          animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="h-[88%] w-[88%]"
        >
          <svg viewBox="0 0 500 500" className="h-full w-full">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#B76E79" />
              </linearGradient>
            </defs>

            {/* Outer kundli square */}
            <motion.path
              d="M60 60 H440 V440 H60 Z"
              fill="none"
              stroke="url(#goldLine)"
              strokeWidth="2.4"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />

            {/* Main diamond */}
            <motion.path
              d="M250 60 L440 250 L250 440 L60 250 Z"
              fill="none"
              stroke={GOLD}
              strokeWidth="2"
              opacity="0.95"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.3 }}
            />

            {/* Inner kundli lines */}
            {[
              "M60 60 L440 440",
              "M440 60 L60 440",
              "M250 60 L250 440",
              "M60 250 L440 250",
              "M60 60 L250 250 L60 440",
              "M440 60 L250 250 L440 440",
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                fill="none"
                stroke={GOLD}
                strokeWidth="1.25"
                opacity="0.55"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.6 + i * 0.12 }}
              />
            ))}

            {/* House numbers */}
            {houses.map((house, i) => (
              <motion.text
                key={house.n}
                x={house.x}
                y={house.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFD700"
                fontSize="16"
                fontFamily="Cinzel, Georgia, serif"
                opacity="0.9"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.05 }}
              >
                {house.n}
              </motion.text>
            ))}

            {/* Planet points */}
            {[
              { x: 250, y: 160, label: "☉" },
              { x: 340, y: 250, label: "☽" },
              { x: 250, y: 340, label: "♃" },
              { x: 160, y: 250, label: "♂" },
              { x: 370, y: 135, label: "♀" },
            ].map((p, i) => (
              <motion.g
                key={p.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [1, 1.16, 1] }}
                transition={{
                  opacity: { delay: 1.7 + i * 0.15 },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  },
                }}
              >
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="15"
                  fill="#D4AF37"
                  opacity="0.16"
                  filter="url(#glow)"
                />
                <text
                  x={p.x}
                  y={p.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#FFD700"
                  fontSize="18"
                >
                  {p.label}
                </text>
              </motion.g>
            ))}

            {/* Center pulse */}
            <motion.circle
              cx="250"
              cy="250"
              r="28"
              fill="none"
              stroke="#FFD700"
              strokeWidth="1.3"
              animate={{ r: [24, 34, 24], opacity: [0.9, 0.25, 0.9] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <circle cx="250" cy="250" r="6" fill="#FFD700" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mobile cards */}
      <div className="absolute bottom-0 flex gap-2 md:hidden">
        {["Moon: Virgo", "Asc: Leo", "Score: 92%"].map((item) => (
          <div
            key={item}
            className="rounded-full border border-[#D4AF37]/20 bg-white/[0.06] px-3 py-1.5 text-[11px] text-[#FFD700] backdrop-blur-md"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
