import React from "react";
import "./styles/MainHeader.css";

function MainHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a href="Heroes">Heroes</a>
          </li>
          <li>
            <a href="#">Regions</a>
          </li>
          <li>
            <a href="#">Enemies</a>
          </li>
          <li>
            <a href="#">Builds</a>
          </li>
          <li>
            <a href="#">dark-City</a>
          </li>
          <li>
            <a href="#">Hero-TierList</a>
          </li>
          <li>
            <a href="#">Fandom</a>
          </li>
        </ul>
      </nav>
      <div className="Difusse"></div>
    </header>
  );
}

export default MainHeader;
