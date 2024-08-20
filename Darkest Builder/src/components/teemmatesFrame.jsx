import React from "react";
import "./styles/teemmatesFrame.css";

//import heroFrame
import Highwayman from "../assets/HeroFrame/highwayman.webp";
import Plaguedoctor from "../assets/HeroFrame/plaguedoctor.webp";
import Graverobber from "../assets/HeroFrame/graverobber.webp";
import Manatarms from "../assets/HeroFrame/manatarms.webp";
import Hellion from "../assets/HeroFrame/hellion.webp";
import Runaway from "../assets/HeroFrame/runaway.webp";
import Jester from "../assets/HeroFrame/jester.webp";
import Leper from "../assets/HeroFrame/leper.webp";
import Occultist from "../assets/HeroFrame/occultist.webp";
import Vestal from "../assets/HeroFrame/vestal.webp";
import Flagellant from "../assets/HeroFrame/flagellant.webp";
import Bountyhunter from "../assets/HeroFrame/bountyhunter.webp";
import Duelist from "../assets/HeroFrame/duelist.webp";
import Crusader from "../assets/HeroFrame/crusader.webp";

const HeroFrames = [
  { name: "Highwayman", src: Highwayman, alt: "Highwayman_Frame" },
  { name: "Grave Robber", src: Graverobber, alt: "GraveRobber_Frame" },
  { name: "Hellion", src: Hellion, alt: "Hellion_Frame" },
  { name: "Jester", src: Jester, alt: "Jester_Frame" },
  { name: "Leper", src: Leper, alt: "Leper_Frame" },
  { name: "Man At Arms", src: Manatarms, alt: "ManAtArms_Frame" },
  { name: "Occultist", src: Occultist, alt: "Occultist_Frame" },
  { name: "Plague Doctor", src: Plaguedoctor, alt: "PlagueDoctor_Frame" },
  { name: "Vestal", src: Vestal, alt: "Vestal_Frame" },
  { name: "Runaway", src: Runaway, alt: "Runaway_Frame" },
  { name: "Bounty Hunter", src: Bountyhunter, alt: "BountyHunter_Frame" },
  { name: "Crusader", src: Crusader, alt: "Crusader_Frame" },
  { name: "Duelist", src: Duelist, alt: "Duelist_Frame" },
  { name: "Flagellant", src: Flagellant, alt: "Flagellant_Frame" },
];

function teemmatesFrame({ heroIndex }) {
  return (
    <div className="heroFriendContain">
      <div className="heroFriend">
        <div className="friendContainer">
          <img
            src={HeroFrames[heroIndex.id].src}
            alt={HeroFrames[heroIndex.id].alt}
          />
        </div>
        <div className="friendName">
          <i>{HeroFrames[heroIndex.id].name}</i>
          <span>({heroIndex.path})</span>
        </div>
      </div>
    </div>
  );
}

export default teemmatesFrame;
