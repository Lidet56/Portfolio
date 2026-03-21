import { Route, Routes } from "react-router-dom";
import SharedLayout from "../components/Layout.jsx/SharedLayout";
import Home from "../pages/Home";
import About from "../components/About/About";
import Services from "../pages/Services/Services";
import Skills from "../components/Skills/Skills";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact.jsx";
import Resume from "../pages/Resume/Resume";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="projects" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}