import { ShiftingBooking } from "@/components/shifting-booking"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Shifting Services - Smartgeniee",
  description: "Book trusted shifting and relocation services with transparent quotes.",
}

export default function ShiftingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ShiftingBooking />
    </main>
  )
}
