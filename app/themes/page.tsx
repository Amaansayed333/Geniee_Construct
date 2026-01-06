import { ThemeCatalog } from "@/components/theme-catalog"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Renovation Themes - BuildVerse",
  description: "Explore 100+ professionally curated renovation styles with stunning 3D visualizations.",
}

export default function ThemesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ThemeCatalog />
    </main>
  )
}
