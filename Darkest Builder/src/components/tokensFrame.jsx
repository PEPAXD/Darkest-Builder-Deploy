import React from "react";
import "./styles/tokensFrame.css";

//import Icons
import Winded from "../assets/img/icons/winded-Token.webp";

const tokensIconsArray = [{ name: '"Winded"', src: Winded }];

function tokensFrame() {
  return (
    <>
      <div className="uniqueToken">

        <div className="token">
          <div>
            <div className="imgframe">
              <img src={tokensIconsArray[0].src} alt="unniqueToken" />
            </div>
          </div>
          <div className="tokenText">
            <h5>{"Special Token - "+tokensIconsArray[0].name}</h5>
            <span>- Attacks deal -33% DMG and SPD is reduced by 3 for each Winded Token</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              dolores delectus, dolore nam voluptate neque facilis, quis
              consequuntur iusto, perspiciatis quasi illo dicta officiis maiores
              corporis! Dolor temporibus natus modi?
            </p>
          </div>
        </div>

        <br />
      </div>
    </>
  );
}

export default tokensFrame;
