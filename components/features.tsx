"use client"

import { motion } from "framer-motion"
import { Boxes, Palette, Calculator, Sparkles, Bell, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Boxes,
    title: "3D Virtual Walkthrough",
    description:
      "Experience first-person exploration of fully furnished homes. Navigate room by room with game-like controls on any device.",
  },
  {
    icon: Palette,
    title: "Design Theme Catalog",
    description:
      "Browse 100+ renovation styles from Modern to Traditional. Visualize each theme with high-quality 3D previews.",
  },
  {
    icon: Calculator,
    title: "Smart Budget Estimator",
    description:
      "Get instant cost estimates based on house size, selected theme, and material quality. Complete transparency, no surprises.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "Receive personalized design suggestions based on your budget, family size, and lifestyle preferences.",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description:
      "Instant alerts to our team when you visit or submit inquiries. Faster response times mean better service.",
  },
  {
    icon: MessageSquare,
    title: "Live Customization",
    description:
      "Modify colors, materials, and layouts in real-time. See your changes instantly in the 3D environment.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Unique Services From Our Platform
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge technology with exceptional service to deliver an unmatched home building
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 md:p-8 h-full hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
