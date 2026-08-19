"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PricingTabsProps {
  activeTab: "dancer" | "company";
  onChange: (tab: "dancer" | "company") => void;
}

export default function PricingTabs({ activeTab, onChange }: PricingTabsProps) {
  return (
    <div className="bg-[#F4F3F1] p-1 flex w-fit mx-auto relative select-none border border-[#0F0D0B]/5">
      {/* Sliding active background indicator */}
      <div
        className={cn(
          "absolute top-1 bottom-1 left-1 w-36 bg-white shadow-[0_1px_2px_rgba(15,13,11,0.08),0_1px_3px_rgba(15,13,11,0.05)] transition-transform duration-300 ease-in-out z-0",
          activeTab === "company" ? "translate-x-full" : "translate-x-0",
        )}
      />

      {/* Dancer Tab */}
      <button
        type="button"
        onClick={() => onChange("dancer")}
        className={cn(
          "w-36 h-9 font-sans text-xs md:text-sm font-medium cursor-pointer transition-colors duration-300 relative z-10 text-center flex items-center justify-center rounded-md",
          activeTab === "dancer"
            ? "text-primary font-semibold"
            : "text-[#4A4C56] hover:text-primary",
        )}
      >
        I am a dancer
      </button>

      {/* Company Tab */}
      <button
        type="button"
        onClick={() => onChange("company")}
        className={cn(
          "w-36 h-9 font-sans text-xs md:text-sm font-medium cursor-pointer transition-colors duration-300 relative z-10 text-center flex items-center justify-center rounded-md",
          activeTab === "company"
            ? "text-primary font-semibold"
            : "text-[#4A4C56] hover:text-primary",
        )}
      >
        I am a company
      </button>
    </div>
  );
}
