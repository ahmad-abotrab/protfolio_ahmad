"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Server,
  Database,
  Smartphone,
  Cloud,
  BarChart3,
} from "lucide-react";
import { servicesConfig } from "@/config/services.config";
import type { Service } from "@/types";

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  Code,
  Server,
  Database,
  Smartphone,
  Cloud,
  BarChart: BarChart3,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="h-full bg-card border border-border rounded-xl p-3 sm:p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 min-h-[14rem] sm:min-h-[15rem] lg:min-h-[16rem] flex flex-col">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${service.color}20` }}
        >
          {Icon && (
            <Icon className="h-6 w-6" style={{ color: service.color }} />
          )}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-1">
          {service.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-snug">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const { title, subtitle, services } = servicesConfig;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    //py-20 lg:py-32
    <section id="services" className="" ref={ref}>
      <div className="container mx-auto px-[calc(1rem+4%)] sm:px-[calc(1.5rem+4%)] lg:px-[calc(2rem+4%)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 text-center"
        >
          {subtitle}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
