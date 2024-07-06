import React from "react";
import "./styles/skillFrame.css";

//import SkillsImg
//Import Highwayman
import wickedslice from "../assets/img/paths/highwayman/72px-Dd2_ability_highwayman_wickedslice.webp";
import pistolshot from "../assets/img/paths/highwayman/72px-Dd2_ability_pistolshot.webp";
import duelistadvance from "../assets/img/paths/highwayman/72px-Dd2_ability_duelistsadvance.webp";
import trackingshot from "../assets/img/paths/highwayman/72px-Dd2_ability_trackingshot.webp";

const skillsHero = [
  {
    //Highwayman
    name: ["Wicked Slice", "Pistol Shot", "Duelist's Advance", "Tracking Shot"],
    src: [wickedslice, pistolshot, duelistadvance, trackingshot],
    alt: "HighwaymanSkill",
  },

  //TODO: Add more heroes
];

function skillFrame() {
  return (
    <div className="skillBox">
      <input type="radio" />
      <img src={skillsHero[0].src[3]} alt={skillsHero[0].alt} />
      <i>{skillsHero[0].name[3]}</i>
    </div>
  );
}

export default skillFrame;
