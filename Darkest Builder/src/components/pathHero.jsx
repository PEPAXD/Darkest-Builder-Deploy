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
    //Wanderer
    name: ["Wanderer"],
    src: [Wanderer],
    alt: ["WandererPath"],
  },
  {
    //Highwayman
    name: ["Rogue", "Sharpshot", "Yellowhand"],
    src: [Rogue, Sharpshot, Yellowhand],
    alt: ["RoguePath", "SharpshotPath", "YellowhandPath"],
  },
];

function pathHero() {
  return (
    <div className="boxPath">
      <h4>{pathsHero[1].name[0]}</h4>
      <div className="pathSkills">
        <img src={pathsHero[1].src[0]} alt={pathsHero[1].alt[0]} />

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
