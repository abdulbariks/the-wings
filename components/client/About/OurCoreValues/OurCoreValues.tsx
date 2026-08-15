"use client";

import Heading from "@/components/ui/Heading";

const OurCoreValues = () => {
  return (
    <section className="container padding-default">
      <Heading className="items-center text-center mx-auto md:items-end md:text-right md:ml-auto md:mr-0 lg:items-start lg:text-left lg:ml-0 lg:mr-auto">
        <Heading.Badge>Our Core Values</Heading.Badge>

        <Heading.Title>Four principles that guide every decision</Heading.Title>

        <Heading.Subtitle>
          We aim to structure casting through profiles, collaborative
          workspaces, and a matching system that fosters mutual interest and
          respect.
        </Heading.Subtitle>
      </Heading>
    </section>
  );
};

export default OurCoreValues;
