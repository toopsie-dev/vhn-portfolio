import React, { useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import style from "../../assets/styles/_project.module.scss";
import { useProjectContext } from "../../context/ProjectContext";
import { ProjectType } from "../../types";

export const ProjectDetails = () => {
  const { projects, setSelectedProject } = useProjectContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const project =
    projects.find((proj) => proj.id === Number(id)) || location.state?.project;

  useEffect(() => {
    if (project) {
      setSelectedProject(project);
    }
  }, [project, setSelectedProject]);

  if (!project) return <p>No project selected.</p>;

  // Find previous and next projects
  const currentIndex = projects.findIndex((proj) => proj.id === project.id);
  const prevProject = projects[currentIndex - 1] || null;
  const nextProject = projects[currentIndex + 1] || null;

  // Navigate to a new project
  const handleNavigate = (newProject: ProjectType | null) => {
    if (newProject) {
      setSelectedProject(newProject);
      navigate(`/project-details/${newProject.id}`, {
        state: { project: newProject },
      });
    }
  };

  return (
    <div className="background">
      <div className={`content-width flex-center ${style["content-width"]}`}>
        <div
          className={`left-container flex-column flex-center ${style["left-container"]}`}
        >
          <a
            href={project.preview_link}
            target="_blank"
            className={style["image-wrapper"]}
          >
            <img
              src={project.image_url}
              alt={project.title}
              className={style["project-image"]}
            />
            <div className={style["overlay"]}>
              <p className="text">preview</p>
            </div>
          </a>
          <div className={style["navigate"]}>
            <IoIosArrowDropleft
              onClick={() => handleNavigate(prevProject)}
              className={`${style["arrow"]} ${style["arrow-left"]}`}
            />
            <IoIosArrowDropright
              onClick={() => handleNavigate(nextProject)}
              className={`${style["arrow"]} ${style["arrow-right"]}`}
            />
          </div>
        </div>
        <div
          className={`right-container flex-start flex-column ${style["right-container"]}`}
        >
          <h3 className="text">{project.title}</h3>
          <h4 className="text">{project.type}</h4>
          <p className="text paragraph">{project.description}</p>
          {project.github_link && (
            <React.Fragment>
              <h4 className="text">gitHub link : </h4>
              <a href={project.github_link} target="_blank" className="text">
                {project.github_link}
              </a>
            </React.Fragment>
          )}
          <h4 className="text">tech stack : </h4>
          <ul>
            {project.tech_stack?.map((tech: string, index: number) => (
              <li key={index}>
                <img
                  src={`./tech-stack/${tech}.png`}
                  alt={tech}
                  className={style["tech-stack-logo"]}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
