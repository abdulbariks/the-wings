import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import React from "react";

const points = [
  {
    title: "All candidates in one place",
    description:
      "Every applicant. reel and résumé collected in a single season workspace.",
  },
  {
    title: "Hours back each week",
    description:
      "No inbox archaeology. Shortlists build themselves as your staff reviews.",
  },
  {
    title: "Organised by season",
    description:
      " Roles, rounds and notes stay structured from first call to contract.",
  },
  {
    title: "Simple by design",
    description:
      "Your whole artistic staff can review and agree without a tutorial.",
  },
];

const ForCompany = () => {
  return (
    <section className="bg-[#F4F3F1] padding-default">
      <div className="container  grid lg:grid-cols-2 ">
        <div
          className="border bg-cover w-full bg-center bg-no-repeat  p-4 mb-8 md:mb-10 lg:mb-12"
          style={{
            backgroundImage: "url('/images/for-company.png')",
          }}
        >
          <div className="grid md:grid-cols-2 gap-2 pt-25 lg:pt-35">
            {points.map((point, idx) => (
              <div
                key={idx}
                className={`${idx === 0 ? "bg-[#0F0D0B]" : "bg-white"} p-6 `}
              >
                <p
                  className={`text-2xl font-semibold ${idx === 0 ? "text-[#666565]" : "text-[#D2D2D5]"} text-right`}
                >
                  0{idx + 1}
                </p>
                <h5
                  className={`text-2xl font-medium font-serif ${idx === 0 ? "text-white" : "text-primary"} mt-2`}
                >
                  {point.title}
                </h5>
                <p
                  className={` font-medium ${idx === 0 ? "text-[#777980]" : "text-[#777980]"} mt-1`}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="row-start-1 lg:col-start-2 lg:pl-10 xl:pl-12">
          {" "}
          <Heading className="items-center text-center mx-auto lg:items-start lg:text-left lg:ml-0 lg:mr-auto">
            <Heading.Badge>For Company</Heading.Badge>

            <Heading.Title>
              Every candidate, in one place and hours back in your week.
            </Heading.Title>

            <Heading.Subtitle>
              Artistic directors and their review teams never pay a
              subscription. Company workspaces are open, permanently every
              reviewer keeps a private shortlist andnotes, then promotes dancers
              to the shared conversation when they’re ready.
            </Heading.Subtitle>
          </Heading>
          <div className="w-full flex items-center justify-center lg:justify-start pb-8 md:pb-10 lg:pb-12">
            <Button>Create A Profile</Button>
          </div>
        </div>
        {/* footer */}
        <div className="col-span-full p-6 bg-white">
          <div className="grid lg:grid-cols-2 gap-4 w-full">
            <h4 className="text-[2rem] text-pirmary font-serif">
              Interest has to be mutual
            </h4>
            <p className="text-[#4A4C56] lg:text-lg">
              Nobody is cold messaged. A conversation only opens when a dancer
              and a company have each signaled interest.
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="px-4 py-3 bg-[#F4F3F1] flex items-center justify-between">
              <div>
                <h6 className="text-xl text-[#0F0D0B] font-serif">
                  Sofia Marin
                </h6>
                <p className="text-[#4A4C56] mt-2">Principal - Madrid</p>
              </div>
              <Button className="h-10">Yes</Button>
            </div>
            <div className="px-4 py-3 bg-[#F4F3F1] flex items-center justify-between">
              <div>
                <h6 className="text-xl text-[#0F0D0B] font-serif">
                  Sofia Marin
                </h6>
                <p className="text-[#4A4C56] mt-2">Principal - Madrid</p>
              </div>
              <Button className="h-10">Yes</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCompany;
