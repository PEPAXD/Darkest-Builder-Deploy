import React from "react";
import "./styles/MainHeader.css";

function MainHeader({ links }) {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="Difusse"></div>
    </header>
  );
}

export default MainHeader;