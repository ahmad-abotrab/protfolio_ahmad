import type { EducationConfig } from "@/types";

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
      description:
        "Pursuing advanced studies in informatics with focus on software engineering and data science.",
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
      name: "Data Engineering for beginner",
      issuer: "kiwi-lytics Data solution company (on Udemy)",
      date: "comming soon",
      url: "",
    },
    {
      name: "Mastering Laravel Elqount (ORM)",
      issuer: "Udemy",
      date: "comming soon",
      url: "",
    },
    {
      name: "Micronaut cloud native microserivce",
      issuer: "Udemy",
      date: "comming soon",
      url: "",
    },
  ],

  achievements: [
    {
      id: "ach-1",
      title: "World Robot Olympiad (Open category)",
      position: "6th Place",
      location: "India",
      year: 2016,
      image: "/india_wro.jpeg",
      description:
        "International robotics competition featuring teams from 60+ countries.",
    },
    {
      id: "ach-2",
      title: "World Robot Olympiad (Open category)",
      position: "13rd Place",
      location: "Thailand",
      year: 2018,
      image: "/thailand_wro.jpeg",
      description:
        "International robotics competition featuring teams from 70+ countries.",
    },
    // {
    //   id: "ach-3",
    //   title: "Future Inventor in Business",
    //   position: "3rd Place",
    //   location: "Thailand",
    //   year: 2018,
    //   image: "",
    //   description:
    //     "Business innovation competition showcasing entrepreneurial skills.",
    // },
  ],
};
