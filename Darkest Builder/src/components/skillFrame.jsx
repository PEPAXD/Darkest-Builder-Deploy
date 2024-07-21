import React, { useState } from "react";
import "./styles/skillFrame.css";

//react-Icons
import { IoMdArrowDropdown } from "react-icons/io";

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

//import graveRobber
import Picktotheface from "../assets/img/paths/grave-robber/Dd2_ability_picktotheface.webp";
import Throwndagger from "../assets/img/paths/grave-robber/Dd2_ability_throwndagger.webp";
import Flashingdaggers from "../assets/img/paths/grave-robber/Dd2_ability_flashingdaggers.webp";
import Poisondart from "../assets/img/paths/grave-robber/Dd2_ability_poisondart.webp";
import Absinthe from "../assets/img/paths/grave-robber/Dd2_ability_absinthe.webp";
import Deadofnight from "../assets/img/paths/grave-robber/Dd2_ability_deadofnight.webp";
import Glintinthedark from "../assets/img/paths/grave-robber/Dd2_ability_glintinthedark.webp";
import Lunge from "../assets/img/paths/grave-robber/Dd2_ability_lunge.webp";
import Pirouette from "../assets/img/paths/grave-robber/Dd2_ability_pirouette.webp";
import Repartee from "../assets/img/paths/grave-robber/Dd2_ability_repartee.webp";
import Shadowfade from "../assets/img/paths/grave-robber/Dd2_ability_shadowfade.webp";

const skillsHero = [
  {
    name: "Highwayman",
    skills: [
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
  {
    name: "GraveRobber",
    skills: [
      Picktotheface,
      Throwndagger,
      Flashingdaggers,
      Poisondart,
      Absinthe,
      Deadofnight,
      Glintinthedark,
      Lunge,
      Pirouette,
      Repartee,
      Shadowfade,
    ],
  },
  // TODO: Add more heroes
];

function skillFrame({ skillData, arrowCheck, heroIndex }) {
  return (
    <div className="skillBox">
      <div className="skillFrame">
        <IoMdArrowDropdown style={{ opacity: arrowCheck ? 1 : 0 }} />
        <img src={skillsHero[heroIndex].skills[skillData.id]} alt={skillData.name} />
      </div>
    </div>
  );
}

export default skillFrame;
