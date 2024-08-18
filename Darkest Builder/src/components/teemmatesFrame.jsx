import React from "react";
import "./styles/teemmatesFrame.css";

//import heroFrame
import Highwayman from "../assets/HeroFrame/highwayman.png";
import Plaguedoctor from "../assets/HeroFrame/plaguedoctor.png";
import Graverobber from "../assets/HeroFrame/graverobber.png";
import Manatarms from "../assets/HeroFrame/manatarms.png";
import Hellion from "../assets/HeroFrame/hellion.png";
import Runaway from "../assets/HeroFrame/runaway.png";
import Jester from "../assets/HeroFrame/jester.png";
import Leper from "../assets/HeroFrame/leper.png";
import Occultist from "../assets/HeroFrame/occultist.png";
import Vestal from "../assets/HeroFrame/vestal.png";
import Flagellant from "../assets/HeroFrame/flagellant.png";
import Bountyhunter from "../assets/HeroFrame/bountyhunter.png";
import Duelist from "../assets/HeroFrame/duelist.png";
import Crusader from "../assets/HeroFrame/crusader.png";

const HeroFrames = [
  { name: "Highwayman", src: Highwayman, alt: "Highwayman_Frame" },
  { name: "Plague Doctor", src: Plaguedoctor, alt: "PlagueDoctor_Frame" },
  { name: "Grave Robber", src: Graverobber, alt: "GraveRobber_Frame" },
  { name: "Man At Arms", src: Manatarms, alt: "ManAtArms_Frame" },
  { name: "Hellion", src: Hellion, alt: "Hellion_Frame" },
  { name: "Runaway", src: Runaway, alt: "Runaway_Frame" },
  { name: "Jester", src: Jester, alt: "Jester_Frame" },
  { name: "Leper", src: Leper, alt: "Leper_Frame" },
  { name: "Occultist", src: Occultist, alt: "Occultist_Frame" },
  { name: "Vestal", src: Vestal, alt: "Vestal_Frame" },
  { name: "Flagellant", src: Flagellant, alt: "Flagellant_Frame" },
  { name: "Bounty Hunter", src: Bountyhunter, alt: "BountyHunter_Frame" },
  { name: "Duelist", src: Duelist, alt: "Duelist_Frame" },
  { name: "Crusader", src: Crusader, alt: "Crusader_Frame" },
];

function teemmatesFrame({ heroIndex }) {
  return (
    <div>
      <div className="heroFriend">
        <div className="friendContainer">
          <img
            src={HeroFrames[heroIndex].src}
            alt={HeroFrames[heroIndex].alt}
          />
        </div>
        <i>{HeroFrames[heroIndex].name}</i>
      </div>
    </div>
  );
}

export default teemmatesFrame;
