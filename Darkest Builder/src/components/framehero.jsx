import React from "react";
import './styles/framehero.css';

function framehero({img, nexImg, changeText, heroName }) {

  return (
    <div className="profileFrame">
      <button onClick={nexImg}>
        <img src={img} alt="FrameHero" />
      </button>
      <h4 onClick={changeText}>{heroName}</h4>
    </div>
  );
}

export default framehero;
