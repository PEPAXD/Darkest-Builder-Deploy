import React from "react";
import "./styles/radioButtons.css";

function radioButtons({ img }) {
  return (
    <div>
      <label>
        <input type="radio" style={{ display: "none" }} />
        <img src={img} alt="sub-sections" />
      </label>
    </div>
  );
}

export default radioButtons;
