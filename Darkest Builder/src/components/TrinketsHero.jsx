import React from "react";
import "./styles/TrinketsHero.css";

//TrinksImg

//Highwayman
import Rat_Skull from "../assets/img/heroTrinkets/highwayman/Rat_Skull.webp";
import Tormenting_Locket from "../assets/img/heroTrinkets/highwayman/Tormenting_Locket.webp";
import Cursed_Coin from "../assets/img/heroTrinkets/highwayman/Cursed_Coin.webp";
import Morbid_joke from "../assets/img/heroTrinkets/highwayman/Morbid_joke.webp";

const heroTrinkets = [
    {
      //Highwayman
      name: ["Rat Skull", "Tormenting Locket", "Cursed Coin", "Morbid Joke"],
      src: [Rat_Skull, Tormenting_Locket, Cursed_Coin, Morbid_joke],
      alt: "highwayman-trinket",
    },
]

function TrinketsHero() {
  return (
    <div className="trinkedElement">
      <div className="angry-grid">
        <div id="item-0">
          <img src={heroTrinkets[0].src[0]} alt={heroTrinkets[0].alt} />
        </div>

        <div className="descriptionTrinket" id="item-1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nisi reiciendis at facilis id voluptas quod ea sequi ipsum quidem saepe exercitationem laborum, similique vel. Possimus iste cumque error necessitatibus.</p>
        </div>

        <div className="raritySection" id="item-2">
          <h5>{heroTrinkets[0].name[0]}</h5>
        </div>
      </div>
    </div>
  );
}

export default TrinketsHero;
