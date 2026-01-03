"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Server, Database, Smartphone, Cloud, BarChart3 } from "lucide-react"
import { servicesConfig } from "@/config/services.config"
import type { Service } from "@/types"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Server,
  Database,
  Smartphone,
  Cloud,
  BarChart: BarChart3,
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = iconMap[service.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${service.color}20` }}
        >
          {Icon && <Icon className="h-6 w-6" style={{ color: service.color }} />}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>

        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const { title, subtitle, services } = servicesConfig
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
