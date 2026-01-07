"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/walkthrough", label: "Virtual Tour" },
    { href: "/themes", label: "Themes" },
    { href: "/shifting", label: "Shifting Services" },
    { href: "/estimator", label: "Budget Estimator" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-secondary/20" : "bg-transparent",
        )}
      >
        {/* Animated top border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent"
          animate={{
            opacity: isScrolled ? [0.5, 1, 0.5] : 0,
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with animation */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-accent rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-secondary via-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground via-secondary to-accent bg-clip-text text-transparent">
                  Smartgeniee
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Future of Building</span>
              </div>
            </Link>

            {/* Desktop Navigation with hover effects */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      layoutId="navHover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                </motion.div>
              ))}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="ml-4 relative overflow-hidden group">
                  <Link href="/#contact">
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Get Started
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary/10 transition-colors relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 relative z-10" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 relative z-10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Animated bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-secondary via-accent to-secondary"
          animate={{
            width: isScrolled ? ["0%", "100%"] : "0%",
            opacity: isScrolled ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      </motion.nav>

      {/* Mobile Menu with animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 right-4 bottom-4 w-72 bg-secondary/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-secondary/20 z-50 lg:hidden overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 pointer-events-none" />

              <div className="relative h-full overflow-y-auto p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 rounded-xl text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-secondary/10 hover:to-accent/10 transition-all group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{link.label}</span>
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <Button asChild size="lg" className="w-full relative overflow-hidden group">
                    <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4" />
                        Get Started
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent to-secondary"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </Button>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute bottom-6 right-6 w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl pointer-events-none" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
