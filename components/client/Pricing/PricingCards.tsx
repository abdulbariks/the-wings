"use client";

import React from "react";
import { cn } from "@/lib/utils";
import PricingCard from "./PricingCard";

interface PricingCardsProps {
  activeTab: "dancer" | "company";
  isPending: boolean;
  displayTab: "dancer" | "company";
}

const dancerPlans = [
  {
    title: "Dancer - Active profile",
    price: "$12",
    interval: "Per month",
    description: "Visible for as long as you need it.",
    features: [
      "Full portfolio: photo and video guideline",
      "Resume, repertoire, training and awards",
      "Discoverable by all verified companies",
      "Five application each month",
      "Green Light matching and messaging",
      "Early access to new features",
    ],
    buttonText: "Create a profile",
  },
  {
    title: "Dancer - Active profile - full year",
    price: "$100",
    interval: "Per yearly",
    description: "Save compared to monthly. Stay visible all season, every season.",
    features: [
      "Full portfolio: photo and video guideline",
      "Resume, repertoire, training and awards",
      "Discoverable by all verified companies",
      "Five application each month",
      "Green Light matching and messaging",
      "Early access to new features",
    ],
    buttonText: "Create a profile",
  },
];

const companyPlans = [
  {
    title: "Companies & Directors",
    price: "Free",
    interval: "Always, no seat count",
    description:
      "Every artistic director, ballet master and casting lead. No subscription, no seat count, no trial clock",
    features: [
      "Unlimited reviewers on one workspace",
      "Advanced search and filtering",
      "Personal and shared shortlists",
      "Notes, comparison and consensus tools",
      "Unlimited audition invitations",
      "Custom contract templates and forms",
    ],
    buttonText: "Open a workspace",
  },
];

export default function PricingCards({
  activeTab,
  isPending,
  displayTab,
}: PricingCardsProps) {
  const isDancer = displayTab === "dancer";
  const activePlans = isDancer ? dancerPlans : companyPlans;

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto w-full transition-all duration-300 ease-in-out",
        isPending ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0",
      )}
    >
      {activePlans.map((plan, idx) => (
        <div key={idx} className="w-full max-w-md flex flex-col">
          <PricingCard plan={plan} />
        </div>
      ))}
    </div>
  );
}
