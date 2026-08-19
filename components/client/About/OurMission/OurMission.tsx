import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";

const OurMission = () => {
  return (
    <section
      className="padding-default bg-cover w-full bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/images/for-company.png')",
      }}
    >
      <div className="max-w-330 mx-auto p-6 bg-[#F4F3F1] grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
        <div
          className="min-h-125 w-full bg-cover bg-center bg-no-repeat lg:min-h-full "
          style={{
            backgroundImage: "url('/images/about-us/our-mission.png')",
          }}
        />
        <div>
          {" "}
          <Heading className="items-center text-center mx-auto lg:items-start lg:text-left lg:ml-0 lg:mr-auto">
            <Heading.Badge>Our Mission</Heading.Badge>

            <Heading.Title>
              A holistic approach to evaluating and hiring dancers
            </Heading.Title>

            <Heading.Subtitle>
              The Wings bridges the gap between dancers and ballet companies
              through a hiring platform designed specifically for the needs of
              our art form. We are committed to making the audition process more
              transparent, more efficient, and more human—helping dancers
              showcase their artistry and helping companies discover the talent
              that best fits their vision.
            </Heading.Subtitle>
          </Heading>
          <div className="py-3 px-4 border-l-4 border-primary lg:text-lg text-[#4A4C56] bg-white">
            <i>
              {" "}
              "In the world of dance, we blend tradition with innovation,
              crafting a platform where every artist's journey is valued, and
              connections are made with intention and respect."
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurMission;
