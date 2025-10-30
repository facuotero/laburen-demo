import { HeroSection } from "@/components/sections/HeroSection"
import AgentsSection from "@/components/sections/AgentSection"
import ContentSection from "@/components/sections/ContentSection"
import Testimonials from "@/components/sections/Testimonials"
import EnterpriseCtaSection from "@/components/sections/EnterpriseCtaSection"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white antialiased">
      <HeroSection />
      <AgentsSection />
      <ContentSection />
      <Testimonials />
      <EnterpriseCtaSection />
    </main>
  )
}