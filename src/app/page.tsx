import { HeroSection } from "@/components/sections/HeroSection"
import AgentsSection from "@/components/sections/AgentSection"
import ContentSection from "@/components/sections/ContentSection"
import Testimonials from "@/components/sections/Testimonials"
import HeroCta from "@/components/sections/HeroCta"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white text-white antialiased">
      <HeroSection />
      <AgentsSection />
      <ContentSection />
      <Testimonials />
      <HeroCta />
    </main>
  )
}