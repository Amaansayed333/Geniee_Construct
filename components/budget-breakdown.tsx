"use client"

import { Card } from "@/components/ui/card"

interface BudgetBreakdownProps {
  breakdown: {
    construction: number
    materials: number
    interiorDesign: number
    miscellaneous: number
    addOns: number
    total: number
  }
}

export function BudgetBreakdown({ breakdown }: BudgetBreakdownProps) {
  const items = [
    {
      label: "Construction Labor",
      amount: breakdown.construction,
      color: "from-blue-500 to-blue-600",
      percentage: (breakdown.construction / breakdown.total) * 100,
    },
    {
      label: "Materials",
      amount: breakdown.materials,
      color: "from-green-500 to-green-600",
      percentage: (breakdown.materials / breakdown.total) * 100,
    },
    {
      label: "Interior Design",
      amount: breakdown.interiorDesign,
      color: "from-purple-500 to-purple-600",
      percentage: (breakdown.interiorDesign / breakdown.total) * 100,
    },
    {
      label: "Miscellaneous",
      amount: breakdown.miscellaneous,
      color: "from-orange-500 to-orange-600",
      percentage: (breakdown.miscellaneous / breakdown.total) * 100,
    },
  ]

  if (breakdown.addOns > 0) {
    items.push({
      label: "Add-ons",
      amount: breakdown.addOns,
      color: "from-pink-500 to-pink-600",
      percentage: (breakdown.addOns / breakdown.total) * 100,
    })
  }

  return (
    <Card className="p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Detailed Cost Breakdown</h2>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-foreground font-medium">{item.label}</span>
              <div className="text-right">
                <span className="font-semibold text-foreground">₹{item.amount.toLocaleString("en-IN")}</span>
                <span className="text-sm text-muted-foreground ml-2">({item.percentage.toFixed(1)}%)</span>
              </div>
            </div>
            <div className="relative h-3 bg-muted rounded-full overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between text-lg">
            <span className="font-semibold text-foreground">Total Estimated Cost</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              ₹{breakdown.total.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Note:</strong> This is an estimated cost based on your selections. Final
          costs may vary depending on specific requirements, location, and material availability. Contact us for a
          detailed quote with exact pricing.
        </p>
      </div>
    </Card>
  )
}
