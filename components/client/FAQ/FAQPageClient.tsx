"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Heading from "@/components/ui/Heading";
import NoResultFound from "@/components/ui/NoResultFound";
import SearchInput from "@/components/ui/SearchInput";

const faqData = [
  {
    section: "The platform",
    id: "platform",
    items: [
      {
        question: "What is The Wings?",
        answer:
          "A private casting and networking platform made only for ballet and concert dance. Dancers keep one living profile; artistic staff review, shortlist and invite from a single workspace.",
      },
      {
        question: "Who can join?",
        answer:
          "The Wings is open to professional dancers, student dancers on a professional track, choreographers, artistic directors, and company administrators/casting teams.",
      },
      {
        question: "Is this a job board?",
        answer:
          "No. Unlike traditional job boards that broadcast public listings, The Wings is a private directory where companies search, filter, and shortlist dancers based on specific needs, sending private invitations.",
      },
    ],
  },
  {
    section: "Cost",
    id: "cost",
    items: [
      {
        question: "Do directors pay a subscription?",
        answer:
          "Never. Artistic directors, ballet masters and their whole review team use The Wings free, permanently. There is no seat limit and no trial period.",
      },
      {
        question: "How much does it cost dancers?",
        answer:
          "Dancers can create a basic profile and be discovered for free. Premium subscriptions are available for advanced features like unlimited Green Lights, priority review, and detailed season pipelined boards.",
      },
      {
        question: "Do you take a commission on contracts?",
        answer:
          "No, we never take commissions or fees on contracts secured through the platform. Any contract negotiations and payments occur directly between the dancer and the company.",
      },
    ],
  },
  {
    section: "Matching and privacy",
    id: "matching-privacy",
    items: [
      {
        question: "What is the Green Light?",
        answer:
          "A green light is a private signal of interest. Dancers are able to see clear stats about company contracts, salaries, and repertoire before expressing interest. When you send a green light, you enter the company's dashboard of interested candidates. When there's mutual interest you enter into direct communication with artistic staff. No more wondering what happened to your email.",
      },
      {
        question: "How is my profile kept private?",
        answer:
          "Your profile is not searchable on Google or visible to the public. Only verified directors and casting staff of active dance companies can view your profile and contact you.",
      },
      {
        question: "Are companies verified?",
        answer:
          "Yes. Every company and artistic director profile is manually verified by our team before they are allowed to search the directory or contact dancers.",
      },
    ],
  },
  {
    section: "Auditions",
    id: "auditions",
    items: [
      {
        question: "How do auditions work?",
        answer:
          "Companies attach audition details, dates and requirements to an invitation. Everything — scheduling, notes, offers — stays in one thread.",
      },
      {
        question: "Do you offer audition travel support?",
        answer:
          "Travel support options are specified within individual audition invitations or contract stats. Some companies offer travel stipends or cover audition expenses, which will be visible on their profiles.",
      },
      {
        question: "What should my profile include?",
        answer:
          "To stand out, your profile should feature your resume, training background, high-quality photos (headshots, dance shots), video reels showing repertoire or class work, and your upcoming availability.",
      },
    ],
  },
];

export default function FAQPageClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openStates, setOpenStates] = useState<Record<string, number | null>>({
    "The platform": 0,
    Cost: 0,
    "Matching and privacy": 0,
    Auditions: 0,
  });
  const [activeSection, setActiveSection] = useState<string>("platform");

  // Track sections for scroll spying
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of faqData) {
        const el = sectionRefs.current[section.id];
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAccordion = (sectionName: string, index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [sectionName]: prev[sectionName] === index ? null : index,
    }));
  };

  const handleCategoryClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 120,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  // Filter FAQs based on search query
  const filteredFaqData = faqData
    .map((sec) => {
      const filteredItems = sec.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      return {
        ...sec,
        items: filteredItems,
      };
    })
    .filter((sec) => sec.items.length > 0);

  return (
    <div className="bg-[#FAF9F6] min-h-screen padding-default">
      {/* Header section */}
      <div className="container text-center ">
        <Heading>
          <Heading.Badge>FAQ</Heading.Badge>
          <Heading.Title>Frequently Asked Questions</Heading.Title>
          <Heading.Subtitle>
            Everything dancers and artistic directors ask before stepping into
            the wings.
          </Heading.Subtitle>
        </Heading>

        {/* Search bar */}
        <div className="max-w-xl mx-auto">
          <SearchInput
            placeholder="Search The Questions"
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mt-8 md:mt-10 lg:mt-12">
        {filteredFaqData.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 lg:gap-20 items-start">
            {/* Left sidebar - Categories list */}
            <aside className="hidden lg:block sticky top-28 select-none">
              <div className="flex flex-col space-y-8">
                {filteredFaqData.map((sec) => (
                  <div key={sec.id} className="group">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-sans mb-1.5 font-semibold">
                      Section
                    </p>
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => handleCategoryClick(e, sec.id)}
                      className={cn(
                        "font-serif text-lg md:text-xl font-medium tracking-wide transition-colors leading-snug block",
                        activeSection === sec.id
                          ? "text-[#0F0D0B]"
                          : "text-neutral-400 hover:text-neutral-600",
                      )}
                    >
                      {sec.section}
                    </a>
                  </div>
                ))}
              </div>
            </aside>

            {/* Right side - Accordion list */}
            <div className="space-y-12 md:space-y-16">
              {filteredFaqData.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  ref={(el) => {
                    sectionRefs.current[sec.id] = el;
                  }}
                  className="scroll-mt-28"
                >
                  {/* Category label for mobile viewport */}
                  <div className="lg:hidden mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-sans font-bold">
                      Section: {sec.section}
                    </span>
                  </div>

                  {/* Accordion container block */}
                  <div className="bg-[#F4F3F1] border border-[#0F0D0B]/5 divide-y">
                    {sec.items.map((item, index) => {
                      const isOpen = openStates[sec.section] === index;
                      return (
                        <div
                          key={index}
                          className="transition-colors duration-300"
                        >
                          <button
                            onClick={() => toggleAccordion(sec.section, index)}
                            className="w-full text-left flex justify-between items-center py-6 px-6 md:px-8 cursor-pointer select-none gap-4"
                          >
                            <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-medium text-[#0F0D0B] tracking-wide">
                              {item.question}
                            </h3>
                            <span className="shrink-0 text-[#0F0D0B] transition-transform duration-300">
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
                          </button>

                          {/* Accordion expand/collapse transition */}
                          <div
                            className={cn(
                              "grid transition-all duration-300 ease-in-out px-6 md:px-8",
                              isOpen
                                ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-8"
                                : "grid-rows-[0fr] opacity-0",
                            )}
                          >
                            <div className="overflow-hidden">
                              <p className="font-sans text-sm md:text-base leading-relaxed text-[#4A4C56]">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        ) : (
          <NoResultFound
            title="No questions found"
            description={`We couldn't find any questions matching "${searchQuery}".`}
          />
        )}
      </div>
    </div>
  );
}
