"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Calculator, Download, Send, Loader2, CheckCircle2 } from "lucide-react"
import { BudgetBreakdown } from "@/components/budget-breakdown"

const themes = [
  { id: "modern-minimal", label: "Modern Minimal", multiplier: 1.0 },
  { id: "luxury-premium", label: "Luxury Premium", multiplier: 1.8 },
  { id: "scandinavian", label: "Scandinavian", multiplier: 1.2 },
  { id: "industrial", label: "Industrial Loft", multiplier: 1.3 },
  { id: "traditional", label: "Traditional Classic", multiplier: 1.5 },
  { id: "contemporary", label: "Contemporary Chic", multiplier: 1.6 },
]

const materialQualities = [
  { id: "economy", label: "Economy", description: "Cost-effective standard materials", multiplier: 0.8 },
  { id: "standard", label: "Standard", description: "Quality materials with good value", multiplier: 1.0 },
  { id: "premium", label: "Premium", description: "High-end luxury materials", multiplier: 1.5 },
]

const addOns = [
  { id: "modular-kitchen", label: "Modular Kitchen", cost: 250000 },
  { id: "false-ceiling", label: "False Ceiling", cost: 120000 },
  { id: "wardrobe", label: "Built-in Wardrobe", cost: 180000 },
  { id: "flooring-upgrade", label: "Premium Flooring", cost: 150000 },
  { id: "lighting-package", label: "Smart Lighting Package", cost: 95000 },
  { id: "bathroom-upgrade", label: "Bathroom Upgrade", cost: 220000 },
  { id: "hvac-system", label: "HVAC System", cost: 280000 },
  { id: "home-automation", label: "Home Automation", cost: 160000 },
]

export function BudgetEstimator() {
  const [carpetArea, setCarpetArea] = useState(1500)
  const [rooms, setRooms] = useState(3)
  const [selectedTheme, setSelectedTheme] = useState("modern-minimal")
  const [materialQuality, setMaterialQuality] = useState("standard")
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [estimatedCost, setEstimatedCost] = useState({ min: 0, max: 0 })
  const [breakdown, setBreakdown] = useState<any>(null)

  const [showQuoteDialog, setShowQuoteDialog] = useState(false)
  const [quoteFormData, setQuoteFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false)
  const [quoteSubmitStatus, setQuoteSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    calculateEstimate()
  }, [carpetArea, rooms, selectedTheme, materialQuality, selectedAddOns])

  const calculateEstimate = () => {
    const baseCostPerSqFt = 1800
    const themeMultiplier = themes.find((t) => t.id === selectedTheme)?.multiplier || 1.0
    const qualityMultiplier = materialQualities.find((q) => q.id === materialQuality)?.multiplier || 1.0
    const baseConstructionCost = carpetArea * baseCostPerSqFt * themeMultiplier * qualityMultiplier
    const roomFactor = 1 + (rooms - 1) * 0.1
    const totalWithoutAddOns = baseConstructionCost * roomFactor
    const addOnsCost = selectedAddOns.reduce((sum, addOnId) => {
      const addOn = addOns.find((a) => a.id === addOnId)
      return sum + (addOn?.cost || 0)
    }, 0)

    const totalCost = totalWithoutAddOns + addOnsCost
    const minCost = Math.round(totalCost * 0.95)
    const maxCost = Math.round(totalCost * 1.05)

    setEstimatedCost({ min: minCost, max: maxCost })

    const construction = Math.round(totalWithoutAddOns * 0.5)
    const materials = Math.round(totalWithoutAddOns * 0.3)
    const interiorDesign = Math.round(totalWithoutAddOns * 0.15)
    const miscellaneous = Math.round(totalWithoutAddOns * 0.05)

    setBreakdown({
      construction,
      materials,
      interiorDesign,
      miscellaneous,
      addOns: addOnsCost,
      total: minCost + (maxCost - minCost) / 2,
    })
  }

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns((prev) => (prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]))
  }

  const handleQuoteRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingQuote(true)
    setQuoteSubmitStatus("idle")

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...quoteFormData,
          carpetArea,
          rooms,
          theme: selectedTheme,
          materialQuality,
          addOns: selectedAddOns,
          estimatedCost,
        }),
      })

      if (response.ok) {
        setQuoteSubmitStatus("success")
        setTimeout(() => {
          setShowQuoteDialog(false)
          setQuoteSubmitStatus("idle")
          setQuoteFormData({ name: "", email: "", phone: "" })
        }, 3000)
      } else {
        setQuoteSubmitStatus("error")
      }
    } catch (error) {
      console.error("Quote request error:", error)
      setQuoteSubmitStatus("error")
    } finally {
      setIsSubmittingQuote(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel">
            <Calculator className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">Smart Budget Tool</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Calculate Your Project Cost
          </h1>
          <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            Get an instant, transparent estimate for your construction or renovation project. Customize every detail to
            match your vision and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* House Dimensions */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">House Dimensions</h2>
              <div className="space-y-6">
                {/* Carpet Area */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="carpet-area" className="text-base">
                      Carpet Area (sq ft)
                    </Label>
                    <span className="text-2xl font-bold text-secondary">{carpetArea}</span>
                  </div>
                  <Slider
                    id="carpet-area"
                    min={500}
                    max={5000}
                    step={100}
                    value={[carpetArea]}
                    onValueChange={(value) => setCarpetArea(value[0])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>500 sq ft</span>
                    <span>5000 sq ft</span>
                  </div>
                </div>

                {/* Number of Rooms */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="rooms" className="text-base">
                      Number of Rooms
                    </Label>
                    <span className="text-2xl font-bold text-secondary">{rooms}</span>
                  </div>
                  <Slider
                    id="rooms"
                    min={1}
                    max={10}
                    step={1}
                    value={[rooms]}
                    onValueChange={(value) => setRooms(value[0])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 room</span>
                    <span>10 rooms</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Theme Selection */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Design Theme</h2>
              <RadioGroup value={selectedTheme} onValueChange={setSelectedTheme} className="grid grid-cols-2 gap-4">
                {themes.map((theme) => (
                  <div key={theme.id} className="relative">
                    <RadioGroupItem value={theme.id} id={theme.id} className="peer sr-only" />
                    <Label
                      htmlFor={theme.id}
                      className="flex flex-col p-4 border-2 border-border rounded-lg cursor-pointer hover:border-secondary transition-colors peer-data-[state=checked]:border-secondary peer-data-[state=checked]:bg-secondary/5"
                    >
                      <span className="font-medium text-foreground">{theme.label}</span>
                      <span className="text-sm text-muted-foreground mt-1">
                        {theme.multiplier > 1 ? `+${Math.round((theme.multiplier - 1) * 100)}%` : "Base price"}
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>

            {/* Material Quality */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Material Quality</h2>
              <RadioGroup
                value={materialQuality}
                onValueChange={setMaterialQuality}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {materialQualities.map((quality) => (
                  <div key={quality.id} className="relative">
                    <RadioGroupItem value={quality.id} id={quality.id} className="peer sr-only" />
                    <Label
                      htmlFor={quality.id}
                      className="flex flex-col p-4 border-2 border-border rounded-lg cursor-pointer hover:border-accent transition-colors peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5 h-full"
                    >
                      <span className="font-medium text-foreground">{quality.label}</span>
                      <span className="text-xs text-muted-foreground mt-1">{quality.description}</span>
                      <span className="text-sm font-semibold text-accent mt-2">
                        {quality.multiplier > 1
                          ? `+${Math.round((quality.multiplier - 1) * 100)}%`
                          : quality.multiplier < 1
                            ? `-${Math.round((1 - quality.multiplier) * 100)}%`
                            : "Standard"}
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>

            {/* Add-ons */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Optional Add-ons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addOns.map((addOn) => (
                  <div key={addOn.id} className="flex items-start space-x-3">
                    <Checkbox
                      id={addOn.id}
                      checked={selectedAddOns.includes(addOn.id)}
                      onCheckedChange={() => toggleAddOn(addOn.id)}
                    />
                    <div className="flex-1">
                      <Label htmlFor={addOn.id} className="text-sm font-medium text-foreground cursor-pointer">
                        {addOn.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">₹{addOn.cost.toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Results Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-6 md:p-8 sticky top-24">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Estimated Total Cost</h3>
                  <div className="text-4xl font-bold text-foreground">
                    ₹{estimatedCost.min.toLocaleString("en-IN")} - ₹{estimatedCost.max.toLocaleString("en-IN")}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Per sq ft</span>
                    <span className="font-semibold text-foreground">
                      ₹{Math.round(estimatedCost.min / carpetArea).toLocaleString("en-IN")} - ₹
                      {Math.round(estimatedCost.max / carpetArea).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Project Duration</span>
                    <span className="font-semibold text-foreground">
                      {Math.ceil(carpetArea / 200)} - {Math.ceil(carpetArea / 150)} weeks
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-3">
                  <Button className="w-full" size="lg" onClick={() => setShowQuoteDialog(true)}>
                    <Send className="mr-2 w-4 h-4" />
                    Request Detailed Quote
                  </Button>
                  <Button variant="outline" size="lg" className="w-full bg-transparent">
                    <Download className="mr-2 w-4 h-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Cost Breakdown */}
        {breakdown && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <BudgetBreakdown breakdown={breakdown} />
          </motion.div>
        )}
      </div>

      <Dialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Detailed Quote</DialogTitle>
            <DialogDescription>
              Fill in your contact details and we'll send you a comprehensive quote within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleQuoteRequest} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quote-name">Name</Label>
              <Input
                id="quote-name"
                placeholder="John Doe"
                value={quoteFormData.name}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, name: e.target.value })}
                required
                disabled={isSubmittingQuote}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote-email">Email</Label>
              <Input
                id="quote-email"
                type="email"
                placeholder="john@example.com"
                value={quoteFormData.email}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, email: e.target.value })}
                required
                disabled={isSubmittingQuote}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote-phone">Phone</Label>
              <Input
                id="quote-phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={quoteFormData.phone}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, phone: e.target.value })}
                required
                disabled={isSubmittingQuote}
              />
            </div>

            {quoteSubmitStatus === "success" && (
              <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <p className="text-sm text-green-600">Quote request sent! We'll contact you within 24 hours.</p>
              </div>
            )}

            {quoteSubmitStatus === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-600">Failed to send request. Please try again or contact us directly.</p>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isSubmittingQuote}>
              {isSubmittingQuote ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Request"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
