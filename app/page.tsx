import Capabilities from "@/components/Capabilites";
import GetStartedSection from "@/components/Cards";
import Hero from "@/components/Hero";
import TechStackSection from "@/components/Stack";

export default function Home() {
  return (
   <div className="min-h-screen">
    <Hero/>
    <Capabilities/>
    <GetStartedSection/>
    <TechStackSection/>
   </div>
  );
}
