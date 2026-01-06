"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, DollarSign, Home, Layers } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Calculator from "@/components/icons/calculator" // Import Calculator component

export function BudgetEstimatorPreview() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Calculator className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Smart Tool</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Get Instant{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Budget Estimates
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our intelligent budget estimator provides transparent cost breakdowns based on your house size, chosen
              theme, material quality, and custom add-ons. No hidden fees, no surprises.
            </p>

            <div className="space-y-4">
              {[
                { icon: Home, label: "House size & layout" },
                { icon: Layers, label: "Material quality selection" },
                { icon: DollarSign, label: "Detailed cost breakup" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="text-base group">
              <Link href="/estimator">
                Try Budget Calculator
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    $45,000 - $62,000
                  </div>
                  <p className="text-sm text-muted-foreground">Estimated cost for your project</p>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Construction", amount: "$28,000", percentage: 50 },
                    { label: "Materials", amount: "$18,000", percentage: 32 },
                    { label: "Interior Design", amount: "$10,000", percentage: 18 },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground">{item.label}</span>
                        <span className="font-semibold text-foreground">{item.amount}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
