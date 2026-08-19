"use client";

import React from "react";
import { CheckMark } from "@/components/icons/CheckMark";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  plan: {
    title: string;
    price: string;
    interval: string;
    description: string;
    features: string[];
    buttonText: string;
  };
  onButtonClick?: () => void;
}

export default function PricingCard({ plan, onButtonClick }: PricingCardProps) {
  const { title, price, interval, description, features, buttonText } = plan;
  return (
    <div className="border border-[#0F0D0B]/10 bg-white p-6 flex flex-col h-full rounded-none">
      <span className="font-sans text-sm text-[#9EA1AB]">{title}</span>
      <div className="flex items-baseline font-serif text-[#1d1f2c] text-5xl font-medium mt-3">
        {price}
      </div>
      <span className="font-sans text-sm text-[#777980] font-medium mt-3">
        {interval}
      </span>
      <p className="font-sans text-lg font-medium text-primary mt-3">
        {description}
      </p>
      <ul className="space-y-3 flex-1 mt-6">
        {features.map((feat, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3.5 text-[#4A4C56] pb-3 border-b"
          >
            <span className="size-6">
              <CheckMark />
            </span>
            <span className="leading-tight pt-0.5">{feat}</span>
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        onClick={onButtonClick}
        className="mt-8 bg-[#F4F3F1]"
      >
        {buttonText}
      </Button>
    </div>
  );
}
