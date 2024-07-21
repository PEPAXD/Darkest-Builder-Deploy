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

//import jester
import razorswit from "../assets/img/paths/jester/Dd2_ability_razorswit.webp";
import fadetoblack from "../assets/img/paths/jester/Dd2_ability_fadetoblack.webp";
import sliceoff from "../assets/img/paths/jester/Dd2_ability_sliceoff.webp";
import battleballad from "../assets/img/paths/jester/Dd2_ability_battleballad.webp";
import inspiringtune from "../assets/img/paths/jester/Dd2_ability_inspiringtune.webp";
import harvest from "../assets/img/paths/jester/Dd2_ability_harvest.webp";
import finale from "../assets/img/paths/jester/Dd2_ability_finale.webp";
import solo from "../assets/img/paths/jester/Dd2_ability_solo.webp";
import playout from "../assets/img/paths/jester/Dd2_ability_playout.webp";
import encore from "../assets/img/paths/jester/Dd2_ability_encore.webp";
import echoingmarch from "../assets/img/paths/jester/Dd2_ability_echoingmarch.webp";

//import leper
import Dd2_ability_chop from "../assets/img/paths/leper/Dd2_ability_chop.webp";
import Dd2_ability_purge from "../assets/img/paths/leper/Dd2_ability_purge.webp";
import Dd2_ability_withstand from "../assets/img/paths/leper/Dd2_ability_withstand.webp";
import Dd2_ability_solemnity from "../assets/img/paths/leper/Dd2_ability_solemnity.webp";
import Dd2_ability_reflection from "../assets/img/paths/leper/Dd2_ability_reflection.webp";
import Dd2_ability_hew from "../assets/img/paths/leper/Dd2_ability_hew.webp";
import Dd2_ability_revenge from "../assets/img/paths/leper/Dd2_ability_revenge.webp";
import Dd2_ability_intimidate from "../assets/img/paths/leper/Dd2_ability_intimidate.webp";
import Dd2_ability_ruin from "../assets/img/paths/leper/Dd2_ability_ruin.webp";
import Dd2_ability_break from "../assets/img/paths/leper/Dd2_ability_break.webp";
import Dd2_ability_bash from "../assets/img/paths/leper/Dd2_ability_bash.webp";

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
  {
    name: "Jester",
    skills: [
      razorswit,
      fadetoblack,
      sliceoff,
      battleballad,
      inspiringtune,
      harvest,
      finale,
      solo,
      playout,
      encore,
      echoingmarch,
    ],
  },
  {
    name: "Leper",
    skills: [
      Dd2_ability_chop,
      Dd2_ability_purge,
      Dd2_ability_withstand,
      Dd2_ability_solemnity,
      Dd2_ability_reflection,
      Dd2_ability_hew,
      Dd2_ability_revenge,
      Dd2_ability_intimidate,
      Dd2_ability_ruin,
      Dd2_ability_break,
      Dd2_ability_bash,
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
