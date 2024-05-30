import React from "react";
import './styles/framehero.css';

function framehero({img, onClick, heroName}) {
  return (
    <div className="profileFrame">
      <button onClick={onClick}>
        <img src={img} alt="FrameHero" />
      </button>
      <h4>{heroName}</h4>
    </div>
  );
}

export default framehero;
