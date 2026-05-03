"use client";

import React, { useEffect, useRef } from "react";

const SIGNS = [
  {
    name: "ARIES",
    icon: (
      <g>
        <path
          d="M-12,2 C-18,-6 -22,0 -16,6 C-10,10 -4,6 0,2 C4,6 10,10 16,6 C22,0 18,-6 12,2"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle
          cx="-16"
          cy="7"
          r="4"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.3"
        />
        <circle
          cx="16"
          cy="7"
          r="4"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.3"
        />
      </g>
    ),
  },
  {
    name: "TAURUS",
    icon: (
      <g>
        <circle
          cx="0"
          cy="0"
          r="9"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.6"
        />
        <path
          d="M-9,-8 C-13,-16 -9,-21 -4,-19 C-2,-18 0,-17 0,-17 C0,-17 2,-18 4,-19 C9,-21 13,-16 9,-8"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  {
    name: "GEMINI",
    icon: (
      <g>
        <line
          x1="-11"
          y1="-12"
          x2="-11"
          y2="10"
          stroke="#d4a017"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="-12"
          x2="11"
          y2="10"
          stroke="#d4a017"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="-11"
          y1="-12"
          x2="11"
          y2="-12"
          stroke="#d4a017"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <line
          x1="-11"
          y1="10"
          x2="11"
          y2="10"
          stroke="#d4a017"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <line
          x1="-11"
          y1="-1"
          x2="11"
          y2="-1"
          stroke="#d4a017"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  {
    name: "CANCER",
    icon: (
      <g>
        <path
          d="M-10,0 C-10,-10 10,-10 10,0 C10,10 -10,10 -10,0Z"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.4"
        />
        <path
          d="M-14,-5 C-16,-1 -14,4 -10,4"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M14,-5 C16,-1 14,4 10,4"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="-6" cy="-1" r="2.5" fill="#d4a017" />
        <circle cx="6" cy="-1" r="2.5" fill="#d4a017" />
      </g>
    ),
  },
  {
    name: "LEO",
    icon: (
      <g>
        <circle
          cx="2"
          cy="-3"
          r="8"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.6"
        />
        <path
          d="M-6,-3 C-12,-10 -8,-18 -2,-14 C0,-13 2,-11 4,-10 C7,-9 10,-6 10,2 C10,8 6,12 2,10 C-2,12 -8,8 -8,2"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M9,4 C12,6 14,4 12,-2"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  {
    name: "VIRGO",
    icon: (
      <g>
        <path
          d="M-10,-14 L-10,10 M-10,-14 C-10,-19 10,-19 10,-14 L10,4 C10,10 2,12 0,10 C-2,12 0,16 7,16"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ),
  },
  {
    name: "LIBRA",
    icon: (
      <g>
        <path
          d="M-14,0 C-14,-8 -6,-12 0,-10 C6,-12 14,-8 14,0"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.4"
        />
        <line
          x1="-14"
          y1="0"
          x2="14"
          y2="0"
          stroke="#d4a017"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="8"
          stroke="#d4a017"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <line
          x1="-12"
          y1="8"
          x2="12"
          y2="8"
          stroke="#d4a017"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  {
    name: "SCORPIO",
    icon: (
      <g>
        <path
          d="M-14,-8 L-14,7 M-5,-8 L-5,7 M4,-8 L4,7"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <line
          x1="-14"
          y1="-8"
          x2="4"
          y2="-8"
          stroke="#d4a017"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M4,7 C9,7 13,5 13,-2 C13,-7 11,-12 14,-16"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11,-16 L14,-16 L14,-11"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ),
  },
  {
    name: "SAGITT.",
    icon: (
      <g>
        <line
          x1="-14"
          y1="12"
          x2="12"
          y2="-14"
          stroke="#d4a017"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M6,-14 L12,-14 L12,-8"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="-8"
          y1="-8"
          x2="8"
          y2="8"
          stroke="#d4a017"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="-8"
          y1="-8"
          x2="-14"
          y2="-4"
          stroke="#d4a017"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  {
    name: "CAPRIC.",
    icon: (
      <g>
        <path
          d="M-11,-13 C-11,-17 -7,-20 -2,-17 C2,-14 4,-10 2,-6 C0,-2 -5,1 -7,6 C-9,10 -7,14 -2,14 C2,14 6,10 9,5 C11,1 11,-4 9,-7"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M-11,-13 C-15,-8 -15,-3 -11,1"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  {
    name: "AQUAR.",
    icon: (
      <g>
        <path
          d="M-14,-5 C-10,-10 -5,-4 0,-5 C5,-6 10,-10 14,-5"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M-14,5 C-10,0 -5,6 0,5 C5,4 10,0 14,5"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  {
    name: "PISCES",
    icon: (
      <g>
        <path
          d="M-14,-5 C-6,-10 6,-10 14,-5"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M-14,5 C-6,0 6,0 14,5"
          fill="none"
          stroke="#d4a017"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M-5,-14 C-11,-8 -12,0 -10,8 C-8,12 -4,14 0,12 C4,14 8,12 10,8 C12,0 11,-8 5,-14 C2,-17 -2,-17 -5,-14Z"
          fill="none"
          stroke="#d4a017"
          strokeWidth="0.9"
        />
      </g>
    ),
  },
];

const PLANET_LABELS = [
  "PHYSIOUS",
  "CARRUS",
  "PLANEUS",
  "TELIEUS",
  "ANGIEUS",
  "CACEUR",
  "ANTOUR",
  "BYAREUM",
  "PHARIEIS",
  "ECEPHAE",
  "PHYSIOUS",
  "CARRUS",
];

const DOTS: [number, number, number][] = [
  [258, 234, 1.5],
  [268, 229, 1],
  [278, 236, 1.5],
  [300, 254, 1],
  [310, 248, 1.5],
  [324, 257, 1],
  [306, 306, 1.5],
  [294, 314, 1],
  [302, 322, 1.5],
  [258, 306, 1],
  [248, 298, 1.5],
  [240, 310, 1],
];

export default function ZodiacWheel() {
  const outerRef = useRef<SVGGElement>(null);
  const innerRef = useRef<SVGGElement>(null);
  const outerAngle = useRef(0);
  const innerAngle = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let last = performance.now();
    const animate = (now: number) => {
      const delta = now - last;
      last = now;
      outerAngle.current = (outerAngle.current + delta * 0.0025) % 360;
      innerAngle.current = (innerAngle.current - delta * 0.0015 + 360) % 360;
      if (outerRef.current)
        outerRef.current.setAttribute(
          "transform",
          `rotate(${outerAngle.current} 280 280)`,
        );
      if (innerRef.current)
        innerRef.current.setAttribute(
          "transform",
          `rotate(${innerAngle.current} 280 280)`,
        );
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── Radii ──
  const R_BORDER = 275; // outermost ring
  const R_ACCENT = 182; // gold accent ring
  const R_CORE = 148; // core circle
  const R_CORE_IN = 125; // inner dashed ring

  // Signs centred between border and accent, at sector angular midpoint
  const R_SIGN = (R_BORDER + R_ACCENT) / 2; // ~228

  // Planet label orbit
  const R_TEXT = 163;

  return (
    <div className="flex items-center justify-center w-full py-4 md:py-6">
      <svg
        viewBox="0 0 560 560"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[400px] h-auto"
      >
        {/* ── Static background — fills first, strokes on top ── */}

        {/* Outer dark disc */}
        <circle
          cx="280"
          cy="280"
          r={R_BORDER}
          fill="#07111f"
          stroke="#d4a017"
          strokeWidth="2.5"
        />
        {/* Gold accent ring */}
        <circle
          cx="280"
          cy="280"
          r={R_ACCENT}
          fill="none"
          stroke="#d4a017"
          strokeWidth="0.8"
        />
        {/* Core zone */}
        <circle
          cx="280"
          cy="280"
          r={R_CORE}
          fill="#07111f"
          stroke="#d4a017"
          strokeWidth="2"
        />
        {/* Inner core dashed ring */}
        <circle
          cx="280"
          cy="280"
          r={R_CORE_IN}
          fill="none"
          stroke="#b8891a"
          strokeWidth="0.8"
          strokeDasharray="3 5"
        />

        {/* ── Outer spinning group ── */}
        <g ref={outerRef}>
          {/* Sector dividers — from core edge to outer border */}
          {Array.from({ length: 12 }).map((_, i) => {
            const rad = (i * 30 - 90) * (Math.PI / 180);
            return (
              <line
                key={i}
                x1={280 + R_CORE * Math.cos(rad)}
                y1={280 + R_CORE * Math.sin(rad)}
                x2={280 + R_BORDER * Math.cos(rad)}
                y2={280 + R_BORDER * Math.sin(rad)}
                stroke="#d4a017"
                strokeWidth="1"
              />
            );
          })}

          {/* Diamond markers where dividers meet the accent ring */}
          {Array.from({ length: 12 }).map((_, i) => {
            const rad = (i * 30 - 90) * (Math.PI / 180);
            const px = 280 + R_ACCENT * Math.cos(rad);
            const py = 280 + R_ACCENT * Math.sin(rad);
            return (
              <polygon
                key={i}
                points={`${px},${py - 5} ${px + 4},${py} ${px},${py + 5} ${px - 4},${py}`}
                fill="#d4a017"
                transform={`rotate(${i * 30} ${px} ${py})`}
              />
            );
          })}

          {/* ── Signs — angular midpoint of each sector (+15°) ── */}
          {SIGNS.map((sign, i) => {
            const midDeg = i * 30 + 15; // centre between two dividers
            const midRad = (midDeg - 90) * (Math.PI / 180);
            const cx = 280 + R_SIGN * Math.cos(midRad);
            const cy = 280 + R_SIGN * Math.sin(midRad);
            return (
              <g
                key={sign.name}
                transform={`translate(${cx},${cy}) rotate(${midDeg})`}
              >
                <g transform="translate(0,-13)">{sign.icon}</g>
                <text
                  x="0"
                  y="17"
                  textAnchor="middle"
                  fontFamily="'Cinzel','Georgia',serif"
                  fontSize="7.5"
                  fontWeight="600"
                  fill="#f0c840"
                  letterSpacing="0.5"
                >
                  {sign.name}
                </text>
              </g>
            );
          })}

          {/* Constellation scatter dots */}
          {DOTS.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#f0e68c" opacity="0.55" />
          ))}
        </g>

        {/* ── Inner counter-spinning group ── */}
        <g ref={innerRef}>
          {PLANET_LABELS.map((label, i) => {
            const deg = i * 30;
            const rad = (deg - 90) * (Math.PI / 180);
            const lx = 280 + R_TEXT * Math.cos(rad);
            const ly = 280 + R_TEXT * Math.sin(rad);
            return (
              <text
                key={i}
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="'Cinzel','Georgia',serif"
                fontSize="7.5"
                fill="#c8961e"
                transform={`rotate(${deg} ${lx} ${ly})`}
              >
                {label}
              </text>
            );
          })}
        </g>

        {/* ── Static centre sun ── */}
        <g>
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={280 + 42 * Math.cos(a)}
                y1={280 + 42 * Math.sin(a)}
                x2={280 + 60 * Math.cos(a)}
                y2={280 + 60 * Math.sin(a)}
                stroke="#d4a017"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = ((i * 30 + 15) * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={280 + 38 * Math.cos(a)}
                y1={280 + 38 * Math.sin(a)}
                x2={280 + 50 * Math.cos(a)}
                y2={280 + 50 * Math.sin(a)}
                stroke="#b8891a"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            );
          })}
          <circle cx="280" cy="280" r="38" fill="#d4a017" />
          <circle cx="280" cy="280" r="32" fill="#e8b820" />
          <circle cx="280" cy="280" r="25" fill="#f2c840" />
          <circle cx="273" cy="277" r="3" fill="#a06010" />
          <circle cx="287" cy="277" r="3" fill="#a06010" />
          <path
            d="M273,286 C276,291 284,291 287,286"
            fill="none"
            stroke="#a06010"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M280,278 L277,283 L283,283Z"
            fill="none"
            stroke="#a06010"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}
