"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { skillsConfig } from "@/config/skills.config"
import type { Skill, SkillCategory } from "@/types"

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: "easeOut" }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </motion.div>
  )
}

function SkillCategoryCard({ category, categoryIndex }: { category: SkillCategory; categoryIndex: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
    >
      <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
        <h3 className="text-lg font-semibold text-foreground mb-6">{category.name}</h3>
        <div className="space-y-4">
          {category.skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const { title, categories } = skillsConfig
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 lg:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <SkillCategoryCard key={category.name} category={category} categoryIndex={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
