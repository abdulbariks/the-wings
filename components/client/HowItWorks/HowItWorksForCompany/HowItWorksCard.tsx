"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface HowItWorksStep {
  image: string;
  title: string;
  desc: string;
  isDark?: boolean;
}

interface HowItWorksCardProps {
  step: HowItWorksStep;
}

export default function HowItWorksCard({ step }: HowItWorksCardProps) {
  return (
    <div
      className={cn(
        "p-4 flex flex-col h-full rounded-none border border-[#0F0D0B]/10",
        step.isDark ? "bg-[#0F0D0B] text-white" : "bg-[#F4F3F1] text-primary",
      )}
    >
      <div className="relative w-full aspect-5/4 mb-4 overflow-hidden">
        <Image
          src={step.image}
          alt={step.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover grayscale"
        />
      </div>
      <h3
        className={cn(
          "font-serif text-3xl md:text-4xl font-semibold mb-4 leading-snug",
          step.isDark ? "text-white" : "text-[#1d1f2c]",
        )}
      >
        {step.title}
      </h3>
      <p
        className={cn(
          "font-sans  md:text-lg leading-relaxed flex-1",
          step.isDark ? "text-[#E9E9EA]" : "text-[#777980]",
        )}
      >
        {step.desc}
      </p>
    </div>
  );
}
