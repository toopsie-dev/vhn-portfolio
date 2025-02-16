import style from "../../assets/styles/_seminar.module.scss";
import { SeminarCardProps } from "../../types";

export const SeminarCard: React.FC<SeminarCardProps> = ({ seminar }) => {
  console.log(seminar);
  return (
    <div className={style["seminar-card-container"]}>
      <div className={style["image-box"]}>
        <img src={seminar.img_url} alt={seminar.title} />
      </div>
      <div className={style["content-box"]}>
        <h4 className="text">{seminar.title}</h4>
        <p className="text">{seminar.description}</p>
        <h5 className="text">- {seminar.implemented}</h5>
      </div>
    </div>
  );
};
