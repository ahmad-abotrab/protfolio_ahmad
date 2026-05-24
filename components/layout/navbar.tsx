"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 h-16 lg:h-20">
          <Link
            href="#home"
            className="text-2xl lg:text-3xl text-foreground leading-none shrink-0"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            {personalConfig.name.split(" ")[0]}
          </Link>

          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="rounded-full border border-white/10 bg-[#032f40]/35 px-2 py-1.5 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-1">
                <Link
                  href="#home"
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    activeSection === "home"
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-slate-950/20",
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
                          ? "bg-white text-slate-950 shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-slate-950/20",
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Contact Me</Link>
            </Button>
            {/* <div className="inline-flex rounded-full border border-white/10 bg-[#032f40]/35 p-1 text-sm text-foreground backdrop-blur-md">
              <button className="rounded-full bg-primary px-3 py-2 text-primary-foreground">EN</button>
              <button className="rounded-full px-3 py-2 text-muted-foreground hover:bg-white/10">
                AR
              </button>
            </div> */}
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* <div className="hidden xl:flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mt-3 text-sm text-muted-foreground">
          <span className="text-accent">🚀 New:</span>
          <span>AI Agent Engineering Course — 60+ videos, 4 projects</span>
          <Link href="/courses/ai-agents" className="text-primary hover:underline">
            See the Course →
          </Link>
        </div> */}

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-[32rem] pb-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-1 pt-3 rounded-3xl border border-white/10 bg-[#032f40]/80 p-3 backdrop-blur-md">
            <Link
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-slate-950/20 transition-colors"
            >
              Home
            </Link>
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-slate-950/20 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="outline" size="lg" className="w-full mt-2 text-foreground border-white/10 hover:bg-slate-950/20">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
