import React, { useEffect, useState } from "react";
import "./styles/upgradeButton.css";

//iconArrow
import { RiArrowUpDoubleLine } from "react-icons/ri";

function upgradeButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log("isChecked", isChecked);
  };

  return (
    <div className="upgradeButton">
      <div className="checkbox-wrapper-46">
        <input
          type="checkbox"
          id="cbx-46"
          className="inp-cbx"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <label htmlFor="cbx-46" className="cbx">
          <span>
            <svg viewBox="0 0 12 10" height="10px" width="12px">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          </span>
          <RiArrowUpDoubleLine alt="AAA" style={{color: isChecked ? "#7a9cc6" : "#555"}}/>
        </label>
      </div>
    </div>
  );
}

export default upgradeButton;
