import React from "react";
import "./styles/HeroSection.css";

//import Component
import LinksButtons from "../../components/LinksButtons.jsx";

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

            <div className="boxHeroContainer">
              <div className="enemiesContain">
                {BadHero.map((Bad, index) => (
                  <LinksButtons key={index} img={Bad} name={"AAA"} link={"#"} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
