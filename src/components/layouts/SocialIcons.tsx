import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import style from "../../assets/styles/_social-toggle.module.scss";

export const SocialToggle = () => {
  return (
    <div className={style["container"]}>
      <span>
        <a href="https://www.facebook.com/lilismelvin07" target="_blank">
          <FaFacebook className="icon" />
        </a>
      </span>
      <span>
        <a href="https://github.com/toopsie-dev" target="_blank">
          <FaGithub className="icon" />
        </a>
      </span>
      <span>
        <a href="https://www.instagram.com/yaksu07/" target="_blank">
          <FaInstagram className="icon" />
        </a>
      </span>
      <span>
        <a
          href="https://www.linkedin.com/in/melvin-lilis-7ba8421bb/"
          target="_blank"
        >
          <FaLinkedin className="icon" />
        </a>
      </span>
    </div>
  );
};
