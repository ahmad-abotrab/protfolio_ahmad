import type { ProjectsConfig } from "@/types";

export const projectsConfig: ProjectsConfig = {
  title: "Featured Projects",
  subtitle: "Some of my recent work",

  projects: [
    {
      id: "project-1",
      title: "Easy App – Healthcare Job Application",
      description:
        "Expanded a mobile app to simplify healthcare job applications in the Gulf, supporting secure document uploads and processing over 200 submissions monthly.",
      longDescription:
        "Expanded a mobile app to simplify healthcare job applications in the Gulf, supporting secure document uploads and processing over 200 submissions monthly. Automated acceptance/rejection notifications reduced processing time by 36%. Centralized request management cut manual handling by 80% and improved provider efficiency. The streamlined flow reduced user wait times by 50%.",
      image: "/easy_plus_1.png",
      screenshots: [],
      technologies: [
        { name: "Flutter", icon: "flutter" },
        { name: "Firebase", icon: "firebase" },
        { name: "PHP", icon: "php" },
        { name: "MySQL", icon: "mysql" },
      ],
      links: {
        website: "",
        appStore: "",
        playStore: "",
        github: null,
      },
      featured: true,
      category: "Mobile App",
    },
    {
      id: "project-2",
      title: "STAM – Suria-Tech (Malaysia)",
      description:
        "Designed and enhanced the official website to manage course listings, recruit teachers, and handle course suggestions.",
      longDescription:
        "Designed and improved the official website for Suria-Tech Academy to manage course listings, teacher recruitment, and course suggestions. Increased course inquiries by 40%, leading to 100+ student registrations in the first month. Integrated Notion as an admin dashboard, cutting staff processing time by 25% and boosting digital engagement.",
      image: "/suria_tech.png",
      screenshots: [],
      technologies: [
        { name: "NextJS", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "GitLab", icon: "gitlab" },
        { name: "Notion", icon: "notion" },
      ],
      links: {
        website: "",
        appStore: "",
        playStore: "",
        github: null,
      },
      featured: true,
      category: "Web app",
    },
    {
      id: "project-3",
      title: "RBCs – Lectures Management System",
      description:
        "Platform to manage lectures, seat bookings, and attendance with automated notifications and messaging.",
      longDescription:
        "Developed the RBCs lectures management system including class scheduling, seat reservations, attendance tracking, email/SMS alerts, multi-role permissions, and a clear admin dashboard. Improved administrative flow and reduced manual errors.",
      image: "/rbcs1.png",
      screenshots: [],
      technologies: [
        { name: "Flutter", icon: "flutter" },
        { name: "Laravel", icon: "laravel" },
        { name: "MySQL", icon: "mysql" },
      ],
      links: {
        website: "",
        github: null,
      },
      featured: true,
      category: "Mobile App",
    },
    {
      id: "project-4",
      title: "Glow-App – Beauty & Care Platform",
      description:
        "Mobile app for booking beauty and care services with order and payment management.",
      longDescription:
        "Built the Glow mobile app to enable booking beauty and care services, with order management, payments, instant notifications, and a complete visit history. Supports multiple branches and providers with daily reports and a flexible UI.",
      image: "/glow_app_1.png",
      screenshots: [],
      technologies: [
        { name: "Flutter", icon: "flutter" },
        { name: "Firebase", icon: "firebase" },
        { name: "Laravel", icon: "laravel" },
      ],
      links: {
        website: "",
        appStore: "",
        playStore: "",
        github: null,
      },
      featured: true,
      category: "Mobile App",
    },
    {
      id: "project-5",
      title: "Dental Knights – Social Media for Dental Clinics",
      description:
        "Modern dental clinic website with content management and appointment booking.",
      longDescription:
        "Developed the Dental Knights website with an elegant UI, content management, and appointment booking. Improved SEO and loading speed, and integrated contact forms with email notifications and simple reporting.",
      image: "/dental_kinghts.jpeg",
      screenshots: [],
      technologies: [
        { name: "Flutter", icon: "flutter" },
        { name: "Laravel", icon: "laravel" },
        { name: "MySQL", icon: "mysql" },
        { name: "php", icon: "php" },
      ],
      links: {
        website: "",
        github: null,
      },
      featured: true,
      category: "Mobile app",
    },
    {
      id: "project-6",
      title: "UBC Food – Food Ordering System",
      description:
        "Platform for food ordering and managing menus, promotions, and payment integration.",
      longDescription:
        "Delivered the UBC Food platform to manage menus, orders, and promotions, with an easy admin dashboard and QA testing. Improved UX by reducing ordering steps and adding real-time order status tracking.",
      image: "/placeholder.svg",
      screenshots: [],
      technologies: [
        { name: "Flutter", icon: "flutter" },
        { name: "Firebase", icon: "firebase" },
      ],
      links: {
        website: "",
        github: null,
      },
      featured: true,
      category: "Mobile app",
    },
    {
      id: "project-7",
      title: "Fitness Sotrem – Fitness Tracking and Management System",
      description:
        "Mobile app provide service coach and fitness tracking online with real-time data and analytics.",
      longDescription: "",
      image: "/fitness.png",
      screenshots: [],
      technologies: [
        { name: "Flutter", icon: "flutter" },
        { name: "Firebase", icon: "firebase" },
      ],
      links: {
        website: "",
        github: null,
      },
      featured: true,
      category: "Mobile app",
    },
  ],
};
