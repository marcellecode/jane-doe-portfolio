import React, { useState } from "react";
import "./navbar.css";
import { TfiAlignJustify } from "react-icons/tfi";

const Navbar = () => {
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
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
