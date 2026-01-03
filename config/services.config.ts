import type { ServicesConfig } from "@/types";

export const servicesConfig: ServicesConfig = {
  title: "How I Can Help",
  subtitle: "Services I provide to help your business succeed",

  services: [
    {
      id: "Backend Development",
      title: "Web Development",
      description:
        "Building fast, scalable web applications using modern frameworks like React, Next.js, and Vue.js with clean, maintainable code.",
      icon: "Code",
      color: "#10B981",
    },
    // {
    //   id: "api-development",
    //   title: "API Development",
    //   description:
    //     "RESTful and GraphQL API design and implementation with proper authentication, validation, and documentation.",
    //   icon: "Server",
    //   color: "#3B82F6",
    // },
    {
      id: "Data Engineer",
      title: "Data Engineer",
      description:
        "Scalable data architectures with PostgreSQL, MongoDB, and Redis for high-performance data processing",
      icon: "Database",
      color: "#8B5CF6",
    },
    // {
    //   id: "mobile-development",
    //   title: "Mobile Development",
    //   description:
    //     "Cross-platform mobile applications using Flutter and React Native for seamless iOS and Android experiences.",
    //   icon: "Smartphone",
    //   color: "#EC4899",
    // },
    // {
    //   id: "cloud-devops",
    //   title: "Cloud & DevOps",
    //   description: "Cloud infrastructure setup with AWS, Docker containerization, and CI/CD pipeline implementation.",
    //   icon: "Cloud",
    //   color: "#F59E0B",
    // },
    {
      id: "data-analysis",
      title: "Data Analysis",
      description:
        "Data processing, visualization, and business intelligence solutions to drive informed decision-making.",
      icon: "BarChart",
      color: "#06B6D4",
    },
  ],
};
