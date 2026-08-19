import Banner from "@/components/client/Home/Banner/Banner";
import FAQ from "@/components/client/Home/FAQ/FAQ";
import ForCompany from "@/components/client/Home/ForCompany/ForCompany";
import ForDancers from "@/components/client/Home/ForDancers/ForDancers";
import HowItWorksSection from "@/components/client/Home/HowItWorks/HowItWorks";
import PricingPlan from "@/components/client/Home/PricingPlan/PricingPlan";
import TrustedBy from "@/components/client/Home/TrustedBy/TrustedBy";

export default function Home() {
  return (
    <div>
      <Banner />
      <TrustedBy />
      <ForDancers />
      <ForCompany />
      <HowItWorksSection />
      <PricingPlan />
      <FAQ />
    </div>
  );
}
