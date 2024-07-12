import React, { useState } from "react";
import "./styles/skillFrame.css";

//react-Icons
import { IoMdArrowDropdown } from "react-icons/io";

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

function skillFrame({ skillData, arrowCheck, opacityCheck }) {
  return (
    <div className="skillBox">
      <input type="radio" />

      <div className="skillFrame">
        <IoMdArrowDropdown style={{ opacity: arrowCheck ? 1 : 0 }} />
        <img
          src={skillsHero[0].src[skillData.id]}
          alt={skillData.name}
          style={{ opacity: opacityCheck ? 1 : 0.4 }}
        />
      </div>
    </div>
  );
}

export default skillFrame;
