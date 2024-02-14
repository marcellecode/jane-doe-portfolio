import React, { useState } from "react";
import "./navbar.css";
import { TfiAlignJustify } from "react-icons/tfi";

const Navbar = ({navItems}) => {
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
            {navItems.map(item => (
              <li>
                <a href={navItems.path} onClick={toggleMenu}>
                  {navItems.id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
