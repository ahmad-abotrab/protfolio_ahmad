import type { ExperienceConfig } from "@/types"

export const experienceConfig: ExperienceConfig = {
  title: "Experience",

  positions: [
    {
      id: "job-1",
      title: "Software Engineer | Full Stack Developer",
      company: "WAJ UAE",
      companyType: "Management System",
      location: "Dubai, UAE",
      startDate: "January 2024",
      endDate: "June 2025",
      isCurrent: false,
      logo: "/images/companies/waj.png",
      description: [
        "Spearheaded development of a customer booking platform serving 10,000+ monthly active users",
        "Migrated infrastructure to cloud-based solution, reducing server costs by 55%",
        "Implemented deployment automation reducing release cycles from days to hours",
        "Led a team of 3 developers in delivering features on tight deadlines",
      ],
      technologies: ["Laravel", "Vue.js", "Docker", "AWS", "PostgreSQL"],
    },
    {
      id: "job-2",
      title: "Backend Developer",
      company: "TechStart Solutions",
      companyType: "Software Agency",
      location: "Istanbul, Turkey",
      startDate: "March 2022",
      endDate: "December 2023",
      isCurrent: false,
      logo: "/images/companies/techstart.png",
      description: [
        "Developed and maintained RESTful APIs serving 50+ client applications",
        "Implemented real-time notification system using WebSockets and Redis",
        "Optimized database queries resulting in 40% improvement in response times",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "TypeScript"],
    },
    {
      id: "job-3",
      title: "Junior Full Stack Developer",
      company: "Digital Innovations",
      companyType: "Digital Agency",
      location: "Damascus, Syria",
      startDate: "June 2020",
      endDate: "February 2022",
      isCurrent: false,
      logo: "/images/companies/digital.png",
      description: [
        "Built responsive web applications for various clients across industries",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Developed custom CMS solutions for content management",
        "Participated in agile development processes and sprint planning",
      ],
      technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    },
  ],
}
