import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { VirtualWalkthroughCTA } from "@/components/virtual-walkthrough-cta"
import { ThemeCatalogPreview } from "@/components/theme-catalog-preview"
import { BudgetEstimatorPreview } from "@/components/budget-estimator-preview"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <VirtualWalkthroughCTA />
      <ThemeCatalogPreview />
      <BudgetEstimatorPreview />
      <ContactSection />
    </main>
  )
}
