import React from "react";

import "./styles/basicStat.css";

//import database
import heroesData from "../data/heroesData.js";

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
    tag: "Ranged",
    icon: <GiPocketBow style={{ transform: "rotate(-90deg)" }} />,
  },
  {
    tag: "Buff",
    icon: <GiIciclesAura />,
  },
];

function basicStat({
  title,
  iconSkill,
  paintBalls,
  heroArray = [0],
  selectedSkill,
}) {
  //positionsCharacters
  const numbersBall = [1, 2, 3, 4];

  //paintBalls return skillsPaths[0].Rank
  paintBalls =
    paintBalls ||
    (title === "Rank"
      ? heroesData[heroArray].skills[selectedSkill].skillsPaths[0].Rank
      : title === "Target"
      ? heroesData[heroArray].skills[selectedSkill].skillsPaths[0].Target
      : paintBalls);

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
          {paintBalls.length === 1 && paintBalls[0] === 0 ? (
            <div
              style={{
                backgroundColor: "#2a6383",
                color: "white",
                padding: "0rem 2rem",
                borderRadius: "1rem",
                fontStyle: "italic",
                fontWeight: "300",
              }}
            >
              Self
            </div>
          ) : (
            numbersBall.map((number, index) => (
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
            ))
          )}
        </div>
      )}
    </>
  );
}

export default basicStat;
