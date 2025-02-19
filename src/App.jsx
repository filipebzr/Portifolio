import { Routes, Route } from "react-router-dom";
import LinkedInProfile from "./components/LinkedinProfile";
import ProjectsGeo from "./Pages/ProjectsGeo";
import ProjectsTech from "./Pages/ProjectsTech";
import NotFoundPage from "./Pages/NotFoundPage";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LinkedInProfile />} />
      <Route path="/geo" element={<ProjectsGeo />} />
      <Route path="/tech" element={<ProjectsTech />} />
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
    </>
  );
}
