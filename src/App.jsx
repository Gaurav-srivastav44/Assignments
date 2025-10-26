import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioHero from "./PortfolioHero";
import About from "./About";
import Projects from "./Projects";
import Work from "./Work";
import Contact from "./Contact";
import "./index.css"; // Tailwind CSS import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioHero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
