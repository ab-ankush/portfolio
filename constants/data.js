import React from "react";
import AiImageGenerator from "../assets/images/ai-image-generator.png";
import AnimePediaImage from "../assets/images/AnimePedia.png";
import YelpCampImage from "../assets/images/Yelp-Camp.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { Html } from "next/document";

export const links = [
  {
    name: "Home",
    href: "#Home",
  },
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Projects",
    href: "#Projects",
  },
  {
    name: "Skills",
    href: "#Skills",
  },
  {
    name: "Experience",
    href: "#Experience",
  },
  {
    name: "Contact",
    href: "#Contact",
  },
];

export const ProjectsData = [
  {
    name: "YelpCamp",
    description:
      "A full-stack web application focused on creating an immersive and user-friendly experience for camping enthusiasts.",
    image: YelpCampImage,
    tags: [
      "Html",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "Mapbox",
    ],
    link: "https://fine-tan-pronghorn-suit.cyclic.app/",
  },
  {
    name: "AnimePedia",
    description:
      "A FrontEnd web application that showcases the details and updates related anime and manga.",
    image: AnimePediaImage,
    tags: ["Html", "CSS", "JavaScript", "JQuery"],
    link: "https://ab-ankush.github.io/AnimePedia/",
  },
  {
    name: "AI Image Generator",
    description:
      "A FullStack web application that generates images on specific prompts using OpenAI's Dall-E API.",
    image: AiImageGenerator,
    tags: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "OpenAI",
      "MongoDB",
      "Cloudinary",
    ],
    link: "https://ai-image-generator-pearl.vercel.app/",
  },
];

export const SkillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "MongoDB",
  "Node.js",
  "Express.js",
  "REST API",
  "bootstrap",
  "Material UI",
  "PostgreSQL",
  "VS Code",
  "Git",
  "GitHub",
  "JWT",
  "Cloudinary",
  "Mapbox",
];

export const experiencesData = [
  {
    title: "Full-Stack Developer Intern",
    location: "Suvidha Foundation",
    description:
      "Led dynamic full-stack web development creating a platform to create and explore fundraisers for noble causes.",
    icon: React.createElement(FaReact),
    date: "June 2022 - July 2022",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Murtiwala",
    description:
      "Contributed to a rewarding Internship, playing a key role in developing a website to showcase and sell idols.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - August 2022",
  },
];