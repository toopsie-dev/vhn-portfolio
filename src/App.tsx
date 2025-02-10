import { Header } from "./components/layouts/header";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className={`container ${theme}`}>
      <Header />
      <div className="content-width background flex-center">
        <h1 className="text">Hello Mabuhay!</h1>

        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
