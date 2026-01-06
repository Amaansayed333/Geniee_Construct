import { WalkthroughExperience } from "@/components/walkthrough-experience"

export const metadata = {
  title: "3D Virtual Walkthrough - BuildVerse",
  description: "Experience immersive 3D virtual tours of fully furnished homes with first-person controls.",
}

export default function WalkthroughPage() {
  return (
    <main className="h-screen bg-white">
      <WalkthroughExperience />
    </main>
  )
}
