import React, { useEffect } from "react";
import "./styles/skillFrame.css";

//import SkillsImg
//Import Highwayman
import wickedslice from "../assets/img/paths/highwayman/72px-Dd2_ability_highwayman_wickedslice.webp";
import pistolshot from "../assets/img/paths/highwayman/72px-Dd2_ability_pistolshot.webp";
import duelistadvance from "../assets/img/paths/highwayman/72px-Dd2_ability_duelistsadvance.webp";
import trackingshot from "../assets/img/paths/highwayman/72px-Dd2_ability_trackingshot.webp";
import takeaim from "../assets/img/paths/highwayman/72px-Dd2_ability_takeaim.webp";
import pointblankshot from "../assets/img/paths/highwayman/72px-Dd2_ability_pointblankshot.webp";
import grapeshotblast from "../assets/img/paths/highwayman/72px-Dd2_ability_grapeshotblast.webp";
import openvein from "../assets/img/paths/highwayman/72px-Dd2_ability_openvein.webp";
import doubletap from "../assets/img/paths/highwayman/72px-Dd2_ability_doubletap.webp";
import highwayrobbery from "../assets/img/paths/highwayman/72px-Dd2_ability_highwayrobbery.webp";
import doublecross from "../assets/img/paths/highwayman/72px-Dd2_ability_doublecross.webp";

const skillsHero = [
  {
    //Highwayman
    src: [
      wickedslice,
      pistolshot,
      duelistadvance,
      trackingshot,
      takeaim,
      pointblankshot,
      grapeshotblast,
      openvein,
      doubletap,
      highwayrobbery,
      doublecross,
    ],
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
