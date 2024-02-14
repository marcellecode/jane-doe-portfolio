import logo from "./logo.svg";
import "./App.css";
import Bio from "./sections/bio/bio";
import Navbar from "./components/navbar/navbar";
import React, { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("section1");

  const sections = [
    { id: 'home', path: "#home" },
    { id: 'about', path: "#about" },
    { id: 'services', path: "#services" },
    { id: 'contact', path: "#contact" },
  ];

  return (
    <div className="App">
      <Navbar navItems={sections} />
      <section id="bio" className={`section ${isActive ? "active" : ""}`}>
        <Bio />
      </section>
    </div>
  );
}

export default App;
