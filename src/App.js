import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Bio from "./sections/bio/bio";
import Navbar from "./components/navbar/navbar";
import Blog from "./sections/blog/blog";
import Portfolio from "./sections/portfolio/portfolio";

function App() {
  const [activeSection, setActiveSection] = useState("bio");

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />
      <div className="section-container">
        {activeSection === "bio" && <Bio isActive={activeSection === "bio"} />}
        {activeSection === "blog" && (
          <Blog isActive={activeSection === "blog"} />
        )}
        {activeSection === "portfolio" && (
          <Portfolio isActive={activeSection === "portfolio"} />
        )}
      </div>
    </div>
  );
}

export default App;
