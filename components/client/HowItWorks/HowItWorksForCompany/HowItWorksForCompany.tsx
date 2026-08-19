import Heading from "@/components/ui/Heading";
import HowItWorksCard from "./HowItWorksCard";

const companySteps = [
  {
    image: "/images/how-it-works/open-workspace.png",
    title: "Open a Workspace",
    desc: "Free, permanently. Invite every reviewer on your artistic staff - no seat limits, no subscription.",
    isDark: true,
  },
  {
    image: "/images/how-it-works/search-with-intent.png",
    title: "Search with intent",
    desc: "Filter by role, height, technique, repertoire, visa status and availability instead of scrolling an inbox.",
    isDark: false,
  },
  {
    image: "/images/how-it-works/shortlist-privately.png",
    title: "Shortlist privately",
    desc: "Each reviewer keeps a personal list and notes, then promotes dancers into the shared list when convinced.",
    isDark: false,
  },
];

const HowItWorksForCompany = () => {
  return (
    <section className="bg-white padding-default">
      <div className="container">
        <Heading>
          <Heading.Badge>For Companies</Heading.Badge>
          <Heading.Title>
            Cast a season without wading through noise.
          </Heading.Title>
          <Heading.Subtitle className="text-[#4A4C56] max-w-2xl mt-4">
            Keep one profile that carries everything a director asks for reels,
            repertoire, training, availability. Apply to open contracts in a few
            taps and let companies come to you when your work fits their
            season.{" "}
          </Heading.Subtitle>
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companySteps.map((step, idx) => (
            <HowItWorksCard key={idx} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksForCompany;
