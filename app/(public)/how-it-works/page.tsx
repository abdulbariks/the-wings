import HowItWorksForCompany from "@/components/client/HowItWorks/HowItWorksForCompany/HowItWorksForCompany";
import HowItWorksForDancers from "@/components/client/HowItWorks/HowItWorksForDancers/HowItWorksForDancers";
import HowItWorks from "@/components/client/HowItWorks/HowItWorksPage/HowItWorks";

const HowItWorksPage = () => {
  return (
    <div>
      <HowItWorks />
      <HowItWorksForDancers />
      <HowItWorksForCompany />
    </div>
  );
};
export default HowItWorksPage;
