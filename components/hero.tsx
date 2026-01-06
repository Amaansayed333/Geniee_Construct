"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Home, Layers } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-accent/20 to-white" />

        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/40 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary/20 backdrop-blur-sm rounded-2xl border border-secondary/30"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column - Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
                <motion.span
                  className="inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    background: "linear-gradient(90deg, #000 30%, #FFD700 50%, #000 70%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Your Home's
                </motion.span>
                <br />
                <span className="text-muted-foreground">Lifetime Partner</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground text-balance leading-relaxed max-w-xl"
            >
              Experience the future of construction with immersive 3D virtual walkthroughs. Explore every room,
              customize every detail, and visualize your dream home before breaking ground.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-base group bg-foreground text-background hover:bg-foreground/90 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg"
                >
                  <Link href="/walkthrough">
                    <Home className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                    Start 3D Tour
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base group border-2 border-foreground/20 hover:border-secondary hover:bg-secondary/10 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg bg-transparent"
                >
                  <Link href="#features">
                    <Play className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                    Watch Demo
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 md:gap-4 pt-4"
            >
              {[
                { icon: Home, label: "Virtual Reality Tours" },
                { icon: Layers, label: "100+ Design Themes" },
                { icon: Sparkles, label: "Smart Budget AI" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/50 border border-border"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 215, 0, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                  <span className="text-xs md:text-sm font-medium text-foreground">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-3 md:gap-4 pt-6 md:pt-8 max-w-md"
            >
              {[
                { label: "Projects Completed", value: "500+" },
                { label: "Happy Clients", value: "1000+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="space-y-1 md:space-y-2 p-3 md:p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-secondary/20"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Genie Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] order-2 lg:order-2"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/30 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative h-full rounded-3xl overflow-hidden border-2 md:border-4 border-secondary/30 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/friendly-yellow-genie-character-with-magical-lamp-.jpg"
                alt="Smartgeniee - Your Construction Genie"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Floating sparkle elements around genie */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  right: `${-5 + i * 2}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
