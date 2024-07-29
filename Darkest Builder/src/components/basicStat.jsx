import React from "react";

import "./styles/basicStat.css";

//import database
import heroesData from "../data/heroesData.js";

//import icons
import { TbClockBolt, TbArrowBigUpLinesFilled } from "react-icons/tb";
import { GiBowman, GiSwordman, GiHealthNormal } from "react-icons/gi";
import {
  GiPocketBow,
  GiBroadDagger,
  GiIciclesAura,
  GiFireBottle,
} from "react-icons/gi";

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
    icon: <GiIciclesAura style={{ transform: "scale(1.1)" }} />,
  },
  {
    tag: "Cooldown",
    icon: <TbClockBolt style={{ transform: "scale(1.1)" }} />,
  },
  {
    tag: "Uses",
    icon: <GiFireBottle style={{ transform: "scale(1.2)" }} />,
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
      {title === "Cooldown" && (
        <div className="iconSkill">
          {icons[3].icon}
          <i>{iconSkill}</i>
        </div>
      )}
      {title === "Uses" && (
        <div className="iconSkill">
          {icons[4].icon}
          <i>{iconSkill}</i>
        </div>
      )}

      {/* positionsCharacters for Rank */}
      {title === "Rank" && (
        <div className="positionBalls">
          {paintBalls.length === 1 && paintBalls[0] === 0 ? (
            <div
              style={{
                backgroundColor: "rgb(0, 125, 100)",
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
                  background: paintBalls.includes(number) ? "#aa8c45" : "#333",
                }}
              ></span>
            ))
          )}
        </div>
      )}

      {/* positionsCharacters for Target */}
      {title === "Target" && (
        <div className="positionBalls">
          {numbersBall.map((number, index) => (
            <span
              key={index}
              style={{
                background: paintBalls.includes(number) ? "#2a6383" : "#333",
              }}
            ></span>
          ))}
        </div>
      )}
    </>
  );
}

export default basicStat;
