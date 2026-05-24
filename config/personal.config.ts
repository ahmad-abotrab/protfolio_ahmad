import type { PersonalConfig } from "@/types";

export const personalConfig: PersonalConfig = {
  name: "Ahmad Abotrab",
  title: "",
  subtitle: "Data Scientist | Data Analyst",
  location: "Damascus,Syria",

  hero: {
    greeting: "Hi, I'm",
    headline: "Data Scientist",
    description:
      "A software engineer focused on building excellent backend systems, with a growing data science interest in healthcare, bioscience, and data-driven solutions that improve real-world outcomes.",
    ctaButton: { label: "Contact Me", href: "#contact" },
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
    resumeUrl: "/Ahmad-Abotrab-CV - v3.pdf",
  },

  social: [
    {
      platform: "github",
      url: "https://github.com/ahmad-abotrab",
      icon: "Github",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/ahmad-mazentrab/",
      icon: "Linkedin",
    },
    {
      platform: "facebook",
      url: "https://www.facebook.com/abotrabahmad/",
      icon: "Facebook",
    },
    {
      platform: "email",
      url: "mailto:abotrab.ahmad3099@gmail.com",
      icon: "Mail",
    },
  ],

  contact: {
    title: "Get In Touch",
    description:
      "I'm currently available for any consulting projects, to help you with your data needs and guide your tech team to build rubost system",
    email: "abotrab.ahmad3099@gmail.com",
    phone: "+963 9423530393",
  },
};
