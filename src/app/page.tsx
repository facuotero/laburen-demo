import { Navbar } from "@/components/shared/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import AgentsSection from "@/components/sections/AgentSection"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white antialiased">
      {/* Navbar siempre fijo en el top */}
      <Navbar />

      {/* Hero principal */}
      <HeroSection />

      {/* Próximas secciones (About, Features, etc.) */}
      {/* <AboutSection /> */}
      {/* <FeaturesSection /> */}
      {/* <FAQSection /> */}
      {/* <FooterSection /> */}
      <AgentsSection />
    </main>
  )
}