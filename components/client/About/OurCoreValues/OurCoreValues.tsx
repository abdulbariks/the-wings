"use client";

import Heading from "@/components/ui/Heading";
import Image from "next/image";
const points = [
  {
    title: "Care over reach",
    description:
      "We prefer a quiet, verified community over an  open marketplace.",
  },
  {
    title: "Consent by design ",
    description:
      "The Green Light ensures mutual interest before any contact is made.",
  },
  {
    title: "Craft over noise",
    description: "Every component must contribute; if not, it’s left behind",
  },
  {
    title: "Global, not generic",
    description: "62 countries, 14 languages, one shared respect for tradition",
  },
];

const OurCoreValues = () => {
  return (
    <section className="bg-[#F4F3F1]">
      <div className="container padding-default">
        <Heading>
          <Heading.Badge>Our Core Values</Heading.Badge>
          <Heading.Title>
            Four principles that guide every decision
          </Heading.Title>
          <Heading.Subtitle>
            We aim to structure casting through profiles, collaborative
            workspaces, and a matching system that fosters mutual interest and
            respect.
          </Heading.Subtitle>
        </Heading>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* left */}
          <div className="space-y-4">
            {points.map((point, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between gap-6 ${idx === 0 ? "bg-[#0F0D0B]" : "bg-white"} px-5 py-6 `}
              >
                <div>
                  <h5
                    className={`text-2xl font-serif ${idx === 0 ? "text-white" : "text-primary"} mt-2`}
                  >
                    {point.title}
                  </h5>
                  <p
                    className={` ${idx === 0 ? "text-[#777980]" : "text-[#777980]"} mt-1`}
                  >
                    {point.description}
                  </p>
                </div>
                <p
                  className={`text-2xl md:text-3xl lg:text-[2.5rem] font-semibold ${idx === 0 ? "text-[#666565]" : "text-[#D2D2D5]"} text-right`}
                >
                  0{idx + 1}
                </p>
              </div>
            ))}
          </div>
          {/* right */}
          <div className="relative w-full overflow-hidden  min-h-50 md:min-h-120 lg:h-fit p-5 bg-white">
            <Image
              src="/images/about-us/out-core-values.png"
              alt="Pricing Plan - Ballet Pointe Shoes"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale w-full"
              width={608}
              height={408}
            />
            <p className="pt-6 md:text-lg text-[#5C594F]">
              <i>
                “We believe every dancer deserves equal opportunities to learn,
                perform, and grow, regardless of their background or
                experience.”
              </i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;
