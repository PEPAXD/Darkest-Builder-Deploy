import React from "react";
import "./styles/WipSection.css";

function WipSection({ url_Bg }) {
  return (
    <div className="Wip">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="wipContainer">
          <div className="wipContain">
            <h1>Work in Progress</h1>
            <p>Sorry, this section is still under construction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WipSection;
