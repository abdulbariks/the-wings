import Banner from "@/components/client/Home/Banner/Banner";
import ForCompany from "@/components/client/Home/ForCompany/ForCompany";
import ForDancers from "@/components/client/Home/ForDancers/ForDancers";
import HowItWorks from "@/components/client/Home/HowItWorks/HowItWorks";
import TrustedBy from "@/components/client/Home/TrustedBy/TrustedBy";

export default function Home() {
  return (
   <div>
    <Banner/>
    <TrustedBy/>
    <ForDancers/>
    <ForCompany/>
    <HowItWorks/>
   </div> 
  );
}
