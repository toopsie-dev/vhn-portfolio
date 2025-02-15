import { motion } from "framer-motion";
import style from "../assets/styles/_project.module.scss";
import { useProjectContext } from "../context/ProjectContext";
import { ProjectType } from "../types";
import { ProjectCard } from "./projects/ProjectCard";

export const Projects = () => {
  const { projects } = useProjectContext();

  return (
    <div className="background">
      <div
        className={`content-width flex-center ${
          (style["content-width"], style["project-container"])
        }`}
      >
        <div className="content">
          {projects.length > 0 &&
            projects.map((project: ProjectType) => (
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
