import React from "react";
import "./styles/tokensFrame.css";

//import Icons
import Winded from "../assets/img/icons/winded-Token.webp";

const tokensIconsArray = [{ name: '"Winded"', src: Winded }];

function tokensFrame() {
  return (
    <div className="specialTokenContainer">
      <div className="iconBox">
        <div className="imgFrame">
          <img src={tokensIconsArray[0].src} alt="TokenIcon" />
        </div>
      </div>

      <div className="descriptionBox">
        <h6>{tokensIconsArray[0].name}</h6>
        <hr />

        <div>
          <b>
            - A self-debuff token generated or removed by certain Hellion
            skills.
          </b>
          <ul>
            <li>-3 SPD per Winded</li>
            <li>-33% DMG per Winded</li>
            <li>Carcass: Turn End: Add Block (75%) per Winded</li>
            <li>Duration: Until end of combat</li>
            <li>Limit: 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default tokensFrame;
