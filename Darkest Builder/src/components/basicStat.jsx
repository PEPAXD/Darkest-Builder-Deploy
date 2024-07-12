import React from "react";

import "./styles/basicStat.css";

//import icons
import { TbClockBolt, TbArrowBigUpLinesFilled } from "react-icons/tb";
import { GiBowman, GiSwordman, GiHealthNormal } from "react-icons/gi";
import { GiPocketBow, GiBroadDagger, GiIciclesAura } from "react-icons/gi";

import { PiBatteryVerticalHigh } from "react-icons/pi";

const icons = [
  {
    tag: "Melee",
    icon: <GiBroadDagger style={{ transform: "rotate(-90deg)" }} />,
  },
  {
    tag: "Rank",
    icon: <GiPocketBow style={{ transform: "rotate(-90deg)" }} />,
  },
  {
    tag: "Buff",
    icon: <GiIciclesAura />,
  },
];

function basicStat({ title, iconSkill, flipNumber }) {
  
  //positionsCharacters
  const numbersBall = [1, 2, 3, 4];
  const numbersToRender = flipNumber ? [...numbersBall].reverse() : numbersBall;

  return (
    <>
      <b>{title}</b>

      {title === "Type" && (
        <div className="iconSkill">
          {icons[iconSkill].icon}
          <i> {icons[iconSkill].tag}</i>
        </div>
      )}

      {(title === "Rank" || title === "Target") && (
        <div className="positionBalls">
          {numbersToRender.map((number, index) => (
            <span key={index}>{number}</span>
          ))}
        </div>
      )}
    </>
  );
}

export default basicStat;
