/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import style from "../../assets/styles/_project.module.scss";
import { useProjectContext } from "../../context/ProjectContext";
import { ProjectType } from "../../types";

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  const navigate = useNavigate();
  const { setSelectedProject } = useProjectContext();

  const handleClick = () => {
    setSelectedProject(project);
    // navigate(`/project-details/${project.id}`, { state: { project } });
    navigate(`/project-details/${project.id}`);
  };

  return (
    <div className={style["project-card"]} onClick={handleClick}>
      <img
        src={project.image_url}
        alt={project.title}
        className={style["project-image"]}
      />
      <h4 className="text">{project.title}</h4>
    </div>
  );
};
