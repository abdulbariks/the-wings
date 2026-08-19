import React from "react";

export default function PricingHighlights() {
  const highlights = [
    {
      title: "No director pay wall",
      desc: "Company access is free permanently - it is written into how the platform works, not a launch promotion.",
    },
    {
      title: "Cancel any time",
      desc: "The Stage Pass is month to month. Cancelling returns you to the free profile with everything intact.",
    },
    {
      title: "No commission",
      desc: "The Wings takes nothing from a contract signed between a dancer and a company.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-[#F4F3F1] mt-8 md:mt-10 lg:mt-12">
      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="border border-[#0F0D0B]/10 bg-white p-6 flex flex-col h-full rounded-none"
        >
          <h3 className="font-serif text-lg md:text-2xl font-semibold text-[#1d1f2c] mb-4 leading-snug">
            {item.title}
          </h3>
          <p className="font-sans text-sm md:text-base text-[#777980] leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
