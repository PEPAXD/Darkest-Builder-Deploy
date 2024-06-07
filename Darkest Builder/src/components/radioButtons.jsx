import React from "react";
import "./styles/radioButtons.css";

function radioButtons({ img, check, val, changeCheck }) {
  return (
    <div>
      <label>
        <input type="radio" checked={check} value={val} onChange={changeCheck}/>
        <img src={img} alt="sub-sections" />
      </label>
    </div>
  );
}

export default radioButtons;
