"use client";

import { motion } from "framer-motion";
import { Moon, Sun, ArrowUp, TrendingUp } from "lucide-react";

const GOLD = "#D4AF37";
const GOLD_LIGHT = "#FFD700";

function GlassCard({
  title,
  value,
  subtitle,
  icon,
  className,
  delay = 0,
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.7, delay },
        scale: { duration: 0.7, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute z-30 rounded-3xl border border-[#D4AF37]/35 bg-[#120b22]/60 px-5 py-4 shadow-[0_0_40px_rgba(212,175,55,0.18)] backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15 text-[#FFD700]">
          {icon}
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            {title}
          </p>
          <p className="mt-1 font-serif text-2xl text-white">{value}</p>
          {subtitle && (
            <p className="mt-1 text-xs text-[#E8C766]/80">{subtitle}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative hidden h-[620px] w-full max-w-[720px] items-center justify-center lg:flex">
      {/* Main glow */}
      <motion.div
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[520px] w-[520px] rounded-full bg-[#D4AF37]/20 blur-[110px]"
      />

      {/* Orbit glow */}
      <div className="absolute h-[610px] w-[610px] rounded-full border border-[#D4AF37]/10" />
      <div className="absolute h-[520px] w-[520px] rounded-full border border-[#D4AF37]/10" />

      {/* Cards */}
      <GlassCard
        title="Moon Sign"
        value="Virgo"
        subtitle="Analytical • Practical"
        icon={<Moon size={22} />}
        className="left-0 top-20 w-[245px]"
        delay={0.2}
      />

      <GlassCard
        title="Ascendant"
        value="Leo"
        subtitle="Confident • Natural Leader"
        icon={<ArrowUp size={24} />}
        className="right-0 top-32 w-[245px]"
        delay={0.45}
      />

      <GlassCard
        title="Current Focus"
        value="Career Growth"
        subtitle="Jupiter Favorable"
        icon={<TrendingUp size={22} />}
        className="bottom-12 left-1/2 w-[285px] -translate-x-1/2"
        delay={0.7}
      />

      {/* Connecting lines */}
      <svg
        className="absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 720 620"
      >
        <path
          d="M180 190 C220 230, 260 250, 310 270"
          fill="none"
          stroke={GOLD}
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.45"
        />
        <path
          d="M540 250 C500 260, 460 270, 410 290"
          fill="none"
          stroke={GOLD}
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.45"
        />
        <path
          d="M360 465 C360 500, 360 520, 360 545"
          fill="none"
          stroke={GOLD}
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.45"
        />
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 28 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute z-20 h-1 w-1 rounded-full bg-[#FFD700]"
          style={{
            left: `${15 + ((i * 29) % 70)}%`,
            top: `${8 + ((i * 37) % 78)}%`,
            opacity: 0.25 + (i % 4) * 0.12,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}

      {/* Main kundli */}
      <motion.div
        initial={{ opacity: 0, scale: 0.82, rotate: -3 }}
        animate={{
          opacity: 1,
          scale: [1, 1.025, 1],
          rotate: [-1.2, 1.2, -1.2],
        }}
        transition={{
          opacity: { duration: 0.9 },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-20 h-[500px] w-[500px]"
      >
        <svg viewBox="0 0 520 520" className="h-full w-full overflow-visible">
          <defs>
            <filter id="heroGoldGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="premiumGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="45%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B76E79" />
            </linearGradient>

            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.55" />
              <stop offset="55%" stopColor="#D4AF37" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* circular orbit rings */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "260px 260px" }}
          >
            <circle
              cx="260"
              cy="260"
              r="235"
              fill="none"
              stroke={GOLD}
              strokeOpacity="0.18"
            />
            <circle
              cx="260"
              cy="260"
              r="205"
              fill="none"
              stroke={GOLD}
              strokeOpacity="0.16"
              strokeDasharray="4 10"
            />
            <circle
              cx="260"
              cy="260"
              r="170"
              fill="none"
              stroke={GOLD}
              strokeOpacity="0.13"
            />
          </motion.g>

          {/* kundli outer diamond */}
          <motion.path
            d="M260 25 L495 260 L260 495 L25 260 Z"
            fill="rgba(8,10,25,0.35)"
            stroke="url(#premiumGold)"
            strokeWidth="4"
            filter="url(#heroGoldGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* inner square */}
          <motion.path
            d="M105 105 H415 V415 H105 Z"
            fill="rgba(255,215,0,0.025)"
            stroke={GOLD_LIGHT}
            strokeWidth="2.4"
            filter="url(#heroGoldGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, delay: 0.25 }}
          />

          {/* inner kundli geometry */}
          {[
            "M260 25 L260 495",
            "M25 260 L495 260",
            "M105 105 L415 415",
            "M415 105 L105 415",
            "M260 25 L105 260 L260 495 L415 260 Z",
            "M25 260 L260 105 L495 260 L260 415 Z",
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke={GOLD_LIGHT}
              strokeWidth={i < 4 ? 1.5 : 1.2}
              opacity={i < 4 ? 0.7 : 0.48}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.5 + i * 0.12 }}
            />
          ))}

          {/* center yantra */}
          <motion.g
            animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "260px 260px" }}
          >
            <circle cx="260" cy="260" r="80" fill="url(#centerGlow)" />
            <circle
              cx="260"
              cy="260"
              r="44"
              fill="none"
              stroke={GOLD_LIGHT}
              strokeWidth="1.4"
            />
            <path
              d="M260 210 L303 285 H217 Z"
              fill="none"
              stroke={GOLD_LIGHT}
              strokeWidth="1.3"
            />
            <path
              d="M260 310 L303 235 H217 Z"
              fill="none"
              stroke={GOLD_LIGHT}
              strokeWidth="1.3"
            />
            <circle
              cx="260"
              cy="260"
              r="10"
              fill={GOLD_LIGHT}
              filter="url(#heroGoldGlow)"
            />
          </motion.g>

          {/* house numbers */}
          {[
            [260, 83, "1"],
            [335, 170, "12"],
            [398, 260, "10"],
            [335, 350, "9"],
            [260, 437, "7"],
            [185, 350, "6"],
            [122, 260, "4"],
            [185, 170, "2"],
          ].map(([x, y, text], i) => (
            <motion.text
              key={text}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#FFE58A"
              fontSize="26"
              fontFamily="Cinzel, Georgia, serif"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.08 }}
            >
              {text}
            </motion.text>
          ))}

          {/* planet symbols */}
          {[
            [260, 150, "☉"],
            [185, 220, "☽"],
            [350, 220, "♃"],
            [175, 310, "♂"],
            [350, 310, "♀"],
            [260, 375, "♄"],
          ].map(([x, y, text], i) => (
            <motion.g
              key={text}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [1, 1.15, 1] }}
              transition={{
                opacity: { delay: 1.3 + i * 0.1 },
                scale: {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.25,
                },
              }}
            >
              <circle
                cx={x}
                cy={y}
                r="22"
                fill="#D4AF37"
                opacity="0.16"
                filter="url(#heroGoldGlow)"
              />
              <text
                x={x}
                y={Number(y) + 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFD700"
                fontSize="26"
                fontFamily="Georgia, serif"
              >
                {text}
              </text>
            </motion.g>
          ))}

          {/* glowing corner nodes */}
          {[
            [260, 25],
            [495, 260],
            [260, 495],
            [25, 260],
            [105, 105],
            [415, 105],
            [415, 415],
            [105, 415],
          ].map(([x, y], i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="6"
              fill="#FFD700"
              filter="url(#heroGoldGlow)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.75, 1, 0.75] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.18,
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
