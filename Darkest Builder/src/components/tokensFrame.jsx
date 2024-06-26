import React from "react";
import "./styles/tokensFrame.css";

//import Icons
import Winded from "../assets/img/icons/winded-Token.webp";

const tokensIconsArray = [{ name: '"Winded"', src: Winded }];

function tokensFrame() {
  return (
    <>
      <div className="uniqueToken">
        <div>
          <h5>{"Special Token - " + tokensIconsArray[0].name}</h5>
          <span>
            - Attacks deal -33% DMG and SPD is reduced by 3 for each Winded
            Token
          </span>
        </div>

        <div className="token">


        </div>
      </div>


      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default tokensFrame;
