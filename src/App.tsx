import { Header } from "./components/layouts/header";
import { SocialToggle } from "./components/layouts/SocialIcons";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, isOpen } = useThemeContext();

  return (
    <div className={`container ${theme}`}>
      <Header />
      {isOpen && <SocialToggle />}
      <div className="background flex-center">
        <div className="content-width"></div>
      </div>
    </div>
  );
}

export default App;
