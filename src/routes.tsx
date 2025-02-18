import { Navigate, Route, Routes } from "react-router";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { ProjectDetails } from "./components/projects/ProjectDetails";
import { Seminars } from "./components/Seminars";
import { Skills } from "./components/Skills";
import { ProjectProvider } from "./context/ProjectContext";

export const AppRoutes = () => {
  return (
    <ProjectProvider>
      <Routes>
        {/* Redirect /vhn-portfolio to / */}
        <Route path="/vhn-portfolio" element={<Navigate to="/" replace />} />

        {/* Main Routes */}
        <Route path="/" element={<Banner />} />
        <Route path="/vhn-portfolio/" element={<Banner />} />
        <Route path="/vhn-portfolio/about" element={<About />} />
        <Route path="/vhn-portfolio/projects" element={<Projects />} />
        <Route path="/vhn-portfolio/skills" element={<Skills />} />
        <Route path="/vhn-portfolio/seminar" element={<Seminars />} />
        <Route path="/vhn-portfolio/contact" element={<Contact />} />
        <Route
          path="/vhn-portfolio/project-details/:id"
          element={<ProjectDetails />}
        />

        {/* Handle unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ProjectProvider>
  );
};
