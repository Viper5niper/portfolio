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

import volcano from "@/public/landscapes/volcano.jpg";
import cane_fields from "@/public/landscapes/cane_fields.jpg";
import lake from "@/public/landscapes/lake.jpg";
import beach from "@/public/landscapes/beach.jpg";

export const landscapesData = [
  {
    title: "Beach",
    url: beach
  },
  {    
    title: "Lake",
    url: lake
  },
  {    
    title: "Volcano",
    url: volcano
  },
  {    
    title: "Cane Fields",
    url: cane_fields
  }
]

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
    "The projects I worked on include: vending machine firmware using Arduino and C++, a sports social media app built with Flutter and Firebase for real-time updates, POS systems using Laravel, and a stock management system developed with MS Access.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan. 2020 - May. 2021",
  },
  {
    title: "Web Developer Contract",
    location: "RS Rent a Car",
    description:
    "I automated several processes for the company's repair shops, including budgets, weekly cash flow reports, insurance-specific budgets, workload reports, and job progress tracking. I used Laravel, MySQL, and Hostinger to implement these projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun. 2021 - Jan. 2022",
  },
  {
    title: "Full-stack Developer & Customer Support",
    location: "Open Solutions Systems",
    description:
    "At Open Solution Systems, I provided technical support for clients using our POS and stock management system (PHP, CodeIgniter, Vue.js, jQuery). My role involved fixing bugs, developing new features, and deploying changes to the main server via SSH or FileZilla. I also managed critical database changes. Our clients included hospitals, drugstores, mechanical workshops, financial services, ophthalmological clinics, convenience stores, and more.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb. 2022 - Aug. 2022",
  },
  {
    title: "Full-stack Developer",
    location: "Focus IT Outsourcing",
    description:
    "I collaborated with a USA-based client to develop ERP software for franchises, utilizing the MERN stack. My responsibilities included designing, developing, and maintaining the application, as well as managing Docker container deployments to our DigitalOcean servers. I actively participated in scrum meetings and provided technical support to junior developers.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 2022 - Sep. 2023",
  },
  {
    title: "Graduated as Software Engineer",
    location: "National University of El Salvador (UES)",
    description:
      "Graduated with a degree in Software Engineering while working full-time as a Full-Stack Developer",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Ssr full-stack Developer",
    location: "CityLab",
    description:
      "I contributed to the development of a nationwide ERP system for El Salvador’s national water utility company (ANDA). While my primary focus was back-end development (SQL Server, T-SQL, .NET, AWS), I also worked on the web app (React.js, Tailwind, Zustand), a mobile app (React Native), and a form template system to automate approximately 150 different processes within ANDA’s operations. Additionally, I assisted in the development of a stock management system for El Salvador's National Healthcare Ministry (Vue.js, Node.js, PostgreSQL), designed to manage medical supplies nationwide.",
    icon: React.createElement(FaReact),
    date: "Sep. 2023 - Feb. 2025",
  },
] as const;

export const projectsData = [
  {
    title: "RS Repair Shop System",
    description:
      "It is a platform designed to manage clients and services, track earnings and expenses, and generate reports for insurance companies. Key features include filtering, sorting, and pagination.",
    tags: ["PHP", "Laravel", "MySQL"],
    imageUrl: autoloters,
    gallery: [autoloters, pintasal, domohome]
  },
  {
    title: "RS Body & Paint Shop System",
    description:
      "An enhanced version of the previous system, it provides tools to monitor jobs in progress, balance workloads, and track expenses for each job.",
    tags: ["PHP", "Laravel", "MySQL"],
    imageUrl: pintasal,
    gallery: [autoloters, pintasal, domohome]
  },
  {
    title: "UES Thesis Manager",
    description:
      "UES Thesis Manager is a web and mobile application designed to manage thesis projects across the university.",
    tags: ["React", "Apache Cordova", "Context API", "Materialize CSS", "MySQL", "PHP", "Slim Framework"],
    imageUrl: tmngr,
    gallery: [autoloters, pintasal, domohome]
  },
  {
    title: "DomoHome",
    description:
      "Web application that lets you control and schedule your sprinklers, lights, and other devices from your phone or PC.",
    tags: ["React", "Materialize CSS", "MySQL", "PHP", "Arduino", "Cron Jobs"],
    imageUrl: domohome,
    gallery: [autoloters, pintasal, domohome]
  },
  {
    title: "Sports Social Media",
    description:
      "It is a platform designed to promote sports and a healthy lifestyle. It includes features such as posting, commenting, liking, and searching for sporting events in your area.",
    tags: ["Flutter", "Firebase"],
    imageUrl: jsa,
    gallery: [autoloters, pintasal, domohome]
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
