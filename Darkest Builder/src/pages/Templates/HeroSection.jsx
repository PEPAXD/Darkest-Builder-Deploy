import React from "react";
import "./styles/HeroSection.css";

function HeroSection({ url_Bg }) {
  return (
    <div className="Hero">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="HeroContainer">
            <h1>Hero Branch</h1>
            <h2>First Commit</h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
