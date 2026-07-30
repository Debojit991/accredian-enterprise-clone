import Hero from "@/components/sections/Hero";
import MetricsBar from "@/components/sections/MetricsBar";
import PartnerStrip from "@/components/sections/PartnerStrip";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MetricsBar />
      <PartnerStrip />
    </div>
  );
}
