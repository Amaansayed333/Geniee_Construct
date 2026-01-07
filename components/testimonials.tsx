"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
    {
        text: "Building a home felt overwhelming until we met Smartgeniee. Their transparency and daily updates gave us complete peace of mind.",
        author: "Rajesh & Meera",
        role: "Homeowners, Bangalore",
    },
    {
        text: "The quality of construction and attention to detail particularly in the interiors was exceptional. Highly recommended!",
        author: "David Pinto",
        role: "Villa Owner, Goa",
    },
    {
        text: "Professional, timely, and budget-friendly. They stuck to the quote provided at the start. No surprises.",
        author: "Ananya Gupta",
        role: "Renovation Client, Delhi",
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Stories of Trust & Delight</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <Card key={index} className="p-8 border-none shadow-lg bg-background relative">
                            <div className="flex gap-1 mb-6 text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
                            <div>
                                <div className="font-bold text-foreground">{t.author}</div>
                                <div className="text-sm text-muted-foreground">{t.role}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
