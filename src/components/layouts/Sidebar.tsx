import { Link } from "react-router";
import style from "../../assets/styles/_sidebar.module.scss";
import { useThemeContext } from "../../context/ThemeContext";

export const Sidebar = () => {
  const { setShowSideBar } = useThemeContext();

  const handleHideSidebar = () => {
    setShowSideBar(false);
  };

  return (
    <div className={style["container"]}>
      <ul>
        <Link to="/" onClick={handleHideSidebar} className="background">
          <li className="text">Home</li>
        </Link>
        <Link to="/about" onClick={handleHideSidebar} className="background">
          <li className="text">About Me</li>
        </Link>
        <Link to="/projects" onClick={handleHideSidebar} className="background">
          <li className="text">Projects</li>
        </Link>
        <Link to="/skills" onClick={handleHideSidebar} className="background">
          <li className="text">Skills</li>
        </Link>
        <Link to="/seminar" onClick={handleHideSidebar} className="background">
          <li className="text">Seminars</li>
        </Link>
        <Link to="/contact" onClick={handleHideSidebar} className="background">
          <li className="text">Contact</li>
        </Link>
      </ul>
    </div>
  );
};
