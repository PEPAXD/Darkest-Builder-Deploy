import React from "react";
import "./styles/pathHero.css";

//import IMG-Paths
import Rogue from "../assets/img/paths/highwayman/Dd2_path_rogue.webp";
import Sharpshot from "../assets/img/paths/highwayman/Dd2_path_sharpshot.webp";
import Yellowhand from "../assets/img/paths/highwayman/Dd2_path_yellowhand.webp";

const Highwayman = [
  { name: "Rogue", src: Rogue, alt: "RoguePath" },
  { name: "Sharpshot", src: Sharpshot },
  { name: "Yellowhand", src: Yellowhand },
];

function pathHero() {
  return (
    <div className="boxPath">
      <h4>{Highwayman[0].name}</h4>
      <div className="pathSkills">
        <img src={Highwayman[0].src} alt={Highwayman[0].alt} />

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
