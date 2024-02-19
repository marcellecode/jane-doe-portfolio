import React, { useState } from "react";
import "./navbar.css";
import { TfiAlignJustify } from "react-icons/tfi";

const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="menu-icon">
        <button onClick={toggleMenu} className="menuToggle">
          <TfiAlignJustify />
        </button>
      </div>
      <div
        className={`menuOverlay ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />
      <div className={`menuContainer ${isOpen ? "open" : ""}`}>
        <button onClick={toggleMenu}>Fechar</button>
        <nav>
          <ul>
            <li>
              <a href="#bio" onClick={() => {toggleMenu(); setActiveSection('bio');}}>
                bio
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => {toggleMenu(); setActiveSection('portfolio');}}>
                portfolio
              </a>
            </li>
            <li>
              <a href="#podcast" onClick={() => {toggleMenu(); setActiveSection('podcast');}}>
                podcast
              </a>
            </li>
            <li>
              <a href="#blog" onClick={() => {toggleMenu(); setActiveSection('blog');}}>
                blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
