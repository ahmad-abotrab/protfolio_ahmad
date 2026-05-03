"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { siteConfig } from "@/config/site.config"
import { personalConfig } from "@/config/personal.config"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    const ids = ["home", ...siteConfig.navigation.map((n) => n.href.replace("#", ""))]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveSection(visible.target.id)
      },
      { rootMargin: "0px 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo — script font */}
          <Link
            href="#home"
            className="text-2xl lg:text-3xl text-foreground leading-none shrink-0"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            {personalConfig.name.split(" ")[0]}
          </Link>

          {/* Desktop Navigation — old pill tabs style */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="px-2 py-1.5 rounded-full border border-border bg-card/60 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/70">
              <div className="flex items-center gap-1">
                <Link
                  href="#home"
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    activeSection === "home"
                      ? "bg-background text-foreground shadow-sm ring-2 ring-ring/60"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                  )}
                >
                  Home
                </Link>
                {siteConfig.navigation.map((item) => {
                  const id = item.href.replace("#", "")
                  const isActive = activeSection === id
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        isActive
                          ? "bg-background text-foreground shadow-sm ring-2 ring-ring/60"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: phone number + icon */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <span className="text-sm font-medium text-foreground tracking-wide">
              {personalConfig.contact.phone}
            </span>
            <a
              href={`mailto:${personalConfig.contact.email}`}
              className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="Contact"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-1 pt-2 rounded-xl border border-border bg-card/60 p-2">
            <Link
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              Home
            </Link>
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
