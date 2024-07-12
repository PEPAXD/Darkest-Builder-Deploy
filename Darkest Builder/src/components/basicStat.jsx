import React from "react";
import "./styles/basicStat.css";

//import icons
import { TbClockBolt, TbArrowBigUpLinesFilled } from "react-icons/tb";
import { GiBowman, GiSwordman, GiHealthNormal } from "react-icons/gi";
import { GiPocketBow, GiBroadDagger } from "react-icons/gi";
import { PiBatteryVerticalHigh } from "react-icons/pi";

const icons = [
  {
    tag: "Melee",
    icon: <GiBroadDagger style={{ transform: "rotate(-90deg)" }} />,
  },
  {
    tag: "Melee",
    icon: <GiBroadDagger style={{ transform: "rotate(-90deg)" }} />,
  },
  {
    tag: "Melee",
    icon: <GiBroadDagger style={{ transform: "rotate(-90deg)" }} />,
  },
];

function basicStat({ title, iconSkill }) {
  return (
    <>
      <b>{title}</b>
      <div className="iconSkill">
        {icons[iconSkill].icon}
        <i> {icons[iconSkill].tag}</i>
      </div>
    </>
  );
}

export default basicStat;
