"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { BottleModel } from "@/components/3d/bottle-model"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-10 bg-background">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Trust & Clarity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium border border-secondary/20">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>Verified & Accountable Construction</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              <motion.span
                className="inline-block text-black"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    Your Home's
                    <br />
                    Lifetime Partner
              </motion.span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From architectural design to turnkey construction and interior execution—we build your dream home with
              complete transparency and 100% accountability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base h-12 px-8">
                <Link href="#contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base h-12 px-8 bg-transparent">
                <Link href="#process">
                  <FileText className="ml-2 w-4 h-4 mr-2" />
                  View Our Process
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden"
                  >
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ Homeowners</p>
            </div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <Canvas
                className="w-full h-full"
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ alpha: true }}
              >
                <Environment preset="studio" />
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <OrbitControls enableZoom={false} enablePan={false} />
                <BottleModel scale={1.5} />
              </Canvas>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <p className="text-white font-medium text-lg">"Smartgeniee made our home building journey effortless and transparent."</p>
                <p className="text-white/70 text-sm mt-2">— The Sharma Family</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

