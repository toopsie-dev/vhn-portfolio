import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiSocialDribbble } from "react-icons/ti";
import style from "../../assets/styles/_navbar.module.scss";
import { useThemeContext } from "../../context/ThemeContext";

export const Header = () => {
  const { theme, setTheme, isOpen, setIsOpen } = useThemeContext();

  return (
    <div className={theme}>
      <div className={`container background flex-between ${style.container}`}>
        <RxHamburgerMenu className="icon" />
        <div className={style["theme-container"]}>
          <TiSocialDribbble
            className="icon"
            onClick={() => setIsOpen(!isOpen)}
          />
          {theme === "light" ? (
            <BsToggle2Off className="icon" onClick={() => setTheme("dark")} />
          ) : (
            <BsToggle2On className="icon" onClick={() => setTheme("light")} />
          )}
        </div>
      </div>
    </div>
  );
};
