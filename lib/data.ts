import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dashboard from "@/public/dashboard.png";
import figma from "@/public/figma.png";
import digitalhippo from "@/public/digitalhippo.png";
import resumebuilder from "@/public/resumebuilder.png";
import codepen from "@/public/codepen.png";
import comfysloth from "@/public/comfysloth.png";
import constructor from "@/public/constructor.png";

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
    title: "High School",
    location: "Egypt",
    description:
      "I studying scientific mathematics in High School afsd fasdfasdasdfasdfasdf.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "React.js Developer",
    location: "India",
    description:
      "I worked as a front-end developer in Sync Intern's intership for 1 month. i Built Many projects .I also up skilling to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Up Skilling to Full stack With Laravel",
    location: "Egypt",
    description:
      "I also up skilling to the full stack to be React next Laravel and mysql.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dashboard",
    description:
      "I worked as a Frontend developer on this Dashboard.",
    tags: ["React", "Next.js", "Tailwind", "Nivo Charts"],
    imageUrl: dashboard,
  },
  {
    title: "Figma Clone",
    description:
      "I worked as a Frontend developer on this Figma Clone.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "LiveBlocks"],
    imageUrl: figma,
  },
  {
    title: "Digital Hippo",
    description:
      "I worked as a fullstack developer on this digitalHippo.",
    tags: ["React", "Next.js", "Jspdf", "Tailwind", "Payload", "mongodb"],
    imageUrl: digitalhippo,
  },
  {
    title: "Resume Builder",
    description:
      "I worked as a Frontend developer on this Resume Builder.",
    tags: ["React", "Next.js", "Jspdf", "Tailwind"],
    imageUrl: resumebuilder,
  },
  {
    title: "Codepen Clone",
    description:
      "I worked as a Frontend developer on this Codepen Clone.",
    tags: ["React", "Next.js","Tailwind"],
    imageUrl: codepen,
  },
  {
    title: "Comfy Sloth",
    description:
      "I worked as a Frontend developer on this Comfy Sloth.",
    tags: ["React", "Auth0","Tailwind", "Redux", "Mui"],
    imageUrl: comfysloth,
  },
  {
    title: "Constructor Company",
    description:
      "I worked as a Frontend developer and Ui on this constructor company.",
    tags: ["HTML", "CSS","JS", "Google Search Console"],
    imageUrl: constructor,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Mysql",
  "Mui",
  "OOP",
  "Algorithm",
  "Data Structure",
  "Soft Skills",
  "Clean Code"
] as const;
