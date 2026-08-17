"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is a Green Light?",
    answer:
      "A green light is a private signal of interest. Dancers are able to see clear stats about company contracts, salaries, and repertoire before expressing interest. When you send a green light, you enter the company‘s dashboard of interested candidates. When there‘s mutual interest you enter into direct communication with artistic staff. No more wondering what happened to your email.",
  },
  {
    question: "Who can join The Wings?",
    answer:
      "The Wings is designed for professional dancers, companies, choreographers, and advanced students transitioning into their professional careers. All accounts are verified to maintain a secure and professional community.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Setting up a profile and browsing basic info is free. We offer premium memberships with features like unlimited Green Lights, priority review, and season pipelined boards. Check our pricing section for detailed plans.",
  },
  {
    question: "How is my profile kept private?",
    answer:
      "Your profile is private by default and only visible to verified artistic directors and companies on our platform. It will not appear on public search engines, and you choose when to signal interest.",
  },
  {
    question: "Do you offer visa or travel support?",
    answer:
      "While The Wings doesn't directly sponsor visas or travel, many participating companies provide visa sponsorship and travel assistance. These details are clearly listed in the company profile and contract terms before you express interest.",
  },
  {
    question: "What benefits do members receive?",
    answer:
      "Members get priority visibility to top directors, unlimited Green Lights, access to exclusive season planning tools, direct messaging with artistic staff, and invitations to member-only auditions and networking events.",
  },
  {
    question: "Can I upgrade or downgrade my membership plan?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your membership at any time from your account settings. Upgrades take effect immediately, while downgrades or cancellations will apply at the end of the current billing cycle.",
  },
  {
    question: "Are there networking events exclusive to members?",
    answer:
      "Yes, we host regular virtual roundtables and in-person networking events where members can connect directly with artistic directors, choreographers, and peers from around the world.",
  },
  {
    question: "How do I reset my password if I forget it?",
    answer:
      "Click the 'Forgot Password' link on the login page and enter your email address. We will send you a secure link to reset your password and recover access to your account.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={cn(
              "transition-all duration-300 ease-in-out cursor-pointer select-none px-5 md:px-6 py-5 md:py-6",
              isOpen
                ? "bg-primary text-[#F4F3F1] my-2 first:mt-0 last:mb-0"
                : "border-b border-[#0F0D0B]/10 text-[#0F0D0B] hover:text-[#0f0d0b]/70",
            )}
          >
            <div className="flex justify-between items-center gap-4">
              <h4 className="font-serif text-lg md:text-xl font-medium tracking-wide">
                {faq.question}
              </h4>
              <span className="shrink-0 transition-transform duration-300">
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                )}
              </span>
            </div>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "text-sm md:text-base leading-relaxed font-sans",
                    isOpen ? "text-[#D2D2D5]" : "text-primary",
                  )}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
