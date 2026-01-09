import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Ahmad Abotrab",
  title: "",
  description:
    "A reliable developer with 4+ years of experience building scalable web applications and data-driven solutions.",
  url: "https://ahmadabotrab.com",
  ogImage: "/ahmad.png",

  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  theme: {
    defaultMode: "dark",
    colors: {
      primary: "#10B981",
      secondary: "#3B82F6",
      accent: "#F59E0B",
    },
  },
};
