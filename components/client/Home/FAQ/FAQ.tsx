import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <section className="bg-[#F4F3F1] padding-default">
      <div className="container">
        <Heading>
          <Heading.Badge>FAQ</Heading.Badge>

          <Heading.Title className="text-primary max-w-xl">
            Frequently Asked Questions
          </Heading.Title>
        </Heading>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* left side */}
          <div className="relative w-full overflow-hidden min-h-100 md:min-h-185 lg:min-h-150 xl:min-h-172 lg:h-full">
            <Image
              src="/images/faq-img.png"
              alt="Pricing Plan - Ballet Pointe Shoes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale"
            />
          </div>
          {/* right side */}
          <div className="flex flex-col justify-center">
            <FAQAccordion />
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 md:mt-10 lg:mt-12">
          <Button
            variant="outline"
            className="h-14 px-8 text-sm uppercase bg-transparent border-black hover:bg-black/5 text-black rounded-none font-medium"
          >
            View All FAQS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
