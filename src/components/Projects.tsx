import { motion } from "framer-motion";
import { ProjectCard } from "./projects/ProjectCard";

export const Projects = () => {
  interface ProjectType {
    id: number;
    image_url: string;
    title: string;
  }

  const projects: ProjectType[] = [
    {
      id: 1,
      image_url: "/Fitness-.png",
      title: "Fitness Gym",
    },
    {
      id: 2,
      image_url: "/Pinnacle-.png",
      title: "Pinnacle Law",
    },
    {
      id: 3,
      image_url: "/Wordpress-.png",
      title: "My portfolio - Wordpress",
    },
    {
      id: 4,
      image_url: "/Microforum-.png",
      title: "Microforum",
    },
    {
      id: 5,
      image_url: "/Sorting-.png",
      title: "File Sorting Management - Gleent",
    },
    {
      id: 6,
      image_url: "/Pokedex-.png",
      title: "Pokedex",
    },
  ];

  return (
    <div className="background">
      <div className="content-width flex-center">
        <div className="content">
          {projects.length > 0 &&
            projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};
