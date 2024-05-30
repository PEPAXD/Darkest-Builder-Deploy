import React from "react";
import "./styles/HomeSection.css";

function HomeSection({ url_Bg }) {
  return (
    <div className="Home">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="homeContain">
          <img src="darkestBuilder_full.png" alt="" />
          <h1>Hero Builder</h1>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
