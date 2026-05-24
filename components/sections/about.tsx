"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin } from "lucide-react"
import { personalConfig } from "@/config/personal.config"

export function AboutSection() {
  const { about, name, location } = personalConfig
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{about.title}</h2>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>

          <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">{name.charAt(0)}</span>
                </div>

                <div className="text-center mt-6">
                  <h3 className="font-semibold text-foreground text-xl">{name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mt-2">
                    <MapPin className="h-3.5 w-3.5" />
                    {location}
                  </p>
                </div>

                <div className="my-7 h-px bg-white/10" />

                <div className="space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-muted-foreground">Experience</div>
                    <div className="mt-3 text-2xl font-semibold text-foreground">4+ years</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-muted-foreground">Projects</div>
                    <div className="mt-3 text-2xl font-semibold text-foreground">20+</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-muted-foreground">Availability</div>
                    <div className="mt-3 text-2xl font-semibold text-primary">Open to work</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
