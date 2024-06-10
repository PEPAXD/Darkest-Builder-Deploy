import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/MainHeader.css";

//IMPORT COMPONENTS
import { Squash as Hamburger } from "hamburger-react";

function MainHeader({ links, goHome }) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href);
    element.scrollIntoView({ behavior: "smooth" });
    setOpen(!isOpen); // Cambia el estado de isOpen
  };

  return (
    <header>
      <div className="hamburgerMenuButton">
        <h4>Darkest Adventure</h4>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <nav className={isOpen ? "open" : ""}>
        <ul>
          {links.map((link, index) => (
            <li key={index} onClick={(e) => handleClick(e, link.href)}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>

        {goHome && (
          <div className="goHome">
            <Link to="/Darkest-Builder-Deploy/">
              <a>Darkest Builder</a>
            </Link>
          </div>
        )}
      </nav>
      <div className="Difusse"></div>
    </header>
  );
}

export default MainHeader;
