import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
const stats = [
  {
    title: "Verified Dancers",
    value: "12,400",
  },
  {
    title: "Partner Companies",
    value: "480",
  },
  {
    title: "COUNTRIES",
    value: "62",
  },
];
const AboutUs = () => {
  return (
    <section className="bg-white padding-default">
      <div className="container grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        <div className="flex flex-col">
          <Heading className="items-center text-center mx-auto lg:items-start lg:text-left lg:ml-0 lg:mr-auto pb-4">
            <Heading.Badge>About Us</Heading.Badge>

            <Heading.Title className="text-primary max-w-xl">
              Built in the wings, <i>for the people who live there</i>
            </Heading.Title>

            <Heading.Subtitle className="text-[#4A4C56] max-w-lg mt-3">
              The Wings is a professional networking and casting platform made
              only for ballet and concert dance.{" "}
            </Heading.Subtitle>
          </Heading>

          <div className="relative w-full overflow-hidden  h-50 md:h-120 lg:hidden">
            <Image
              src="/images/about-us/about-us.png"
              alt="Pricing Plan - Ballet Pointe Shoes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale"
            />
          </div>

          <div className="grid md:grid-cols-3 mt-8 lg:mt-10 xl:mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-3">
                <span className="font-serif text-2xl md:text-3xl  font-semibold text-primary">
                  {stat.value}
                </span>
                <span className="font-sans text-xs md:text-sm text-[#777980] uppercase font-semibold mt-3">
                  {stat.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full overflow-hidden h-full">
          <Image
            src="/images/about-us/about-us.png"
            alt="Pricing Plan - Ballet Pointe Shoes"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
