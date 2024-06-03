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
          <h1>About Commit</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
