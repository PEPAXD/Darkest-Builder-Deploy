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

//Hellion
import Ravager from "../assets/img/paths/hellion/Dd2_path_ravager.webp";
import Berserker from "../assets/img/paths/hellion/Dd2_path_berserker.webp";
import Carcass from "../assets/img/paths/hellion/Dd2_path_carcass.webp";

//Jester
import Virtuoso from "../assets/img/paths/jester/Dd2_path_virtuoso.webp";
import Soloist from "../assets/img/paths/jester/Dd2_path_soloist.webp";
import Intermezzo from "../assets/img/paths/jester/Dd2_path_intermezzo.webp";

//Leper
import Tempest from "../assets/img/paths/leper/Dd2_path_tempest.webp";
import Poet from "../assets/img/paths/leper/Dd2_path_poet.webp";
import Monarch from "../assets/img/paths/leper/Dd2_path_monarch.webp";

//manAtArms
import Sergeant from "../assets/img/paths/manAtArms/Dd2_path_sergeant.webp";
import Bulwark from "../assets/img/paths/manAtArms/Dd2_path_bulwark.webp";
import Vanguard from "../assets/img/paths/manAtArms/Dd2_path_vanguard.webp";

//Occultist
import Ritualist from "../assets/img/paths/occultist/Dd2_path_ritualist.webp";
import Warlock from "../assets/img/paths/occultist/Dd2_path_warlock.webp";
import Aspirant from "../assets/img/paths/occultist/Dd2_path_aspirant.webp";

//plagueDoctor
import Surgeon from "../assets/img/paths/plagueDoctor/Dd2_path_surgeon.webp";
import Alchemist from "../assets/img/paths/plagueDoctor/Dd2_path_alchemist.webp";
import Physician from "../assets/img/paths/plagueDoctor/Dd2_path_physician.webp";

const pathsHero = [
  {
    //Highwayman
    name: ["Wanderer", "Rogue", "Sharpshot", "Yellowhand"],
    src: [Wanderer, Rogue, Sharpshot, Yellowhand],
  },
  {
    //Grave-Robber
    name: ["Wanderer", "Deadeye", "Venomdrop", "Nightsworn"],
    src: [Wanderer, Deadeye, Venomdrop, Nightsworn],
  },
  {
    //Hellion
    name: ["Wanderer", "Ravager", "Berserker", "Carcass"],
    src: [Wanderer, Ravager, Berserker, Carcass],
  },
  {
    //Jester
    name: ["Wanderer", "Virtuoso", "Soloist", "Intermezzo"],
    src: [Wanderer, Virtuoso, Soloist, Intermezzo],
  },
  {
    //Leper
    name: ["Wanderer", "Tempest", "Poet", "Monarch"],
    src: [Wanderer, Tempest, Poet, Monarch],
  },
  {
    //manAtArms
    name: ["Wanderer", "Sergeant", "Bulwark", "Vanguard"],
    src: [Wanderer, Sergeant, Bulwark, Vanguard],
  },
  {
    //Occultist
    name: ["Wanderer", "Ritualist", "Warlock", "Aspirant"],
    src: [Wanderer, Ritualist, Warlock, Aspirant],
  },
  {
    //plagueDoctor
    name: ["Wanderer", "Surgeon", "Alchemist", "Physician"],
    src: [Wanderer, Surgeon, Alchemist, Physician],
  },
];

function pathHero({ heroIndex, pathIndex, pathData }) {
  return (
    <div className="boxPath">
      <h4>{pathsHero[heroIndex].name[pathIndex]}</h4>
      <div className="pathSkills">
        <img src={pathsHero[heroIndex].src[pathIndex]} />

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
