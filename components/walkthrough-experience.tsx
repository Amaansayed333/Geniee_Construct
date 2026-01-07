"use client"

import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { VirtualHouse } from "@/components/3d/virtual-house"
import { WalkthroughControls } from "@/components/walkthrough-controls"
import { Loader } from "lucide-react"

export function WalkthroughExperience() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log("[v0] WalkthroughExperience mounted")
    const timer = setTimeout(() => {
      console.log("[v0] Loading complete, showing 3D scene")
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  console.log("[v0] Rendering WalkthroughExperience, isLoading:", isLoading)

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 1.6, 5], fov: 75 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: false }}
        onCreated={() => console.log("[v0] Canvas created successfully")}
      >
        <Suspense fallback={null}>
          <VirtualHouse />
        </Suspense>
      </Canvas>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-background/95 backdrop-blur-sm z-50">
          <div className="glass-panel px-6 py-4 rounded-xl flex items-center gap-3">
            <Loader className="w-5 h-5 animate-spin text-secondary" />
            <span className="text-foreground">Loading 3D Environment...</span>
          </div>
        </div>
      )}

      {/* Controls Overlay */}
      <WalkthroughControls />
    </div>
  )
}
