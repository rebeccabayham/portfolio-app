import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import ProjectIceland from "./components/ProjectIceland";
import ProjectRIT from "./components/ProjectRIT";
import ProjectCRIS from "./components/ProjectCRIS";
import ProjectLibrary from "./components/ProjectLibrary";
import ProjectCamden from "./components/ProjectCamden";
import Contact from "./components/Contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="projects">
          <Route path="iceland-tour" element={<ProjectIceland />} />
          <Route path="rit" element={<ProjectRIT />} />
          <Route path="cris" element={<ProjectCRIS />} />
          <Route path="library" element={<ProjectLibrary />} />
          <Route path="camden-arcgis-api" element={<ProjectCamden />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;