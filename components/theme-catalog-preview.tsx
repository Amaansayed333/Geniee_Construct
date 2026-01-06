"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const themes = [
  { name: "Modern Minimal", image: "/modern-minimal-interior-design-living-room.jpg", color: "from-gray-400 to-gray-600" },
  { name: "Luxury Premium", image: "/luxury-premium-interior-design-bedroom.jpg", color: "from-amber-400 to-amber-600" },
  { name: "Scandinavian", image: "/scandinavian-interior-design-kitchen.jpg", color: "from-blue-400 to-blue-600" },
]

export function ThemeCatalogPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Explore Design Themes
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            From Modern to Traditional, discover 100+ professionally curated renovation styles with stunning 3D
            visualizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={theme.image || "/placeholder.svg"}
                    alt={theme.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{theme.name}</h3>
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${theme.color}`} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="text-base group bg-transparent">
            <Link href="/themes">
              View All Themes
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
