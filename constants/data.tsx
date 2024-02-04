export const collageData = {
  collage: "Silver Oak University",
  degree: "Bachelor of Technology in Information Technology",
  startDate: "June 2022",
  endDate: "June 2026",
} as const;

export const schoolData = [
  {
    school: "Ankur High School",
    degree: "Higher Secondary School Certificate",
    startDate: "",
    endDate: "",
  },
  {
    school: "Ankur High School",
    degree: "Secondary School Certificate",
    startDate: "June 2010",
    endDate: "June 2022",
  },
] as const;

export const skillBasedEducationData = [
  {
    title: "MERN Stack Web Development Bootcamp by Angela Yu",
    startDate: "April 2023",
    endDate: "Present",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    startDate: "April 2023",
    endDate: "Present",
  },
] as const;

export const experienceData = [
  {
    company: "Devstree It Services",
    role: "Jr Software Developer",
    startDate: "April 2022",
    endDate: "Present",
    subRoles: [
      {
        role: "Junior Software Developer",
        skills: [
          "Next JS",
          "React Js",
          "Typescript",
          "Ant Design",
          "Material Ui",
          "Tailwind Css",
        ],
        startDate: "July 2023",
        endDate: "Present",
        duration: "8 Months", //TODO: MAke this dynamic later
        description:
          "Actively engaged in contributing to //large-scale live projects// , where I focus on implementing Clean Code principles to ensure the robustness and maintainability of the software  dedicated to achieving client satisfaction by translating project requirements into efficient and effective code solutions",
      },
      {
        role: "React / Ionic Trainee",
        skills: ["Ionic Framework", "React Js", "Javascript", "Bootstrap"],
        startDate: "April 2023",
        endDate: "June 2023",
        duration: "3 Months", //TODO: MAke this dynamic later
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
