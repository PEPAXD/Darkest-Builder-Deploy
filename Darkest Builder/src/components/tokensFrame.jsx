import React from "react";
import "./styles/tokensFrame.css";

//import Icons
import Winded from "../assets/img/icons/winded-Token.webp";
import uncheckedPower from "../assets/img/icons/unchecked-power-Token.webp";
import conviction from "../assets/img/icons/conviction-Token.webp";
import lightBless from "../assets/img/icons/lightBless-Token.webp";
import fortitudeBless from "../assets/img/icons/fortitudeBless-Token.webp";
import burnHero from "../assets/img/icons/burnHero-Token.webp";
import aggressiveToken from "../assets/img/icons/aggressive_stanceToken.webp";
import defensiveToken from "../assets/img/icons/defensive_stanceToken.webp";
import toxic from "../assets/img/icons/toxicToken.webp";
import painHeal from "../assets/img/icons/painHealToken.webp";

const tokensIconsArray = [
  { name: "Winded", src: Winded },
  { name: "Unchecked Power", src: uncheckedPower },
  { name: "Conviction", src: conviction },
  { name: "Consecration of Light", src: lightBless },
  { name: "Consecration of Fortitude", src: fortitudeBless },
  { name: "Controlled Burn", src: burnHero },
  { name: "Aggressive Stance", src: aggressiveToken },
  { name: "Defensive Stance", src: defensiveToken },
  { name: "Toxic", src: toxic },
  { name: "Pain", src: painHeal },
];

function tokensFrame({ dataToken }) {
  return (
    <div className="specialTokenContainer">
      <div className="iconBox">
        <div className="imgFrame">
          <img src={tokensIconsArray[dataToken.id].src} alt="TokenIcon" />
        </div>
      </div>

      <div className="descriptionBox">
        <h6>{tokensIconsArray[dataToken.id].name + " - Token"}</h6>
        <hr />

        <div>
          <b>{dataToken.FastDescription}</b>
          <ul>
            {dataToken.skillPoints.map((skillPoint, index) => (
              <li key={index}>{skillPoint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default tokensFrame;
