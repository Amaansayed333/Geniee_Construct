import { BudgetEstimator } from "@/components/budget-estimator"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Smart Budget Estimator - BuildVerse",
  description: "Get instant, transparent cost estimates for your construction or renovation project.",
}

export default function EstimatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <BudgetEstimator />
    </main>
  )
}
