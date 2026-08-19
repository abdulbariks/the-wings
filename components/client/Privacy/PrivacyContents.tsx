"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PrivacyContentsProps {
  items: { id: string; label: string }[];
  activeId: string;
  onItemClick: (id: string) => void;
}

export default function PrivacyContents({
  items,
  activeId,
  onItemClick,
}: PrivacyContentsProps) {
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  const activeIndex = items.findIndex((item) => item.id === activeId);

  useEffect(() => {
    const activeIndexNormalized = activeIndex >= 0 ? activeIndex : 0;
    const activeElement = itemRefs.current[activeIndexNormalized];
    if (activeElement) {
      setIndicatorStyle({
        top: activeElement.offsetTop,
        height: activeElement.offsetHeight,
      });
    }
  }, [activeIndex, items]);

  return (
    <div className="bg-[#F4F3F1] px-6 md:px-8 py-8 relative">
      <p className="font-serif uppercase tracking-widest text-[#4A4C56] mb-6 font-semibold">
        Contents
      </p>

      <div className="relative flex flex-col items-start gap-4">
        {/* Sliding vertical black indicator */}
        <div
          className="absolute left-0 w-0.5 bg-[#1d1f2c] transition-all duration-300 ease-in-out"
          style={{
            top: `${indicatorStyle.top}px`,
            height: `${indicatorStyle.height}px`,
          }}
        />

        {items.map((item, idx) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              onClick={() => onItemClick(item.id)}
              className={cn(
                "text-left pl-5 font-sans text-sm md:text-base leading-snug transition-all duration-300 cursor-pointer select-none",
                isActive
                  ? "text-[#1d1f2c] font-bold"
                  : "text-[#4A4C56] hover:text-[#1d1f2c] font-medium",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
