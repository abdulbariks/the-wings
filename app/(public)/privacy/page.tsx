"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Heading from "@/components/ui/Heading";
import PrivacyTabs from "@/components/client/Privacy/PrivacyTabs";
import PrivacyContents from "@/components/client/Privacy/PrivacyContents";
import PointsOfPrivacyPolicy, {
  privacySections,
} from "@/components/client/Privacy/PointsOfPrivacyPolicy";
import PointsOfTermsOfService, {
  termsSections,
} from "@/components/client/Privacy/PointsOfTermsOfService";

export default function PrivacyPage() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");
  const [displayTab, setDisplayTab] = useState<"privacy" | "terms">("privacy");
  const [isPending, setIsPending] = useState(false);
  const [activeSectionId, setActiveSectionId] =
    useState<string>("privacy-collect");

  // Dynamic Document Title based on Active Tab
  useEffect(() => {
    document.title =
      activeTab === "privacy"
        ? "Privacy Policy | The Wings"
        : "Terms of Service | The Wings";
  }, [activeTab]);

  // Tab switching with fade transition and scroll reset
  const handleTabChange = (tab: "privacy" | "terms") => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setIsPending(true);

    setTimeout(() => {
      setDisplayTab(tab);
      const defaultSection =
        tab === "privacy" ? privacySections[0].id : termsSections[0].id;
      setActiveSectionId(defaultSection);
      setIsPending(false);

      // Scroll window to content container top
      const container = document.getElementById("legal-content-container");
      if (container) {
        window.scrollTo({
          top: container.offsetTop - 140,
          behavior: "auto",
        });
      }
    }, 200);
  };

  const handleSectionClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      setActiveSectionId(id);

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - 140;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  // Binds empty refs to Points subcomponents to maintain prop compatibility
  const emptySectionRefs = useRef<Record<string, HTMLElement | null>>({});

  return (
    <section className="bg-white padding-default">
      <div className="container" id="legal-content-container">
        {/* Page Title */}
        <Heading>
          <Heading.Badge>Legal</Heading.Badge>
          <Heading.Title>
            {activeTab === "privacy" ? (
              <>
                Privacy <i>Policy</i>
              </>
            ) : (
              <>
                Terms of <i>Service</i>
              </>
            )}
          </Heading.Title>
          <Heading.Subtitle>
            The Wings is built on discretion. Careers are private, interest is
            private and the way your information is handled reflects that
          </Heading.Subtitle>
        </Heading>

        {/* Horizontal Tabs Switcher */}
        <div className="max-w-2xl mx-auto mb-12 md:mb-16">
          <PrivacyTabs activeTab={activeTab} onChange={handleTabChange} />
        </div>

        {/* Sidebar Nav & Contents Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Sticky Contents Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3.5 sticky top-28 select-none hidden lg:block">
            <PrivacyContents
              items={activeTab === "privacy" ? privacySections : termsSections}
              activeId={activeSectionId}
              onItemClick={handleSectionClick}
            />
          </aside>

          {/* Right: Content Points */}
          <div
            className={cn(
              "lg:col-span-8 xl:col-span-8.5 transition-all duration-200 ease-in-out",
              isPending
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0",
            )}
          >
            {displayTab === "privacy" ? (
              <PointsOfPrivacyPolicy sectionRefs={emptySectionRefs} />
            ) : (
              <PointsOfTermsOfService sectionRefs={emptySectionRefs} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
