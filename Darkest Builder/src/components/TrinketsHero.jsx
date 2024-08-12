import React from "react";
import "./styles/TrinketsHero.css";

//TrinksImg

//Highwayman
import Rat_Skull from "../assets/img/heroTrinkets/highwayman/Rat_Skull.webp";

const heroTrinkets = [
    {
      //Highwayman
      name: ["Rat Skull"],
      src: [Rat_Skull],
      alt: "highwayman-trinket",
    },
]

function TrinketsHero({trinkData }) {
  return (
    <div className="trinkedElement">
      <div className="angry-grid">
        <div id="item-0">
          <img src={heroTrinkets[0].src} alt={heroTrinkets[0].alt} />
        </div>

        <div className="descriptionTrinket" id="item-1">
          <p>{trinkData}</p>
        </div>

        <div className="raritySection" id="item-2">
          <h5>{heroTrinkets[0].name}</h5>
        </div>
      </div>
    </div>
  );
}

export default TrinketsHero;
