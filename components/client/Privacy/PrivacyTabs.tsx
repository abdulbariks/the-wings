"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PrivacyTabsProps {
  activeTab: "privacy" | "terms";
  onChange: (tab: "privacy" | "terms") => void;
}

export default function PrivacyTabs({ activeTab, onChange }: PrivacyTabsProps) {
  return (
    <div className="relative w-full border border-[#0F0D0B]/10 flex h-14 bg-white select-none">
      {/* Static center divider */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#0F0D0B]/10 z-0" />

      {/* Sliding background container */}
      <div
        className={cn(
          "absolute top-0 bottom-0 left-0 w-1/2 h-full bg-[#F4F3F1] transition-transform duration-300 ease-in-out z-0",
          activeTab === "terms" ? "translate-x-full" : "translate-x-0"
        )}
      />

      {/* Privacy Policy Tab */}
      <button
        type="button"
        onClick={() => onChange("privacy")}
        className={cn(
          "relative flex-1 text-center font-sans text-sm md:text-base font-medium cursor-pointer transition-colors duration-300 z-10",
          activeTab === "privacy" ? "text-primary font-semibold" : "text-[#4A4C56] hover:text-primary font-normal"
        )}
      >
        Privacy Policy
      </button>

      {/* Terms of Service Tab */}
      <button
        type="button"
        onClick={() => onChange("terms")}
        className={cn(
          "relative flex-1 text-center font-sans text-sm md:text-base font-medium cursor-pointer transition-colors duration-300 z-10",
          activeTab === "terms" ? "text-primary font-semibold" : "text-[#4A4C56] hover:text-primary font-normal"
        )}
      >
        Terms of Service
      </button>
    </div>
  );
}
