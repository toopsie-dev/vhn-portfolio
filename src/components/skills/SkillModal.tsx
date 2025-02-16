import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import style from "../../assets/styles/_skills.module.scss";
import { SkillModalProps } from "../../types";

export const SkillModal: React.FC<SkillModalProps> = ({ tech, onClose }) => {
  console.log(tech);

  return (
    <div className={style["modal"]}>
      <div className={style["overlay"]}>
        <div className={style["modal-content"]}>
          <IoIosCloseCircleOutline
            className={style["close-modal"]}
            onClick={() => onClose()}
          />
          <div className={style["left-container"]}>
            <img src={tech.img_url} alt={tech.title} />
            <h3>{tech.title}</h3>
          </div>
          <div className={style["right-container"]}>
            <ul>
              {tech.details.map((prop, index) => (
                <span key={index}>
                  <li>{prop}</li>
                </span>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
