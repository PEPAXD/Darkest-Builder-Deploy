import React from "react";
import "./styles/teemmatesFrame.css";

//import heroFrame
import Highwayman from "../assets/HeroFrame/highwayman.png";

const HeroFrames = [{ name: "Highwayman", src: Highwayman, alt: "Highwayman_Frame" }];

function teemmatesFrame() {
  return (
    <div>
      <div className="heroFriend">
        <div className="friendContainer">
          <img src={HeroFrames[0].src} alt={HeroFrames[0].alt} />
        </div>
        <i>heroname</i>
      </div>
    </div>
  );
}

export default teemmatesFrame;
