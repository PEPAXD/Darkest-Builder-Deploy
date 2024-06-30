import React from "react";
import "./styles/tokensFrame.css";

//import Icons
import Winded from "../assets/img/icons/winded-Token.webp";
import uncheckedPower from "../assets/img/icons/unchecked-power-Token.webp";
import conviction from "../assets/img/icons/conviction-Token.webp";
import lightBless from "../assets/img/icons/lightBless-Token.webp";
import fortitudeBless from "../assets/img/icons/fortitudeBless-Token.webp";

const tokensIconsArray = [
  { name: "Winded", src: Winded },
  { name: "Unchecked Power", src: uncheckedPower },
  { name: "Conviction", src: conviction },
  { name: "Light Bless", src: lightBless },
  { name: "Fortitude Bless", src: fortitudeBless },
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
