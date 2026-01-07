"use client"

import { motion } from "framer-motion"
import { Check, ShieldCheck } from "lucide-react"

const steps = [
    {
        title: "Consultation & Planning",
        description: "We understand your vision, assess the site, and create a transparent budget tailored to your needs.",
    },
    {
        title: "Design Finalization",
        description: "Our architects and interior designers create 3D visualizations, ensuring you see your home before we build.",
    },
    {
        title: "Expert Construction",
        description: "Our vetted contractors build with premium materials, following strict structural and safety standards.",
    },
    {
        title: "Quality Checks & Handover",
        description: "We conduct 350+ quality checks before handing over the keys to your dream home.",
    },
]

export function ProcessSteps() {
    return (
        <section className="py-24 bg-muted/20" id="process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3 space-y-6 sticky top-24">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <ShieldCheck className="w-4 h-4" />
                            <span>100% Accountability</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                            A Transparent Process Built on Trust
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            No hidden costs, no delays. We follow a rigorous, stage-gated process to ensure your home is built to
                            perfection.
                        </p>
                    </div>

                    <div className="md:w-2/3 space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-6 relative"
                            >
                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-[19px] top-12 bottom-[-32px] w-[2px] bg-border" />
                                )}

                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold z-10 border-4 border-background">
                                    {index + 1}
                                </div>
                                <div className="space-y-2 pb-8">
                                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed max-w-lg">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
