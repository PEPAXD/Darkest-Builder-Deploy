import React from "react";
import "./styles/pathHero.css";

//import IMG-Paths

//common Hero
import Wanderer from "../assets/img/paths/Dd2_path_wanderer.webp";

//Highwayman
import Rogue from "../assets/img/paths/highwayman/Dd2_path_rogue.webp";
import Sharpshot from "../assets/img/paths/highwayman/Dd2_path_sharpshot.webp";
import Yellowhand from "../assets/img/paths/highwayman/Dd2_path_yellowhand.webp";

const pathsHero = [
  {
    //Highwayman
    name: ["Wanderer", "Rogue", "Sharpshot", "Yellowhand"],
    src: [Wanderer, Rogue, Sharpshot, Yellowhand],
    alt: ["WandererPath", "RoguePath", "SharpshotPath", "YellowhandPath"],
  },
  
  //TODO: Add more heroes
];

function pathHero({ heroIndex, pathIndex }) {
  return (
    <div className="boxPath">
      <h4>{pathsHero[heroIndex].name[pathIndex]}</h4>
      <div className="pathSkills">
        <img
          src={pathsHero[heroIndex].src[pathIndex]}
          alt={pathsHero[heroIndex].alt[pathIndex]}
        />

        <div className="pathData">
          <ul>
            <li>
              <h5>Rank = 1</h5>
              <span>AAA</span>
            </li>
            <li>
              <h5>Rank = 3</h5>
              <span>BBB</span>
            </li>
            <li>
              <h5>Rank = 4</h5>
              <span>CCC</span>
            </li>
            <li>
              <h5>Point Blank Shot</h5>
              <span>DDD</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default pathHero;
