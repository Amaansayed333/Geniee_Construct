"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function VirtualWalkthroughCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/10 via-background to-accent/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <Eye className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Featured Experience</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Walk Through Your Future Home{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Before It's Built
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience our revolutionary 3D virtual walkthrough. Navigate through fully furnished rooms with
                first-person controls, explore every detail, and feel the space as if you're already there. Available on
                desktop, mobile, and tablet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="text-base group">
                  <Link href="/walkthrough">
                    Launch Virtual Tour
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                  <Link href="/walkthrough#gallery">View Sample Homes</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
