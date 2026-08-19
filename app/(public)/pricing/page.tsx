"use client";

import React, { useState, useEffect } from "react";
import Heading from "@/components/ui/Heading";
import PricingTabs from "@/components/client/Pricing/PricingTabs";
import PricingCards from "@/components/client/Pricing/PricingCards";
import PricingHighlights from "@/components/client/Pricing/PricingHighlights";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"dancer" | "company">("dancer");
  const [displayTab, setDisplayTab] = useState<"dancer" | "company">("dancer");
  const [isPending, setIsPending] = useState(false);

  // Dynamic document title update based on active tab
  useEffect(() => {
    document.title =
      activeTab === "dancer"
        ? "Dancer Pricing | The Wings"
        : "Company Workspace | The Wings";
  }, [activeTab]);

  const handleTabChange = (tab: "dancer" | "company") => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setIsPending(true);

    setTimeout(() => {
      setDisplayTab(tab);
      setIsPending(false);
    }, 200);
  };

  return (
    <section className="bg-white padding-default">
      <div className="container">
        {/* Switcher at the very top */}
        <div className="mb-10 select-none">
          <PricingTabs activeTab={activeTab} onChange={handleTabChange} />
        </div>

        {/* Dynamic Heading based on active tab */}
        <Heading className="pb-12 max-w-3xl">
          <Heading.Title className="text-primary font-bold">
            {activeTab === "dancer" ? (
              <>Get seen without chasing every casting call.</>
            ) : (
              <>Cast a season without wading through noise.</>
            )}
          </Heading.Title>
          <Heading.Subtitle className="text-[#4A4C56] max-w-2xl mt-4">
            {activeTab === "dancer"
              ? "One profile carries your reels, resume and availability. Apply in a few taps and let companies come to you."
              : "One workspace to search, shortlist and invite. Every verified dancer, discoverable. Companies and directors"}
          </Heading.Subtitle>
        </Heading>

        {/* Pricing Cards Column Layout */}
        <PricingCards
          activeTab={activeTab}
          isPending={isPending}
          displayTab={displayTab}
        />

        {/* Features Highlight Grid */}
        <PricingHighlights />
      </div>
    </section>
  );
}
