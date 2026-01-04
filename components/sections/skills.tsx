"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillsConfig } from "@/config/skills.config";
import type { Skill, SkillCategory } from "@/types";
import { SkillChip } from "@/components/ui/skill-chip";

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group"
    >
      <SkillChip label={skill.name} icon={skill.icon} />
    </motion.div>
  );
}

function SkillCategoryCard({
  category,
  categoryIndex,
}: {
  category: SkillCategory;
  categoryIndex: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
    >
      <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
        <div className="flex items-start gap-6">
          <div className="w-48 shrink-0 text-sm font-medium text-muted-foreground">
            {category.name}
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const { title, categories } = skillsConfig;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I’ve mastered
          </p>
        </motion.div>

        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={category.name}>
              <SkillCategoryCard category={category} categoryIndex={index} />
              {index < categories.length - 1 && <div className="h-px  mt-6" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
