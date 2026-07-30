import Hero from "@/components/sections/Hero";
import MetricsBar from "@/components/sections/MetricsBar";
import PartnerStrip from "@/components/sections/PartnerStrip";
import CapabilitiesGrid from "@/components/sections/CapabilitiesGrid";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MetricsBar />
      <PartnerStrip />
      <CapabilitiesGrid />
      <Testimonials />
    </div>
  );
}
