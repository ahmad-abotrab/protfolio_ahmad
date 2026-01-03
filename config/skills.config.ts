import type { SkillsConfig } from "@/types"

export const skillsConfig: SkillsConfig = {
  title: "Skills & Technologies",

  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "React.js", icon: "react", level: 90 },
        { name: "Vue.js", icon: "vue", level: 85 },
        { name: "Next.js", icon: "nextjs", level: 85 },
        { name: "TypeScript", icon: "typescript", level: 88 },
        { name: "Tailwind CSS", icon: "tailwind", level: 92 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Laravel", icon: "laravel", level: 90 },
        { name: "Node.js", icon: "nodejs", level: 85 },
        { name: "Python", icon: "python", level: 80 },
        { name: "Express", icon: "express", level: 85 },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "PostgreSQL", icon: "postgresql", level: 85 },
        { name: "MongoDB", icon: "mongodb", level: 80 },
        { name: "Redis", icon: "redis", level: 75 },
        { name: "MySQL", icon: "mysql", level: 85 },
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: "docker", level: 82 },
        { name: "Git", icon: "git", level: 90 },
        { name: "AWS", icon: "aws", level: 70 },
        { name: "Linux", icon: "linux", level: 78 },
      ],
    },
  ],
}
