import React from "react";
import "./styles/herobody.css";

//import database
import heroesData from "../data/heroesData.js";

//import HeroImages
import Hwm_wiki from "../assets/HeroRef/Hwm_wiki.png";
import Bh_2 from "../assets/HeroRef/Bh_2.png";
import Duelist from "../assets/HeroRef/Duelist.png";
import FlagWiki2 from "../assets/HeroRef/FlagWiki2.png";
import Gr_wiki from "../assets/HeroRef/Gr_wiki.png";
import Hel_wiki_2 from "../assets/HeroRef/Hel_wiki_2.png";
import Jes_wiki from "../assets/HeroRef/Jes_wiki.png";
import Lep_wiki2 from "../assets/HeroRef/Lep_wiki2.png";
import Maa_wiki2 from "../assets/HeroRef/Maa_wiki2.png";
import Occ_wiki_crop from "../assets/HeroRef/Occ_wiki_crop.png";
import Pd_wiki from "../assets/HeroRef/Pd_wiki.png";
import Run from "../assets/HeroRef/Run.png";
import Ves_wiki from "../assets/HeroRef/Ves_wiki.png";
import Crus_wiki from "../assets/HeroRef/Crus_wiki.png";

const heroesImgArray = [
  Hwm_wiki,
  Gr_wiki,
  Hel_wiki_2,
  Jes_wiki,
  Lep_wiki2,
  Maa_wiki2,
  Occ_wiki_crop,
  Pd_wiki,
  Ves_wiki,
  Run,
  Bh_2,
  Crus_wiki,
  Duelist,
  FlagWiki2,
];

function herobody({ heroIndex }) {
  return (
    <>
      <img src={heroesImgArray[heroIndex]} alt="darkestHero" />
      <ul>
        {heroesData[heroIndex].rolePlay.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </>
  );
}

export default herobody;
