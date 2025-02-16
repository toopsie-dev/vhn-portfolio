import React, { useState } from "react";
import style from "../../assets/styles/_skills.module.scss";
import { SkillCardProps } from "../../types";
import { SkillModal } from "./SkillModal";

export const SkillsCard: React.FC<SkillCardProps> = ({ tech }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isModalOpen) {
    document.body.classList.add(style["active-modal"]);
  } else {
    document.body.classList.remove(style["active-modal"]);
  }

  return (
    <>
      <span className={style["tech-box"]} onClick={handleShowModal}>
        <img src={tech.img_url} alt={tech.title} />
        <h6 className="text">{tech.title}</h6>
      </span>

      {isModalOpen && <SkillModal tech={tech} onClose={handleCloseModal} />}
    </>
  );
};
