import type { PersonalConfig } from "@/types";

export const personalConfig: PersonalConfig = {
  name: "Ahmad Abotrab",
  title: "",
  subtitle: "Software Engineer | Data Analyst",
  location: "Damascus,Syria",

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
      "A tech professional with a foundation in full-stack development (PHP, Laravel, and Symfony), I bridge the gap between software engineering and data-driven decision making. My experience leading teams and optimizing software to be more efficient and handle a large scale of users.",
      "What truly drives me is data. I am curious about discovering insights, automating processes. from scripting with Python and SQL to building dashboards.I really enjoy turning data into intelligent strategies and technology that enhance business outcomes and insight has greate benefits for bussiness.",
      "I am strongly interested in collaborating on projects at the intersection of software development and data science—whether it’s designing analytical tools, refining algorithms for smarter applications, or delivering insights that inform critical decisions.",
    ],
    image: "/images/profile/avatar.jpg",
    resumeUrl: "/resume.pdf",
  },

  social: [
    { platform: "github", url: "https://github.com/mohammed", icon: "Github" },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/mohammed",
      icon: "Linkedin",
    },
    {
      platform: "twitter",
      url: "https://twitter.com/mohammed",
      icon: "Twitter",
    },
    { platform: "email", url: "mailto:mohammed@example.com", icon: "Mail" },
  ],

  contact: {
    title: "Get In Touch",
    description:
      "I'm currently available for freelance work and full-time opportunities. If you have a project that needs development expertise, or if you're just looking to chat, feel free to reach out.",
    email: "mohammed@example.com",
    phone: "+90 xxx xxx xxxx",
  },
};
