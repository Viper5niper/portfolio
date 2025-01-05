import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import autoloters from "@/public/autoloters.jpeg";
import pintasal from "@/public/pintasal.png";
// import sprinkleron from "@/public/sprinkleron.png";
import domohome from "@/public/domohome.png";
import tmngr from "@/public/tmngr.png";
import jsa from "@/public/jsa.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelancer Developer",
    location: "",
    description:
    "The projects I worked in include: vending machine firmware using Arduino and C++, sports social media app with Flutter and Firebase for real-time updates, POS systems with Laravel and a stock management system made with MS Access.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan. 2020 - May. 2021",
  },
  {
    title: "Web Developer Contract",
    location: "RS Rent a Car",
    description:
    "I automated several processes for the repair shops inside this company. These processes include budgets, weekly money flow reports, insurance-specific budgets, workload reports, and job progress tracking. I implemented Laravel, MySQL and Hostinger for these projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun. 2021 - Jan. 2022",
  },
  {
    title: "Full-stack Developer & Customer Support",
    location: "Open Solutions Systems",
    description:
    "At this company, I provided technical support for multiple customers of our POS and stock management system (PHP, Codeigniter, Vue.js, JQuery). This job required me to fix bugs and develop new features for each individual system as well. This included deployment of changes to our main server via SSH or FileZilla and control of critical database changes. Customers for this company include hospitals, drugstores, mechanical workshops, financial services, ophthalmological services, convenience stores, etc.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb. 2022 - Aug. 2022",
  },
  {
    title: "Full-stack Developer",
    location: "Focus IT Outsourcing",
    description:
    "I collaborated with a USA-based client on an ERP software for franchises, utilizing the MERN stack. My responsibilities included designing, developing, maintaining the application, and managing Docker container deployments to our Digital Ocean servers. I participated in scrum meetings and provided technical support to junior developers.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 2022 - Aug. 2023",
  },
  {
    title: "Graduated as Software Engineer",
    location: "National University of El Salvador",
    description:
      "I graduated as a Software Engineer, while working full-time as a full-stack developer in my third formal job.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Ssr full-stack Developer",
    location: "CityLab",
    description:
      "I contributed to the development of a nationwide ERP system for El Salvador’s national water utility company (ANDA). While I mainly worked as a back-end developer (SQL SERVER, T-SQL, .NET, AWS), my duties also extended to the web app (React.js, Tailwind, Zustand), a mobile app (React Native) and a form template system to automate approximately 150 different processes inside ANDA’s duties. I also helped in the development of an stock management system for El Salvador's National Healthcare Ministry (Vue.js, Node.js, PostgreSQL), which was oriented to manage medical supplies at a nationwide level.",
    icon: React.createElement(FaReact),
    date: "Sep. 2023 - Oct. 2024",
  },
] as const;

export const projectsData = [
  {
    title: "RS Repair Shop System",
    description:
      "It's a platform to manage clients and services, check earnings, expenses and generate reports for insurance companies. It has features like filtering, sorting and pagination.",
    tags: ["PHP", "Laravel", "MySQL"],
    imageUrl: autoloters,
  },
  {
    title: "RS Body & Paint Shop System",
    description:
      "An evolution of the previous system, it aggregates tools to track jobs in progress, manage job load and track expenses for each individual job.",
    tags: ["PHP", "Laravel", "MySQL"],
    imageUrl: pintasal,
  },
  {
    title: "UES Thesis Manager",
    description:
      "Web and mobile app to control thesis projects all around my university.",
    tags: ["React", "Apache Cordova", "Context API", "Materialize CSS", "MySQL", "PHP", "Slim Framework"],
    imageUrl: tmngr,
  },
  {
    title: "DomoHome",
    description:
      "This Web App allows you to control and program your sprinklers, lights and other devices from your phone or PC.",
    tags: ["React", "Materialize CSS", "MySQL", "PHP", "Arduino", "Cron Jobs"],
    imageUrl: domohome,
  },
  {
    title: "Sports Social Media",
    description:
      "Social media app oriented to promoting sports and a healthy lifestyle. It has features like posting, commenting, liking, and searching for sport events in your area.",
    tags: ["Flutter", "Firebase"],
    imageUrl: jsa,
  },
] as const;

        {/*
        - PHP (Laravel, CodeIgniter, Wordpress, Symfony)
        - JavaScript / Typescript (React, Vue, Node.js, Express, NestJS, Prisma)
        - Databases (MySQL, PostgreSQL, MongoDB, Redis)
        - Mobile (React Native, Flutter, Java)
        - DevOps (Docker, GitLab CI, AWS, DigitalOcean)

         */}
export const skillsData = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "C#",
  "HTML",
  "CSS",
  "jQuery",
  "Tailwind",
  "React",
  "Redux",
  "Zustand",
  "Vue",
  "Vuex",
  "Next.js",
  "Flutter",
  "Node.js",
  "Express",
  "NestJS",
  "Prisma",
  "Laravel",
  "CodeIgniter",
  ".NET",
  "Git",
  "Github",
  "GitLab",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQLServer",
  "Redis",
  "Firebase",
  "Docker",
  "AWS",
  "Digital Ocean",
] as const;
