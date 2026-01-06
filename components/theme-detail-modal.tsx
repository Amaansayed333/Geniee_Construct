"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

interface Theme {
  id: number
  name: string
  category: string
  room: string
  image: string
  description: string
  features: string[]
  priceRange: string
}

interface ThemeDetailModalProps {
  theme: Theme
  onClose: () => void
}

export function ThemeDetailModal({ theme, onClose }: ThemeDetailModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold">{theme.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Theme Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img src={theme.image || "/placeholder.svg"} alt={theme.name} className="w-full h-full object-cover" />
          </div>

          {/* Theme Info */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{theme.category}</Badge>
              <Badge variant="outline">{theme.room}</Badge>
              <Badge>{theme.priceRange}</Badge>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">{theme.description}</p>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {theme.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-muted/50 p-6 rounded-lg space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Perfect For</h3>
              <p className="text-muted-foreground leading-relaxed">
                This theme works exceptionally well for {theme.room.replace("-", " ")} spaces and complements a{" "}
                {theme.category} aesthetic. Ideal for those seeking a balance between style and functionality.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1">
                <Link href="/estimator">
                  Get Budget Estimate
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <Download className="mr-2 w-4 h-4" />
                Download Lookbook
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
