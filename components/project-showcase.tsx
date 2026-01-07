"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
    {
        title: "Modern Villa Renovation",
        location: "Koramangala, Bangalore",
        image: "/modern-minimal-interior-design-living-room.jpg",
        tag: "Renovation",
    },
    {
        title: "Contemporary Duplex Construction",
        location: "Jubilee Hills, Hyderabad",
        image: "/luxury-premium-interior-design-bedroom.jpg",
        tag: "Construction",
    },
]

export function ProjectShowcase() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Transforming Spaces, Building Dreams</h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            Witness the quality and finish of our completed projects.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="hidden md:inline-flex">
                        <Link href="#">
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-4">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-black uppercase tracking-wide">
                                        {project.tag}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground">{project.location}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:hidden">
                    <Button asChild variant="outline" className="w-full">
                        <Link href="#">
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
