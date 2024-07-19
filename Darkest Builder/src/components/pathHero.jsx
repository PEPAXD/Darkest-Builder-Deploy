import React, { useEffect } from "react";
import "./styles/pathHero.css";

//import IMG-Paths

//common Hero
import Wanderer from "../assets/img/paths/Dd2_path_wanderer.webp";

//Highwayman
import Rogue from "../assets/img/paths/highwayman/Dd2_path_rogue.webp";
import Sharpshot from "../assets/img/paths/highwayman/Dd2_path_sharpshot.webp";
import Yellowhand from "../assets/img/paths/highwayman/Dd2_path_yellowhand.webp";

//Grave-Robber
import Deadeye from "../assets/img/paths/grave-robber/Dd2_path_deadeye.webp";
import Venomdrop from "../assets/img/paths/grave-robber/Dd2_path_venomdrop.webp";
import Nightsworn from "../assets/img/paths/grave-robber/Dd2_path_nightsworn.webp";

const pathsHero = [
  {
    //Highwayman
    name: ["Wanderer", "Rogue", "Sharpshot", "Yellowhand"],
    src: [Wanderer, Rogue, Sharpshot, Yellowhand],
    alt: ["WandererPath", "RoguePath", "SharpshotPath", "YellowhandPath"],
  },
  {
    //Grave-Robber
    name: ["Wanderer", "Deadeye", "Venomdrop", "Nightsworn"],
    src: [Wanderer, Deadeye, Venomdrop, Nightsworn],
    alt: ["WandererPath", "DeadeyePath", "VenomdropPath", "NightswornPath"],
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
