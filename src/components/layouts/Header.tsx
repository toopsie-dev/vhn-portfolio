import { IoMoonSharp, IoSunnyOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import style from "../../assets/styles/_navbar.module.scss";
import { useThemeContext } from "../../context/ThemeContext";

export const Header = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className={theme}>
      <div className={`container background flex-between ${style.container}`}>
        <RxHamburgerMenu size={35} color="#f8f9fa" className="icon" />
        {theme === "light" ? (
          <IoMoonSharp
            color="#f8f9fa"
            className="icon"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <IoSunnyOutline
            color="#f8f9fa"
            className="icon"
            onClick={() => setTheme("light")}
          />
        )}
      </div>
    </div>
  );
};
