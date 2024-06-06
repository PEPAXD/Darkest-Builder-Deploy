import React from "react";
import "./styles/radioButtons.css";

function radioButtons({ img, check }) {
  return (
    <div>
      <label>
        <input type="radio" checked={check}/>
        <img src={img} alt="sub-sections" />
      </label>
    </div>
  );
}

export default radioButtons;
