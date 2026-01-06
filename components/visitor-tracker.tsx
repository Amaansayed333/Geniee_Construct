"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function VisitorTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page visit
    const trackVisit = async () => {
      try {
        await fetch("/api/visitor-tracking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: pathname,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
          }),
        })
      } catch (error) {
        console.error("[v0] Failed to track visitor:", error)
      }
    }

    trackVisit()
  }, [pathname])

  return null // This component doesn't render anything
}
