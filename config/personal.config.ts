import type { PersonalConfig } from "@/types"

export const personalConfig: PersonalConfig = {
  name: "Mohammed",
  title: "Full Stack Developer",
  subtitle: "Software Engineer | Data Analyst",
  location: "Turkey",

  hero: {
    greeting: "Hi, I'm",
    headline: "Building scalable web applications",
    description:
      "A reliable developer with 4+ years of experience crafting pixel-perfect, accessible digital experiences. I specialize in full-stack development, from elegant frontends to robust backend systems.",
    ctaButton: { label: "Hire me", href: "#contact" },
    secondaryButton: { label: "View Projects", href: "#projects" },
  },

  about: {
    title: "About Me",
    paragraphs: [
      "I'm a passionate developer focused on creating accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
      "Currently, I'm focused on building comprehensive management systems and data-driven applications. I've had the opportunity to develop software across a variety of settings — from startups to established companies, working with diverse tech stacks and solving complex problems.",
      "In my spare time, I'm usually exploring new technologies, contributing to open-source projects, or pursuing my Master's degree in Informatics.",
    ],
    image: "/images/profile/avatar.jpg",
    resumeUrl: "/resume.pdf",
  },

  social: [
    { platform: "github", url: "https://github.com/mohammed", icon: "Github" },
    { platform: "linkedin", url: "https://linkedin.com/in/mohammed", icon: "Linkedin" },
    { platform: "twitter", url: "https://twitter.com/mohammed", icon: "Twitter" },
    { platform: "email", url: "mailto:mohammed@example.com", icon: "Mail" },
  ],

  contact: {
    title: "Get In Touch",
    description:
      "I'm currently available for freelance work and full-time opportunities. If you have a project that needs development expertise, or if you're just looking to chat, feel free to reach out.",
    email: "mohammed@example.com",
    phone: "+90 xxx xxx xxxx",
  },
}
