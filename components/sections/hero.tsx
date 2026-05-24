"use client";

import { motion, useInView } from "framer-motion";
import { ArrowDown, ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { personalConfig } from "@/config/personal.config";

export function HeroSection() {
  const { hero, name, subtitle, about } = personalConfig;
  const heroRef = useRef<HTMLElement | null>(null);
  const inView = useInView(heroRef, { once: false, margin: "-100px" });

  const headlineLines = hero.headline
    .split(". ")
    .filter(Boolean)
    .map((line) => `${line.trim()}${line.endsWith(".") ? "" : "."}`);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pb-12 pt-20 lg:min-h-screen lg:pb-0 lg:pt-24"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_72%_48%,rgba(11,216,182,0.12),transparent_31rem),radial-gradient(circle_at_10%_95%,rgba(255,228,92,0.07),transparent_25rem),linear-gradient(180deg,rgba(2,38,53,0)_0%,rgba(2,38,53,0.28)_100%)]" />
      <div className="container mx-auto px-[calc(1rem+4%)] sm:px-[calc(1.5rem+4%)] lg:px-[calc(2rem+4%)] relative">
        <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-10 xl:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs sm:text-sm font-semibold text-primary shadow-[0_0_0_1px_rgba(11,216,182,0.08)] mb-5 lg:mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(11,216,182,0.85)]" />
              {subtitle}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[3.75rem] font-black tracking-normal leading-[0.94]"
            >
              {headlineLines.map((line, index) => (
                <span
                  key={line}
                  className={`block ${
                    index === 0
                      ? "text-foreground"
                      : index === 1
                      ? "text-primary"
                      : "text-accent"
                  }`}
                >
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mt-4 mb-6"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <Button asChild size="lg" className="w-full sm:w-auto h-11 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground hover:bg-primary/90">
                <a href={hero.ctaButton.href}>
                  {hero.ctaButton.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-11 rounded-full border-white/10 bg-slate-950/10 px-6 text-sm font-bold text-white/80 hover:bg-slate-950/50 hover:text-white">
                <a href={hero.secondaryButton.href}>{hero.secondaryButton.label}</a>
              </Button>
              {about.resumeUrl && (
                <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto h-11 rounded-full gap-2 text-sm text-muted-foreground hover:text-foreground hover:bg-slate-950/40">
                  <a href={about.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[18.75rem] py-6 sm:py-7">
              <div className="absolute -inset-9 z-0 grid place-items-center pointer-events-none">
                <motion.div
                  className="absolute aspect-square w-[112%] rounded-full border border-primary/10"
                  animate={{ rotate: 360, scale: [1, 1.035, 1] }}
                  transition={{
                    rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                />
                <motion.div
                  className="absolute aspect-square w-[132%] rounded-full border border-white/10"
                  animate={{ rotate: -360, scale: [1.02, 0.985, 1.02] }}
                  transition={{
                    rotate: { duration: 42, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                />
              </div>

              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-primary/50 bg-[#082937] shadow-[0_18px_52px_rgba(0,0,0,0.34),0_0_0_1px_rgba(255,255,255,0.06)]">
                <Image
                  src="/ahmad.png"
                  alt={`${name} avatar`}
                  fill
                  sizes="(min-width:1024px) 19rem, min(78vw, 19rem)"
                  className="object-cover object-[50%_34%] grayscale contrast-125 brightness-75 saturate-0"
                  priority
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-screen" />
                <div className="absolute inset-0 bg-[#022534]/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(2,32,45,0.24)_70%,rgba(2,32,45,0.58))]" />
                <div className="absolute left-3 top-3 h-8 w-8 rounded-br-[0.85rem] border-l-2 border-t-2 border-primary" />
                <div className="absolute bottom-3 right-3 h-8 w-8 rounded-tl-[0.85rem] border-b-2 border-r-2 border-accent" />
              </div>

              <div className="absolute right-1 top-2 z-20 inline-flex h-9 items-center gap-2 rounded-full border border-primary/25 bg-[#073246]/95 px-3 text-[0.68rem] sm:text-xs font-bold text-foreground shadow-[0_10px_24px_rgba(0,0,0,0.25)] backdrop-blur-md sm:right-3 lg:-right-2">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_rgba(11,216,182,0.9)]" />
                Software Engineer
              </div>
              <div className="absolute right-0 top-[57%] z-20 inline-flex h-9 translate-x-0 items-center gap-2 rounded-full border border-primary/25 bg-[#073246]/95 px-3 text-[0.68rem] sm:text-xs font-bold text-foreground shadow-[0_10px_24px_rgba(0,0,0,0.25)] backdrop-blur-md sm:translate-x-5 lg:translate-x-8">
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(255,228,92,0.8)]" />
                Data Analyst
              </div>
              <div className="absolute bottom-3 left-1/2 z-20 inline-flex h-9 -translate-x-1/2 items-center gap-2 rounded-full border border-primary/25 bg-[#073246]/95 px-3 text-[0.68rem] sm:text-xs font-bold text-foreground shadow-[0_10px_24px_rgba(0,0,0,0.25)] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_rgba(11,216,182,0.9)]" />
                Mentor
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">Scroll down</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
