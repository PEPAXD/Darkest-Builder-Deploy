import React, { useEffect, useState } from "react";
import "./styles/upgradeButton.css";

function upgradeButton() {

  //checkbox Upgrade
  const [isUpgradeActive, setIsUpgradeActive] = useState(true);

  return (
    <div className="upgradeButton">
      <button>
        <div className="checkbox-wrapper-46">
          <input
            type="checkbox"
            id="cbx-46"
            className="inp-cbx"
            checked={isUpgradeActive}
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
      </button>
    </div>
  );
}

export default upgradeButton;
