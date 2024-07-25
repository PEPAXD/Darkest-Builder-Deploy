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

function basicStat({ title, iconSkill, paintBalls }) {
  //positionsCharacters
  const numbersBall = [1, 2, 3, 4];

  return (
    <>
      {/* skillType */}
      <b>{title}</b>
      {title === "Type" && (
        <div className="iconSkill">
          {icons[iconSkill].icon}
          <i> {icons[iconSkill].tag}</i>
        </div>
      )}

      {/* positionsCharacters */}
      {(title === "Rank" || title === "Target") && (
        <div className="positionBalls">
          {numbersBall.map((number, index) => (
            <span
              key={index}
              style={{
                background: paintBalls.includes(number)
                  ? title === "Rank"
                    ? "#aa8c45"
                    : "#2a6383"
                  : "#333",
              }}
            ></span>
          ))}
        </div>
      )}
    </>
  );
}

export default basicStat;
