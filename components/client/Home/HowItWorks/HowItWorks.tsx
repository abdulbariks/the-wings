import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

const steps = [
  {
    title: "Create your profile",
    description:
      "Resume, training, photos, reels, and a chance to show your personality",
    imageSrc: "/images/how-it-works/1.jpg",
  },
  {
    title: "Be seen privately",
    description:
      "Directors browse and shortlist. Nothing is public, nothing is broadcast.",
    imageSrc: "/images/how-it-works/2.jpg",
  },
  {
    title: "Send a green light",
    description:
      "When a company is looking for someone with your credentials, you get seen.",
    imageSrc: "/images/how-it-works/3.jpg",
  },
  {
    title: "Stand in the studio",
    description:
      "Audition invitations happen based on careful selection and mutual interest, allowing you to walk into the studio with confidence",
    imageSrc: "/images/how-it-works/4.jpg",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0F0D0B] padding-default">
      <div className="container">
        <Heading className="text-center mx-auto items-center">
          <Heading.Badge className="bg-white border-none text-[#0F0D0B]">
            How It Works
          </Heading.Badge>

          <Heading.Title className="text-white max-w-3xl">
            A smooth journey from first glance to first plié.
          </Heading.Title>

          <Heading.Subtitle className="text-[#D2D2D5] max-w-xl">
            How one profile leads you into the next step of your career
          </Heading.Subtitle>
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {steps.map((step, idx) => {
            const isImageTop = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="bg-white p-2.5 flex flex-col h-full shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`flex flex-col h-full ${
                    isImageTop ? "" : "flex-col-reverse"
                  }`}
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-4/5 w-full overflow-hidden">
                    <Image
                      src={step.imageSrc}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Text content wrapper */}
                  <div className="bg-[#F4F3F1] p-6 flex-1">
                    <div className="text-right text-[#D2D2D5] text-2xl font-bold font-sans leading-none">
                      0{idx + 1}
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold text-primary font-serif">
                        {step.title}
                      </h5>
                      <p className="text-[#4A4C56] mt-2 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
