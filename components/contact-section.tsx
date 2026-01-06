"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "homepage-contact",
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/5 via-background to-accent/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Let's Build Your Dream Together
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Get in touch with us today. Our team will respond within 24 hours to start your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: "contact@buildverse.com",
                href: "mailto:contact@buildverse.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+1 (555) 123-4567",
                href: "tel:+15551234567",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "123 Construction Ave, Building City, ST 12345",
                href: "#",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors block">
                      {item.content}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <p className="text-sm text-green-600">
                      Thank you! We've received your message and will respond within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-sm text-red-600">
                      Something went wrong. Please try again or contact us directly via email.
                    </p>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full text-base" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
