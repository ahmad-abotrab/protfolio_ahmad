"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { experienceConfig } from "@/config/experience.config"
import type { Position } from "@/types"

function TimelineItem({ position, index }: { position: Position; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

      {/* Content */}
      <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{position.title}</h3>
            <div className="flex items-center gap-2 text-primary">
              <span className="font-medium">{position.company}</span>
              <ExternalLink className="h-3 w-3" />
            </div>
          </div>

          {position.isCurrent && (
            <Badge variant="default" className="bg-primary/10 text-primary border-primary/30 w-fit">
              Current
            </Badge>
          )}
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {position.startDate} — {position.isCurrent ? "Present" : position.endDate}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {position.location}
          </span>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-4">
          {position.description.map((item, i) => (
            <li key={i} className="text-muted-foreground text-sm flex gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {position.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const { title, positions } = experienceConfig
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {positions.map((position, index) => (
            <TimelineItem key={position.id} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
