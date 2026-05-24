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
      className="group min-w-0"
    >
      <SkillChip
        label={skill.name}
        icon={skill.icon}
        className="h-10 w-full justify-start rounded-full px-3 sm:w-auto"
      />
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
      <div className="h-full rounded-xl border border-border bg-card/90 p-5 transition-colors hover:border-primary/30 sm:p-6">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="text-base font-semibold text-foreground sm:w-48 sm:shrink-0 sm:text-sm sm:font-medium sm:text-muted-foreground">
            {category.name}
          </div>
          <div className="grid min-w-0 grid-cols-2 gap-2 sm:flex sm:flex-1 sm:flex-wrap">
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
    <section id="skills" className="py-16 lg:py-32" ref={ref}>
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
          className="mx-auto mb-10 max-w-[20rem] text-center text-base leading-relaxed text-muted-foreground sm:mb-12 sm:max-w-2xl sm:text-lg"
        >
          Technologies and tools I’ve mastered
        </motion.p>

        <div className="space-y-4 sm:space-y-6">
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
