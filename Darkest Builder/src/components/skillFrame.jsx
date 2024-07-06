import React, { useEffect } from "react";
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
    src: [wickedslice, pistolshot, duelistadvance, trackingshot],
  },

  //TODO: Add more heroes
];

function skillFrame({ skillData }) {

  return (
    <div className="skillBox">
      <input type="radio" />
      <img src={skillsHero[0].src[skillData.id]} alt={skillData.name} />
      <i>{skillData.name}</i>
    </div>
  );
}

export default skillFrame;
