import type { SkillsConfig } from "@/types";

export const skillsConfig: SkillsConfig = {
  title: "Skills & Technologies",

  categories: [
    {
      name: "Data Domain",
      skills: [
        { name: "Airflow", icon: "Airflow", level: 90 },
        { name: "Python's Library", icon: "Python", level: 85 },
        { name: "SQL", icon: "SQL", level: 85 },
        { name: "Excel", icon: "excel", level: 88 },
        { name: "tablue", icon: "tablue", level: 92 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Laravel", icon: "laravel", level: 90 },
        { name: "Symfony", icon: "Symfony", level: 85 },
        { name: "Python", icon: "python", level: 80 },
        { name: "PHP", icon: "php", level: 85 },
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
        // { name: "AWS", icon: "aws", level: 70 },
        // { name: "Linux", icon: "linux", level: 78 },
      ],
    },
  ],
};
