"use client"

import { Building2, Clock, MapPin, SearchCheck } from "lucide-react"

export function TrustBar() {
    const stats = [
        {
            icon: Building2,
            value: "500+",
            label: "Projects Completed",
        },
        {
            icon: Clock,
            value: "10+",
            label: "Years of Experience",
        },
        {
            icon: MapPin,
            value: "12+",
            label: "Cities Served",
        },
        {
            icon: SearchCheck,
            value: "100%",
            label: "Transparent Pricing",
        },
    ]

    return (
        <div className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-2 group">
                            <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-bold">{stat.value}</div>
                            <div className="text-sm text-primary-foreground/80 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative noise/pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>
    )
}
