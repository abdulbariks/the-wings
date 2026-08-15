import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import React from "react";

const ForDancers = () => {
  const points = [
    "A living profile, updated once and seen everywhere",
    "Find short term contracts that fit your schedule",
    "Companies contact you when they are interested",
  ];
  return (
    <section className="container padding-default-bottom grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
      <div>
        {" "}
        <Heading className="items-center text-center mx-auto lg:items-start lg:text-left lg:ml-0 lg:mr-auto">
          <Heading.Badge>For Dancers</Heading.Badge>

          <Heading.Title>
            Be in the right place, at the right time
          </Heading.Title>

          <Heading.Subtitle>
            A smarter approach to auditions. Showcase your unique artistry,
            experience, and strengths—and discover opportunities where
            you&apos;re truly the right fit.
          </Heading.Subtitle>
        </Heading>
        <ul className="text-xl lg:text-2xl">
          {points.map((point) => (
            <li key={point} className="relative border-b pb-8 pt-4 pl-7">
              <span className="absolute left-1 top-2/5 size-2 -translate-y-1/2 rounded-full bg-current" />
              {point}
            </li>
          ))}
        </ul>
        <div className="w-full flex items-center justify-center lg:justify-start">
        <Button className="mt-8 md:mt-10 lg:mt-12">Create A Profile</Button>
        </div>
      </div>
       <div
    className="min-h-125 w-full bg-cover bg-center bg-no-repeat lg:min-h-full"
    style={{
      backgroundImage: "url('/images/for-dancers.png')",
    }}
  />
    </section>
  );
};

export default ForDancers;
