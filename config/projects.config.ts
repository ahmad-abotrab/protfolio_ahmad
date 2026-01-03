import type { ProjectsConfig } from "@/types"

export const projectsConfig: ProjectsConfig = {
  title: "Featured Projects",
  subtitle: "Some of my recent work",

  projects: [
    {
      id: "project-1",
      title: "WAJ - Salon Management System",
      description:
        "Comprehensive salon and beauty business management platform with booking, inventory, and staff management.",
      longDescription:
        "A full-featured salon management system that handles everything from customer bookings to inventory tracking. Built with scalability in mind to support multiple branches and thousands of daily transactions.",
      image: "/salon-management-dashboard-dark-theme.jpg",
      screenshots: [],
      technologies: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Laravel", icon: "laravel" },
        { name: "Flutter", icon: "flutter" },
        { name: "Docker", icon: "docker" },
        { name: "TypeScript", icon: "typescript" },
      ],
      links: {
        website: "https://waj.ae",
        appStore: "https://apps.apple.com",
        playStore: "https://play.google.com",
        github: null,
      },
      featured: true,
      category: "Full Stack",
    },
    {
      id: "project-2",
      title: "E-Commerce Analytics Dashboard",
      description:
        "Real-time analytics dashboard for e-commerce businesses with sales tracking, customer insights, and inventory forecasting.",
      longDescription:
        "A comprehensive analytics solution that aggregates data from multiple sources to provide actionable insights for e-commerce businesses.",
      image: "/analytics-dashboard-dark-theme-charts.jpg",
      screenshots: [],
      technologies: [
        { name: "React", icon: "react" },
        { name: "Python", icon: "python" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Redis", icon: "redis" },
      ],
      links: {
        website: "https://example.com",
        github: "https://github.com",
      },
      featured: true,
      category: "Data & Analytics",
    },
    {
      id: "project-3",
      title: "Task Management Platform",
      description: "Collaborative task management tool with real-time updates, team workspaces, and project tracking.",
      longDescription:
        "A modern project management solution designed for remote teams, featuring real-time collaboration, Kanban boards, and detailed reporting.",
      image: "/task-management-kanban-board-dark-theme.jpg",
      screenshots: [],
      technologies: [
        { name: "Next.js", icon: "nextjs" },
        { name: "Prisma", icon: "prisma" },
        { name: "tRPC", icon: "trpc" },
        { name: "Tailwind CSS", icon: "tailwind" },
      ],
      links: {
        website: "https://example.com",
        github: "https://github.com",
      },
      featured: true,
      category: "Full Stack",
    },
    {
      id: "project-4",
      title: "Healthcare Appointment System",
      description:
        "Medical appointment scheduling system with patient management, doctor availability, and automated reminders.",
      longDescription:
        "A HIPAA-compliant healthcare management system that streamlines appointment scheduling and patient communication.",
      image: "/healthcare-appointment-booking-system-dark-theme.jpg",
      screenshots: [],
      technologies: [
        { name: "Vue.js", icon: "vue" },
        { name: "Laravel", icon: "laravel" },
        { name: "MySQL", icon: "mysql" },
        { name: "AWS", icon: "aws" },
      ],
      links: {
        website: "https://example.com",
      },
      featured: false,
      category: "Full Stack",
    },
  ],
}
