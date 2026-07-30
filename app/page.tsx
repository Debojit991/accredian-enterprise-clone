import Hero from "@/components/sections/Hero";
import MetricsBar from "@/components/sections/MetricsBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MetricsBar />
    </div>
  );
}
