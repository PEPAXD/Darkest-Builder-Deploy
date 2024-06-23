import React from "react";
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

function boxStats() {
  return (
    <>
      <div className="baseStatsContain">
        <div className="upgradeButton">
          <div className="checkbox-wrapper-46">
            <input type="checkbox" id="cbx-46" className="inp-cbx" />
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
            <li>
              <img src={maxHp} alt="statsIcon" />
              HP 35
            </li>
            <li>
              <img src={sPD} alt="statsIcon" />
              SPD 5
            </li>
          </ul>
          <h4>Movement</h4>
          <ul>
            <li>
              <img src={back} alt="statsIcon" />
              Back 5
            </li>
            <li>
              <img src={forw} alt="statsIcon" />
              Forw 5
            </li>
          </ul>
        </div>
      </div>

      <div className="resistantsContain">
        <h4>Resistants</h4>
        <ul>
          <li>
            <img src={bleed} alt="statsIcon" />
            Bleed 5
          </li>
          <li>
            <img src={move} alt="statsIcon" />
            Move 5
          </li>
          <li>
            <img src={burn} alt="statsIcon" />
            Burn 5
          </li>
          <li>
            <img src={stun} alt="statsIcon" />
            Stun 5
          </li>
          <li>
            <img src={blight} alt="statsIcon" />
            Blight 5
          </li>
          <li>
            <img src={debuff} alt="statsIcon" />
            Debuff 5
          </li>
          <li>
            <img src={disease} alt="statsIcon" />
            Disease 5
          </li>
          <li>
            <img src={deathBlow} alt="statsIcon" />
            Deathblow 5
          </li>
        </ul>
      </div>
    </>
  );
}

export default boxStats;
