import { CheckMark } from "@/components/icons/CheckMark";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5 text-[#0F0D0B] shrink-0"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const PricingPlan = () => {
  const features = [
    "Unlimited Green Lights",
    "Season pipelined board",
    "Priority artistic review",
    "Concierge support",
  ];

  return (
    <section className="bg-white padding-default">
      <div className="container grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        <div className="flex flex-col">
          <Heading className="items-center text-center mx-auto lg:items-start lg:text-left lg:ml-0 lg:mr-auto pb-4">
            <Heading.Badge>Pricing Plan</Heading.Badge>

            <Heading.Title className="text-primary max-w-xl">
              A stage side pass <i>to the world&apos;s</i> leading companies
            </Heading.Title>

            <Heading.Subtitle className="text-[#4A4C56] max-w-lg mt-3">
              Priority visibility, unlimited Green Lights, Private concierge and
              season planning tools.
            </Heading.Subtitle>
          </Heading>

          <ul className="space-y-3.5 self-center lg:self-start">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-[#4A4C56]  text-sm md:text-base"
              >
                <CheckMark />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 lg:mt-10 xl:mt-12 justify-center lg:justify-start">
            <Button className="h-14 px-8 text-sm uppercase rounded-none font-medium">
              See Plans
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 text-sm uppercase border-black hover:bg-black/5 text-black rounded-none font-medium"
            >
              Talk to us
            </Button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden h-full">
          <Image
            src="/images/pricing-plan.png"
            alt="Pricing Plan - Ballet Pointe Shoes"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
