import { useNavigate } from "react-router-dom";
import style from "../../assets/styles/_project.module.scss";

interface ProjectCardProps {
  project: {
    id: number;
    image_url: string;
    title: string;
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project-details/${project.id}`, { state: { project } });
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
