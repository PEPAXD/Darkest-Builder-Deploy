import React from "react";
import "./styles/basicStat.css";

//import icons
import { TbClockBolt, TbArrowBigUpLinesFilled } from "react-icons/tb";
import { GiBowman, GiSwordman, GiHealthNormal } from "react-icons/gi";
import { GiPocketBow, GiBroadDagger } from "react-icons/gi";
import { PiBatteryVerticalHigh } from "react-icons/pi";

function basicStat({ title, icon }) {
  return (
    <>
      <b>{title}</b>
      <div className="iconSkill">
        <GiBroadDagger style={{ transform: "rotate(-90deg)" }} />
        <i>Melee</i>
      </div>
    </>
  );
}

export default basicStat;
