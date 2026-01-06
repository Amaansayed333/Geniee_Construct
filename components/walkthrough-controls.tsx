"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Info, Maximize, Minimize } from "lucide-react"
import Link from "next/link"

export function WalkthroughControls() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showInstructions, setShowInstructions] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructions(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 md:p-6 z-10">
        <div className="flex items-center justify-between">
          <Button asChild variant="outline" className="glass-panel bg-transparent">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="glass-panel bg-transparent"
              onClick={() => setShowInstructions(!showInstructions)}
            >
              <Info className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="glass-panel bg-transparent" onClick={toggleFullscreen}>
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Instructions Panel */}
      {showInstructions && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 max-w-md w-full px-4">
          <div className="glass-panel p-6 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Controls</h3>
              <button
                onClick={() => setShowInstructions(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="glass-panel px-3 py-1 rounded-md font-mono text-xs">Click</div>
                <span className="text-foreground">Enter first-person mode</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="glass-panel px-3 py-1 rounded-md font-mono text-xs">W A S D</div>
                <span className="text-foreground">Move around</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="glass-panel px-3 py-1 rounded-md font-mono text-xs">Mouse</div>
                <span className="text-foreground">Look around</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="glass-panel px-3 py-1 rounded-md font-mono text-xs">ESC</div>
                <span className="text-foreground">Exit first-person mode</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-2 border-t border-border">
              Explore different rooms: Entrance Hall, Living Room, Kitchen, and Bedroom
            </p>
          </div>
        </div>
      )}

      {/* Mobile Touch Controls Hint */}
      <div className="absolute bottom-4 right-4 z-10 md:hidden">
        <div className="glass-panel px-4 py-2 rounded-lg">
          <p className="text-xs text-foreground">Use touch to look around</p>
        </div>
      </div>
    </>
  )
}
