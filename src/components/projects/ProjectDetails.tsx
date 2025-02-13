/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation } from "react-router-dom";
import style from "../../assets/styles/_project.module.scss";

export const ProjectDetails = () => {
  // const { id } = useParams();
  const location = useLocation();
  const project = location.state?.project;

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="background">
      <div className={`content-width flex-center ${style["content-width"]}`}>
        <div
          className={`left-container flex-center ${style["left-container"]}`}
        >
          <img
            src={project.image_url}
            alt={project.title}
            className={style["project-image"]}
          />
        </div>
        <div
          className={`right-container flex-start flex-column ${style["right-container"]}`}
        >
          <h3 className="text">{project.title}</h3>
          <h4 className="text">Client-Based Project</h4>
          <p className="text paragraph">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
          <h4 className="text">tech stack : </h4>
          <ul>
            <li>
              <img src="/vite.svg" alt="" />
            </li>
            <li>
              <img src="/vite.svg" alt="" />
            </li>
            <li>
              <img src="/vite.svg" alt="" />
            </li>
          </ul>
          <button>Preview</button>
        </div>
      </div>
    </div>
  );
};
