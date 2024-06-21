import React from "react";
import "./styles/boxStats.css";

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

        <div className="baseStats">
          <h4>Base Stats</h4>
        </div>
      </div>

      <div className="resistantsContain">
        <h4>Resistants</h4>
      </div>
    </>
  );
}

export default boxStats;
