// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Social Links
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Hero & Personal
export interface HeroConfig {
  greeting: string;
  headline: string;
  description: string;
  ctaButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
}

export interface AboutConfig {
  title: string;
  paragraphs: string[];
  image: string;
  resumeUrl: string;
}

export interface ContactConfig {
  title: string;
  description: string;
  email: string;
  phone: string;
}

export interface PersonalConfig {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  hero: HeroConfig;
  about: AboutConfig;
  social: SocialLink[];
  contact: ContactConfig;
}

// Services
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: Service[];
}

// Experience
export interface Position {
  id: string;
  title: string;
  company: string;
  companyUrl?: string | null;
  companyType: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  logo: string;
  description: string[];
  technologies: string[];
}

export interface ExperienceConfig {
  title: string;
  positions: Position[];
}

// Projects
export interface ProjectLink {
  website?: string | null;
  appStore?: string | null;
  playStore?: string | null;
  github?: string | null;
}

export interface ProjectTech {
  name: string;
  icon: string;
}

export interface ProjectReference {
  id: string;
  name: string;
  link: string;
}

export type ProjectType = "mobile" | "web" | "ai" | "data";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  technologies: ProjectTech[];
  links: ProjectLink;
  featured: boolean;
  category: string;
  type: ProjectType;
  references?: ProjectReference[];
}

export interface ProjectsConfig {
  title: string;
  subtitle: string;
  projects: Project[];
}

// Skills
export interface Skill {
  name: string;
  icon: string;
  level: number;
  color?: string;
}

export interface SkillCategory {
  name: string;

  skills: Skill[];
}

export interface SkillsConfig {
  title: string;

  categories: SkillCategory[];
}

// Education
export interface Degree {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  status: string;
  description?: string;
  logo: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface Achievement {
  id: string;
  title: string;
  position: string;
  location: string;
  year: number;
  description: string;
  image?: string | null;
}
// export interface Volunteering {
//   id: string;
//   title: string;
//   organization: string;
//   location: string;
//   year: number;
//   duraion: string;
//   description: string;
//   image?: string | null;
// }

export interface EducationConfig {
  title: string;
  degrees: Degree[];
  certifications: Certification[];
  achievements: Achievement[];
  // volunteering: Volunteering[];
}

// Site Config
export interface ThemeConfig {
  defaultMode: "light" | "dark" | "system";
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  navigation: NavItem[];
  theme: ThemeConfig;
}
