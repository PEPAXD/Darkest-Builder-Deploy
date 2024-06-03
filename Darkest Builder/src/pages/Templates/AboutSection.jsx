import React from "react";
import "./styles/AboutSection.css";

function AboutSection({ url_Bg }) {
  return (
    <div className="About">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="AboutContainer">
          <article className="aboutContain">
            <h1>About Commit</h1>
            <h2>New Branch</h2>
          </article>

          <div className="PointSections">
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
            <span>E</span>
            <span>F</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
