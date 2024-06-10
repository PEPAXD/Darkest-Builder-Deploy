import React from "react";
import "./styles/WikiSection.css";

function WikiSection({ url_Bg }) {
  return (
    <div className="wiki">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="wikiContainer">
          <div className="heroContain">
            <h1>HERO CONTAIN</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptatum eius consectetur beatae quas ullam, deserunt dignissimos suscipit ea laborum, officia velit ab, reiciendis nisi cumque doloribus incidunt. Minus, sed.</p>
          </div>
          <div className="wikiContain">
            <h1>Wiki-Contain</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero sequi quos illum libero, minima reiciendis expedita, hic exercitationem quasi eaque dignissimos ducimus deleniti consequatur nesciunt, delectus aut cum atque.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WikiSection;
