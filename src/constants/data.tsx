import { Project } from "@/types";

export const collageData = {
  collage: "Silver Oak University",
  degree: "Bachelor of Computer Application",
  degreeShort: "BCA",
  startDate: "June 2022",
  endDate: "June 2025",
} as const;

export const collageDataMCA = {
  collage: "Indus University",
  degree: "Master of Computer Application",
  degreeShort: "MCA",
  startDate: "July 2025",
  endDate: "Present",
} as const;

export const schoolData = [
  {
    school: "N.M. High School",
    degree: "12th Commerce (H.S.C.)",
    startDate: "",
    endDate: "March 2022",
  },
  {
    school: "N.M. High School",
    degree: "10th (S.S.C.)",
    startDate: "",
    endDate: "March 2020",
  },
] as const;


export const skillBasedEducationData = [
  {
    title: "MERN Stack Web Development Bootcamp by Angela Yu",
    startDate: "May 2024",
    endDate: "May 2025",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    startDate: "May 2024",
    endDate: "May 2025",
  },
] as const;

export const experienceData = [
  {
    company: "Devstree IT Services",
    role: "Software Intern",
    startDate: "May 2024",
    endDate: "May 2025",
    subRoles: [
      {
        role: "Ex Software Intern",
        skills: [
          "Next JS",
          "React Js",
          "Typescript",
          "Ant Design",
          "Material Ui",
          "Tailwind Css",
        ],
        startDate: "May 2024",
        endDate: "May 2025",
        duration: "1 year", //TODO: MAke this dynamic later
        description:
          "Actively engaged in contributing to //large-scale live projects// , where I focus on implementing Clean Code principles to ensure the robustness and maintainability of the software  dedicated to achieving client satisfaction by translating project requirements into efficient and effective code solutions",
      },
      {
        role: "React / Ionic Trainee",
        skills: ["Ionic Framework", "React Js", "Javascript", "Bootstrap"],
        startDate: "May 2024",
        endDate: "May 2025",
        duration: "1 year", //TODO: MAke this dynamic later
        description: "Training in Ionic and React building practice projects",
      },
      {},
    ],
  },
  {
    company: "Viji Foods",
    role: "Team Lead Customer Service",
    startDate: "Jan 2022",
    endDate: "Nav 2022",
    duration: "11 Months",
  },
] as const;

export const line =
  "01001001 00100000 01100011 01100001 01101110 00100000 01100011 01100101 01101110 01110100 01100101 01110010 00100000 01100001 00100000 01100100 01101001 01110110";

export const ProjectsData: Project[] = [
  {
    title: "FitFolio",
    des: "Build an AI-powered Resume Analyzer with React, React Router, and Puter.js! Upload candidate resumes and automatically evaluate them using AI.",
    tech: ["React JS", "Puter.js", "Tailwind"],
    status: "Completed",
    href: "https://fitfolio.vercel.app/",
  },
  {
    title: "GenUI",
    des: "AI-driven web application generating responsive UI components using Gemini models with authentication, theming, and live preview.",
    tech: [
      "React JS",
      "Express.js + Node.js",
      "MongoDB",
      "Google Gemini API"
  ],
    status: "Completed",
    href: "https://genn-ui.netlify.app/",
  },
  {
    title: "RephraseAI",
    des: "AI-powered text editor that corrects grammar and spelling, providing users with accurate, refined sentences",
    tech: ["React JS", "Express.js + Node.js", "OpenAI API"],
    status: "Completed",
    href: "https://rephrase--ai.vercel.app/",
  },
  {
    title: "Appointment Booking Portal",
    des: "A web app for booking car service appontments",
    tech: ["Next JS", "MUI", "Tailwind"],
    status: "Completed",
  },
  {
    title: "Admin Panel",
    des: "An Admin Panel for managing the car service apps",
    tech: ["Crema Admin Panel Theme", "Ant design", "React JS"],
    status: "Completed",
  },
  {
    title: "AI 3D Talking Avatar Chat  Bot",
    des: "A 3D Avatar Chat Bot that can speak the chat output with lip sink",
    tech: ["Three JS", "Next JS", "Azure Speech API", "Tailwind", "Shadcn"],
    status: "Completed",
  },
] as const;
