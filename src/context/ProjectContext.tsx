/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { ProjectContextType, ProjectType } from "../types";

export const ProjectContext = createContext<ProjectContextType>({
  projects: [],
  selectedProject: null,
  setSelectedProject: () => {},
});

const initialProjects: ProjectType[] = [
  {
    id: 1,
    image_url: "/Fitness-.png",
    title: "Fitness Gym",
    type: "personal project",
    description:
      "Fitness Gym is my first personal project using React.js and Vite. It is a single-page application with various components and sections. It includes classes, achievements, different coaches, and information about fitness. The project also features different membership plans per month, a carousel placeholder for testimonials, a fitness blog with a hide-and-show feature, and a contact section.",
    tech_stack: ["reactjs", "vite", "css"],
    preview_link: "https://toopsie-dev.github.io/fitness/",
  },
  {
    id: 2,
    image_url: "/Pinnacle-.png",
    title: "Pinnacle Law",
    type: "personal project",
    description:
      "Pinnacle Law is my second project built with React.js and Vite, using modular CSS. I also incorporated TypeScript for the first time and enjoyed learning how it works. The project includes various sections such as services, areas of expertise, about us, a client testimonials carousel, and a contact section. Additionally, I implemented email functionality using EmailJS, allowing emails to be sent without a backend.",
    tech_stack: ["reactjs", "vite", "typescript", "css"],
    preview_link: "https://toopsie-dev.github.io/pinnacle-law/",
  },
  {
    id: 3,
    image_url: "/Wordpress-.png",
    title: "My portfolio - Wordpress",
    type: "personal project",
    description:
      "This is my first personal portfolio built using WordPress. I utilized Elementor Builder along with custom CSS to enhance the design. I applied the knowledge and experience I gained from my first job as a web developer at GoCrayons. My portfolio includes client-based projects from my time at the company, featuring both motivational websites and eCommerce websites.",
    tech_stack: ["wordpress", "elementor", "css"],
    preview_link: "https://dev-vhn.pantheonsite.io/",
  },
  {
    id: 4,
    image_url: "/Microforum-.png",
    title: "Microforum",
    type: "client-based project",
    description:
      "One of my areas of expertise as a web developer is Webflow CMS. I enjoy creating websites using this platform, especially when customizing its components to achieve a unique design. One of my major projects is Microforum, an eCommerce website built using Webflow.",
    tech_stack: ["webflow", "css"],
    preview_link: "https://www.microforum.ca/",
  },
  {
    id: 5,
    image_url: "/Sorting-.png",
    title: "File Sorting Management - Gleent",
    type: "company project",
    description:
      "During my internship at Gleent Company, I worked on a simple project using Laravel focused on file sorting management. The system featured different account controls, a dashboard displaying process counts, and sections for forms and meetings. It also included tables for all posts, processes, forms, and meetings. As an admin, users could modify departments for better organization. Additionally, I applied database management to ensure efficient data handling and system performance.",
    tech_stack: ["laravel", "php", "mysql", "bootstrap", "css", "jquery"],
    preview_link: "https://filesorting.free.nf/",
  },
  {
    id: 6,
    image_url: "/Pokedex-.png",
    title: "Pokedex",
    type: "company technical exam",
    description:
      "Pokedex was my technical exam project at Multisys, where I developed a feature focused on capturing and managing Pokemon. The project aimed to replicate a functional Pokédex, allowing users to explore and track different Pokémon, their abilities, and attributes.",
    tech_stack: ["reactjs", "vite", "tailwind", "css"],
    preview_link: "#",
  },
  {
    id: 7,
    image_url: "/Portfolio-.png",
    title: "Portfolio - current",
    type: "personal project",
    description:
      "This is my second portfolio, and I am currently using it to showcase my skills and projects. I built it using React.js and Vite, incorporating Sass for styling to achieve a clean and modern design. One of the key features of this portfolio is the dark/light theme toggle, allowing users to switch between themes for a better viewing experience. Working on this portfolio has been a great learning experience, allowing me to enhance my React skills while applying best practices in modern web development. I continuously update and improve it as I explore new technologies and techniques.",
    tech_stack: ["reactjs", "vite", "css", "sass"],
    preview_link: "#",
  },
];

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [projects] = useState<ProjectType[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const contextValue: ProjectContextType = {
    projects,
    selectedProject,
    setSelectedProject,
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
