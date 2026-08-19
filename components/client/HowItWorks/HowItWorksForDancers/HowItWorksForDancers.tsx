import Heading from "@/components/ui/Heading";
import Image from "next/image";
const points = [
  {
    title: "Build one living profile",
    description:
      "Reels, photographs, resume, repertoire, training lineage, measurements and availability assembled once, kept current.",
  },
  {
    title: "Set your terms",
    description:
      "Choose which companies may see you, which contracts interest you and where in the world you are willing to dance.",
  },
  {
    title: "Apply or be found",
    description:
      "Answer open castings in a few taps, or simply let verified directors discover you while you work.",
  },
  {
    title: "Say yes",
    description:
      "When a company signals interest,  a single yes from you opens the thread. Nothing before that.",
  },
];
const HowItWorksForDancers = () => {
  return (
    <section className="bg-[#F4F3F1] padding-default">
      <div className="container flex flex-col-reverse lg:flex-row gap-8 md:gap-10 lg:gap-12">
        <div className="relative w-full overflow-hidden h-full">
          <Image
            src="/images/how-it-works/how-for-dancers.png"
            alt="Pricing Plan - Ballet Pointe Shoes"
            className="flex-1 w-full"
            width={636}
            height={436}
          />
        </div>
        <div>
          <Heading className="items-center text-center mx-auto lg:items-start lg:text-left lg:ml-0 lg:mr-auto">
            <Heading.Badge>For Dancers</Heading.Badge>

            <Heading.Title className="text-primary max-w-xl">
              Four steps to being <i>seen by the</i> right room.
            </Heading.Title>
          </Heading>
          <div className="p-4 bg-white border">
            {points.map((point, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between ${idx === 0 ? "bg-[#0F0D0B]" : "bg-white"} px-3 py-5 `}
              >
                <div>
                  <h5
                    className={`text-2xl font-semibold font-serif ${idx === 0 ? "text-white" : "text-primary"}`}
                  >
                    {point.title}
                  </h5>
                  <p
                    className={` ${idx === 0 ? "text-[#777980]" : "text-[#777980]"} mt-4`}
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksForDancers;
