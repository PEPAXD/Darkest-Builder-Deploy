import React, { useEffect } from "react";
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

function pathHero({ heroIndex, pathIndex, pathData }) {
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
            {pathData.map((item, index) => (
              <li key={index}>
                <h5>{item.title}</h5>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default pathHero;
