import React from "react";
import "./styles/herobody.css";

//import HeroImages
import Hwm_wiki from "../assets/HeroRef/Hwm_wiki.webp";
import Bh_2 from "../assets/HeroRef/Bh_2.webp";
import Duelist from "../assets/HeroRef/Duelist.webp";
import FlagWiki2 from "../assets/HeroRef/FlagWiki2.webp";
import Gr_wiki from "../assets/HeroRef/Gr_wiki.webp";
import Hel_wiki_2 from "../assets/HeroRef/Hel_wiki_2.webp";
import Jes_wiki from "../assets/HeroRef/Jes_wiki.webp";
import Lep_wiki2 from "../assets/HeroRef/Lep_wiki2.webp";
import Maa_wiki2 from "../assets/HeroRef/Maa_wiki2.webp";
import Occ_wiki_crop from "../assets/HeroRef/Occ_wiki_crop.webp";
import Pd_wiki from "../assets/HeroRef/Pd_wiki.webp";
import Run from "../assets/HeroRef/Run.webp";
import Ves_wiki from "../assets/HeroRef/Ves_wiki.webp";
import Crus_wiki from "../assets/HeroRef/Crus_wiki.webp";

const heroesImgArray = [
    Hwm_wiki,
    Bh_2,
    Duelist,
    FlagWiki2,
    Gr_wiki,
    Hel_wiki_2,
    Jes_wiki,
    Lep_wiki2,
    Maa_wiki2,
    Occ_wiki_crop,
    Pd_wiki,
    Run,
    Ves_wiki,
    Crus_wiki,
];

function herobody({ heroImg, heroRol }) {
  return (
    <>
      <img src={heroesImgArray[heroImg]} alt="darkestHero" />
      <ul>
        <li>{heroRol}</li>
      </ul>
    </>
  );
}

export default herobody;
