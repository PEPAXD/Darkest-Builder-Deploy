import React from "react";
import "./styles/WikiSection.css";

function WikiSection({url_Bg}) {
  return (
    <div className="wiki">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="wikiContainer">
          <div className="wikiContent">
            <h1>Wiki Heroes</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              felis non urna tincidunt congue. Aenean nec lacus in lacus
              condimentum vehicula. Nulla facilisi. Nullam nec arcu sit amet
              ligula condimentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WikiSection;
