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
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/seminar" element={<Seminars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />

        {/* Handle unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ProjectProvider>
  );
};
