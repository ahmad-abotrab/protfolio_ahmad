import type { EducationConfig } from "@/types"

export const educationConfig: EducationConfig = {
  title: "Education",

  degrees: [
    {
      id: "edu-1",
      degree: "MSc in Informatics",
      institution: "Kaunas University of Technology",
      location: "Lithuania",
      startYear: 2025,
      endYear: 2027,
      status: "In Progress",
      description: "Pursuing advanced studies in informatics with focus on software engineering and data science.",
      logo: "/images/education/ktu.png",
    },
    {
      id: "edu-2",
      degree: "BSc in Software Engineering",
      institution: "Damascus University",
      location: "Syria",
      startYear: 2015,
      endYear: 2019,
      status: "Completed",
      logo: "/images/education/damascus.png",
    },
  ],

  certifications: [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      url: "https://aws.amazon.com/certification",
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker",
      date: "2023",
      url: "https://docker.com/certification",
    },
  ],

  achievements: [
    {
      title: "World Robot Olympiad",
      position: "6th Place",
      location: "India",
      year: 2017,
      description: "International robotics competition featuring teams from 60+ countries.",
    },
    {
      title: "Future Inventor in Business",
      position: "3rd Place",
      location: "Thailand",
      year: 2018,
      description: "Business innovation competition showcasing entrepreneurial skills.",
    },
  ],
}
