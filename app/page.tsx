import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { JourneyServices } from "@/components/journey-services"
import { ProcessSteps } from "@/components/process-steps"
import { ProjectShowcase } from "@/components/project-showcase"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustBar />
      <JourneyServices />
      <ProcessSteps />
      <ProjectShowcase />
      <Testimonials />
      <ContactSection />
    </main>
  )
}
