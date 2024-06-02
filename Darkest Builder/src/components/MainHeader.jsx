import React, { useState } from "react";
import "./styles/MainHeader.css";

//IMPORT COMPONENTS
import { Squash as Hamburger } from "hamburger-react";

//import Images
import Highwayman from "../assets/HeroProfile/Highwayman.png";

const profileHeros = [Highwayman];

function MainHeader({ links }) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <li key={index}>
              <a href={link.href} onClick={toggleMenu}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="Difusse"></div>
    </header>
  );
}

export default MainHeader;
