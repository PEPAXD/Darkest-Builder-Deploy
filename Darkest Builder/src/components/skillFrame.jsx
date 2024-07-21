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

//import hellion
import wickedhack from "../assets/img/paths/hellion/Dd2_ability_wickedhack.webp";
import ironswan from "../assets/img/paths/hellion/Dd2_ability_ironswan.webp";
import barbaricyawp from "../assets/img/paths/hellion/Dd2_ability_barbaricyawp.webp";
import ifitbleeds from "../assets/img/paths/hellion/Dd2_ability_ifitbleeds.webp";
import toetotoe from "../assets/img/paths/hellion/Dd2_ability_toetotoe.webp";
import adrenalinerush from "../assets/img/paths/hellion/Dd2_ability_adrenalinerush.webp";
import bleedout from "../assets/img/paths/hellion/Dd2_ability_bleedout.webp";
import bloodlust from "../assets/img/paths/hellion/Dd2_ability_bloodlust.webp";
import breakthrough from "../assets/img/paths/hellion/Dd2_ability_breakthrough.webp";
import rauciousrevelry from "../assets/img/paths/hellion/Dd2_ability_rauciousrevelry.webp";
import howlingend from "../assets/img/paths/hellion/Dd2_ability_howlingend.webp";

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
  {
    name: "Hellion",
    skills: [
      wickedhack,
      ironswan,
      barbaricyawp,
      ifitbleeds,
      toetotoe,
      adrenalinerush,
      bleedout,
      bloodlust,
      breakthrough,
      rauciousrevelry,
      howlingend,
    ],
  },
  // TODO: Add more heroes
];

function skillFrame({ skillData, arrowCheck, heroIndex }) {
  return (
    <div className="skillBox">
      <div className="skillFrame">
        <IoMdArrowDropdown style={{ opacity: arrowCheck ? 1 : 0 }} />
        <img
          src={skillsHero[heroIndex].skills[skillData.id]}
          alt={skillData.name}
        />
      </div>
    </div>
  );
}

export default skillFrame;
