import React from "react";
import "./styles/HeroSection.css";

//import Data
import heroesData from "../../data/heroesData.js";

//import images BadHero
import BountyHunter_BadHero from "../../assets/img/BadHero/BountyHunter.jpg";
import Crusader_BadHero from "../../assets/img/BadHero/Crusader.jpg";
import Duelist_BadHero from "../../assets/img/BadHero/Duelist.jpg";
import Flagellant_BadHero from "../../assets/img/BadHero/Flagellant.jpg";
import graveRobber_BadHero from "../../assets/img/BadHero/graveRobber.jpg";
import Hellion_BadHero from "../../assets/img/BadHero/Hellion.jpg";
import Highwayman_BadHero from "../../assets/img/BadHero/Highwayman.jpg";
import Jester_BadHero from "../../assets/img/BadHero/Jester.jpg";
import Leper_BadHero from "../../assets/img/BadHero/Leper.jpg";
import manAtArms_BadHero from "../../assets/img/BadHero/manAtArms.jpg";
import Occultist_BadHero from "../../assets/img/BadHero/Occultist.jpg";
import plagueDoctor_BadHero from "../../assets/img/BadHero/plagueDoctor.jpg";
import Runaway_BadHero from "../../assets/img/BadHero/Runaway.jpg";
import Vestal_BadHero from "../../assets/img/BadHero/Vestal.jpg";

//import images GoodHero
import BountyHunter_GoodHero from "../../assets/img/GoodHero/BountyHunter.jpg";
import Crusader_GoodHero from "../../assets/img/GoodHero/Crusader.jpg";
import Duelist_GoodHero from "../../assets/img/GoodHero/Duelist.jpg";
import Flagellant_GoodHero from "../../assets/img/GoodHero/Flagellant.jpg";
import graveRobber_GoodHero from "../../assets/img/GoodHero/graveRobber.jpg";
import Hellion_GoodHero from "../../assets/img/GoodHero/Hellion.jpg";
import Highwayman_GoodHero from "../../assets/img/GoodHero/Highwayman.jpg";
import Jester_GoodHero from "../../assets/img/GoodHero/Jester.jpg";
import Leper_GoodHero from "../../assets/img/GoodHero/Leper.jpg";
import manAtArms_GoodHero from "../../assets/img/GoodHero/manAtArms.jpg";
import Occultist_GoodHero from "../../assets/img/GoodHero/Occultist.jpg";
import plagueDoctor_GoodHero from "../../assets/img/GoodHero/plagueDoctor.jpg";
import Runaway_GoodHero from "../../assets/img/GoodHero/Runaway.jpg";
import Vestal_GoodHero from "../../assets/img/GoodHero/Vestal.jpg";

const GoodHero = [
  BountyHunter_GoodHero,
  Crusader_GoodHero,
  Duelist_GoodHero,
  graveRobber_GoodHero,
  Hellion_GoodHero,
  Highwayman_GoodHero,
  Jester_GoodHero,
  Leper_GoodHero,
  manAtArms_GoodHero,
  Occultist_GoodHero,
  plagueDoctor_GoodHero,
  Runaway_GoodHero,
  Vestal_GoodHero,
  Flagellant_GoodHero,
];

const BadHero = [
  BountyHunter_BadHero,
  Crusader_BadHero,
  Duelist_BadHero,
  graveRobber_BadHero,
  Hellion_BadHero,
  Highwayman_BadHero,
  Jester_BadHero,
  Leper_BadHero,
  manAtArms_BadHero,
  Occultist_BadHero,
  plagueDoctor_BadHero,
  Runaway_BadHero,
  Vestal_BadHero,
  Flagellant_BadHero,
];

function HeroSection({ url_Bg }) {
  return (
    <div className="Hero">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="heroContainer">
          <div className="heroContain">
            <h2>Select Your Darkest Hero</h2>
            <hr />

            {/*TODO: OrderIMG HEROS_ARRAY */}
            <div className="boxHeroContainer">
              {BadHero.map((hero, index) => (
                <a href="#">
                  <div className="imgContain">
                    <img className="badHero" src={hero} alt="" key={index} />
                    <img
                      className="goodHero"
                      src={GoodHero[index]}
                      alt=""
                      key={index}
                    />
                  </div>
                  <i>{heroesData.names[index]}</i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
