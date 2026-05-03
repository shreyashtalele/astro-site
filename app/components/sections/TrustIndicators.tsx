"use client";

export default function TrustIndicators() {
  const data = [
    "9+ Years Professional Experience",
    "5000+ Lives Guided with Precision",
    "20+ Years Trusted Family Legacy",
    "100% Confidential Consultations",
  ];

  return (
    <div className="grid grid-cols-2 gap-4 text-xs opacity-60">
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
          {item}
        </div>
      ))}
    </div>
  );
}
