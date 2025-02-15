import { BrowserRouter as Router } from "react-router";
import { Header } from "./components/layouts/Header";
import { Sidebar } from "./components/layouts/Sidebar";
import { SocialToggle } from "./components/layouts/SocialIcons";
import { useThemeContext } from "./context/ThemeContext";
import { AppRoutes } from "./routes";

function App() {
  const { theme, isOpen, showSideBar } = useThemeContext();

  return (
    <Router>
      <div className={`container ${theme}`}>
        {/* Navigation component */}
        <Header />
        {showSideBar && <Sidebar />}
        {isOpen && <SocialToggle />}

        {/* Routes */}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
