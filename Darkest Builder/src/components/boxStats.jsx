import React, { useState } from "react";
import "./styles/boxStats.css";

//Imports IconsGallery
import maxHp from "../assets/img/icons/Icon_HP_dd2.webp";
import sPD from "../assets/img/icons/Icon_speed_dd2.webp";
import back from "../assets/img/icons/backwards.webp";
import forw from "../assets/img/icons/forward.webp";

import bleed from "../assets/img/icons/Bleed_dd2.webp";
import burn from "../assets/img/icons/Burn_dd2.webp";
import blight from "../assets/img/icons/Blight_dd2.webp";
import disease from "../assets/img/icons/Disease_dd2.webp";
import move from "../assets/img/icons/Move_dd2.webp";
import stun from "../assets/img/icons/Stun_dd2.webp";
import debuff from "../assets/img/icons/Debuff_dd2.webp";
import deathBlow from "../assets/img/icons/Deathsdoor_dd2.webp";

function boxStats({ dataStats }) {
  //checkbox Upgrade
  const [isUpgradeActive, setIsUpgradeActive] = useState(false);
  const handleCheckboxChange = () => {
    setIsUpgradeActive(!isUpgradeActive);
  };

  //UpgradeStat
  function renderStatItem(
    statName,
    statValues,
    iconSrc,
    showPercentage = true
  ) {
    const color =
      statValues.length === 2
        ? isUpgradeActive
          ? "#6EA1DD"
          : "currentColor"
        : "currentColor";

    const value =
      statValues.length === 2
        ? statValues[isUpgradeActive ? 1 : 0]
        : statValues[0];

    return (
      <li style={{ color: color }}>
        <img src={iconSrc} alt="statsIcon" />
        {statName} {value}{showPercentage ? "%" : ""}
      </li>
    );
  }

  return (
    <>
      <div className="baseStatsContain">
        <div className="upgradeButton">
          <div className="checkbox-wrapper-46">
            <input
              type="checkbox"
              id="cbx-46"
              className="inp-cbx"
              checked={isUpgradeActive}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="cbx-46" className="cbx">
              <span>
                <svg viewBox="0 0 12 10" height="10px" width="12px">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>Upgraded</span>
            </label>
          </div>
        </div>

        <div className="statsContain">
          <h4>Base Stats</h4>
          <ul>
            {renderStatItem("HP", dataStats.HP, maxHp, false)}
            {renderStatItem("SPD", dataStats.SPD, sPD, false)}
          </ul>
          <h4>Movement</h4>
          <ul>
            {renderStatItem("BACK", dataStats.BACK, back, false)}
            {renderStatItem("FORW", dataStats.FORW, forw, false)}
          </ul>
        </div>
      </div>

      <div className="resistantsContain">
        <h4>Resistants</h4>
        <ul>
          {renderStatItem("Bleed", dataStats.BLEED, bleed)}
          {renderStatItem("Stun", dataStats.STUN, stun)}
          {renderStatItem("Blight", dataStats.BLIGHT, blight)}
          {renderStatItem("Move", dataStats.MOVE, move)}
          {renderStatItem("Burn", dataStats.BURN, burn)}
          {renderStatItem("Debuff", dataStats.DEBUFF, debuff)}
          {renderStatItem("Disease", dataStats.DISEASE, disease)}
          {renderStatItem("DeathBlow", dataStats.DEATH, deathBlow)}
        </ul>
      </div>
    </>
  );
}

export default boxStats;
