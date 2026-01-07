"use client"

import { motion } from "framer-motion"
import { ClipboardList, Palette, Hammer, Wrench } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
    {
        icon: ClipboardList,
        title: "Plan",
        description: "Detailed surveys, budgeting, and regulatory approvals handled by experts.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: Palette,
        title: "Design",
        description: "Architectural layouts and 3D interior visualization tailored to your lifestyle.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: Hammer,
        title: "Build",
        description: "Turnkey construction with high-quality materials and on-time delivery.",
        color: "bg-amber-100 text-amber-600",
    },
    {
        icon: Wrench,
        title: "Maintain",
        description: "Post-handover support, warranty, and maintenance for peace of mind.",
        color: "bg-green-100 text-green-600",
    },
]

export function JourneyServices() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Your Home Journey, Simplified</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        We manage the entire lifecycle of your home construction, ensuring a seamless experience from concept to
                        completion.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 h-full border-2 hover:border-secondary transition-colors duration-300 relative overflow-hidden group">
                                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                                {/* Subtle visual connector */}
                                {index < services.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-border z-10" />
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
