import Heading from "@/components/ui/Heading";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="bg-white padding-default">
      <div className="container grid lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col">
          <Heading className="items-center text-center mx-auto lg:items-start lg:text-left lg:ml-0 lg:mr-auto lg:pt-12">
            <Heading.Badge>How It Works</Heading.Badge>

            <Heading.Title className="text-primary max-w-xl">
              A graceful path <i>from first look to first plie.</i>
            </Heading.Title>

            <Heading.Subtitle className="text-[#4A4C56] max-w-lg mt-3">
              The Wings replaces the unread inbox with a quiet, deliberate
              process. Dancers keep one profile.
            </Heading.Subtitle>
          </Heading>
        </div>

        <div className="relative w-full overflow-hidden h-full">
          <Image
            src="/images/how-it-works/how-it-works.jpg"
            alt="Pricing Plan - Ballet Pointe Shoes"
            className="w-full"
            width={636}
            height={436}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
