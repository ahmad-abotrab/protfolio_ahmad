import type { SkillsConfig } from "@/types";

export const skillsConfig: SkillsConfig = {
  title: "My Skills",

  categories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "PHP", icon: "php", level: 0 },
        { name: "Python", icon: "python", level: 0 },
        { name: "Java", icon: "java", level: 0 },
        { name: "Dart", icon: "dart", level: 0 },
        { name: "C++", icon: "cplusplus", level: 0 },
        { name: "JavaScript", icon: "javascript", level: 0 },
        { name: "TypeScript", icon: "typescript", level: 0 },
        { name: "Kotlin", icon: "kotlin", level: 0 },
      ],
    },
    {
      name: "Cloud & Hosting",
      skills: [
        { name: "Firebase", icon: "firebase", level: 0 },
        { name: "Cloudflare", icon: "cloudflare", level: 0 },
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "Laravel", icon: "laravel", level: 0 },
        { name: "Symfony", icon: "symfony", level: 0 },
        { name: "Django", icon: "django", level: 0 },
        { name: "FastAPI", icon: "fastapi", level: 0 },
        { name: "Flutter", icon: "flutter", level: 0 },
        // { name: "Micronaut", icon: "micronaut", level: 0 },
        { name: "Next.js", icon: "nextdotjs", level: 0 },
        { name: "OpenGL", icon: "opengl", level: 0 },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MariaDB", icon: "mariadb", level: 0 },
        { name: "PostgreSQL", icon: "postgresql", level: 0 },
        { name: "MySQL", icon: "mysql", level: 0 },
        { name: "MongoDB", icon: "mongodb", level: 0 },
        { name: "SQL Server", icon: "microsoftsqlserver", level: 0 },
        { name: "SQLite", icon: "sqlite", level: 0 },
        // { name: "Supabase", icon: "supabase", level: 0 },
        // { name: "Prisma", icon: "prisma", level: 0 },
      ],
    },
    {
      name: "Python and AI Library",
      skills: [
        { name: "Apache spark", icon: "apachespark", level: 0 },
        { name: "Apache Airflow", icon: "apacheairflow", level: 0 },
        // { name: "Matplotlib", icon: "matplotlib", level: 0 },
        // { name: "MLflow", icon: "mlflow", level: 0 },
        { name: "NumPy", icon: "numpy", level: 0 },
        { name: "Pandas", icon: "pandas", level: 0 },
        { name: "Plotly", icon: "plotly", level: 0 },
        { name: "PyTorch", icon: "pytorch", level: 0 },
        { name: "scikit-learn", icon: "scikitlearn", level: 0 },
        { name: "TensorFlow", icon: "tensorflow", level: 0 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "GitLab", icon: "gitlab", level: 0 },
        { name: "Git", icon: "git", level: 0 },
        { name: "GitHub", icon: "github", level: 0 },
        { name: "Arduino", icon: "arduino", level: 0 },
        { name: "Jira", icon: "jira", level: 0 },
      ],
    },
  ],
};
