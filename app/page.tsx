import Hero from "@/components/sections/Hero";
import MetricsBar from "@/components/sections/MetricsBar";
import PartnerStrip from "@/components/sections/PartnerStrip";
import AccredianEdge from "@/components/sections/AccredianEdge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import CATFramework from "@/components/sections/CATFramework";
import DeliveryProcess from "@/components/sections/DeliveryProcess";
import FaqAccordion from "@/components/sections/FaqAccordion";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />
      <MetricsBar />
      <PartnerStrip />
      <AccredianEdge />
      <DomainExpertise />
      <CATFramework />
      <DeliveryProcess />
      <FaqAccordion />
      <Testimonials />
      <CtaBanner />
      <ContactForm />
    </div>
  );
}
