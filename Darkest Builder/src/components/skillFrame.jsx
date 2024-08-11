import React, { useState } from "react";
import "./styles/skillFrame.css";

//react-Icons
import { IoMdArrowDropdown } from "react-icons/io";

//Import Highwayman
import wickedslice from "../assets/img/paths/highwayman/72px-Dd2_ability_highwayman_wickedslice.webp";
import pistolshot from "../assets/img/paths/highwayman/72px-Dd2_ability_pistolshot.webp";
import duelistadvance from "../assets/img/paths/highwayman/72px-Dd2_ability_duelistsadvance.webp";
import trackingshot from "../assets/img/paths/highwayman/72px-Dd2_ability_trackingshot.webp";
import takeaim from "../assets/img/paths/highwayman/72px-Dd2_ability_takeaim.webp";
import pointblankshot from "../assets/img/paths/highwayman/72px-Dd2_ability_pointblankshot.webp";
import grapeshotblast from "../assets/img/paths/highwayman/72px-Dd2_ability_grapeshotblast.webp";
import openvein from "../assets/img/paths/highwayman/72px-Dd2_ability_openvein.webp";
import doubletap from "../assets/img/paths/highwayman/72px-Dd2_ability_doubletap.webp";
import highwayrobbery from "../assets/img/paths/highwayman/72px-Dd2_ability_highwayrobbery.webp";
import doublecross from "../assets/img/paths/highwayman/72px-Dd2_ability_doublecross.webp";

//import graveRobber
import Picktotheface from "../assets/img/paths/grave-robber/Dd2_ability_picktotheface.webp";
import Throwndagger from "../assets/img/paths/grave-robber/Dd2_ability_throwndagger.webp";
import Flashingdaggers from "../assets/img/paths/grave-robber/Dd2_ability_flashingdaggers.webp";
import Poisondart from "../assets/img/paths/grave-robber/Dd2_ability_poisondart.webp";
import Absinthe from "../assets/img/paths/grave-robber/Dd2_ability_absinthe.webp";
import Deadofnight from "../assets/img/paths/grave-robber/Dd2_ability_deadofnight.webp";
import Glintinthedark from "../assets/img/paths/grave-robber/Dd2_ability_glintinthedark.webp";
import Lunge from "../assets/img/paths/grave-robber/Dd2_ability_lunge.webp";
import Pirouette from "../assets/img/paths/grave-robber/Dd2_ability_pirouette.webp";
import Repartee from "../assets/img/paths/grave-robber/Dd2_ability_repartee.webp";
import Shadowfade from "../assets/img/paths/grave-robber/Dd2_ability_shadowfade.webp";

//import hellion
import wickedhack from "../assets/img/paths/hellion/Dd2_ability_wickedhack.webp";
import ironswan from "../assets/img/paths/hellion/Dd2_ability_ironswan.webp";
import barbaricyawp from "../assets/img/paths/hellion/Dd2_ability_barbaricyawp.webp";
import ifitbleeds from "../assets/img/paths/hellion/Dd2_ability_ifitbleeds.webp";
import toetotoe from "../assets/img/paths/hellion/Dd2_ability_toetotoe.webp";
import adrenalinerush from "../assets/img/paths/hellion/Dd2_ability_adrenalinerush.webp";
import bleedout from "../assets/img/paths/hellion/Dd2_ability_bleedout.webp";
import bloodlust from "../assets/img/paths/hellion/Dd2_ability_bloodlust.webp";
import breakthrough from "../assets/img/paths/hellion/Dd2_ability_breakthrough.webp";
import rauciousrevelry from "../assets/img/paths/hellion/Dd2_ability_rauciousrevelry.webp";
import howlingend from "../assets/img/paths/hellion/Dd2_ability_howlingend.webp";

//import jester
import razorswit from "../assets/img/paths/jester/Dd2_ability_razorswit.webp";
import fadetoblack from "../assets/img/paths/jester/Dd2_ability_fadetoblack.webp";
import sliceoff from "../assets/img/paths/jester/Dd2_ability_sliceoff.webp";
import battleballad from "../assets/img/paths/jester/Dd2_ability_battleballad.webp";
import inspiringtune from "../assets/img/paths/jester/Dd2_ability_inspiringtune.webp";
import harvest from "../assets/img/paths/jester/Dd2_ability_harvest.webp";
import finale from "../assets/img/paths/jester/Dd2_ability_finale.webp";
import solo from "../assets/img/paths/jester/Dd2_ability_solo.webp";
import playout from "../assets/img/paths/jester/Dd2_ability_playout.webp";
import encore from "../assets/img/paths/jester/Dd2_ability_encore.webp";
import echoingmarch from "../assets/img/paths/jester/Dd2_ability_echoingmarch.webp";

//import leper
import Dd2_ability_chop from "../assets/img/paths/leper/Dd2_ability_chop.webp";
import Dd2_ability_purge from "../assets/img/paths/leper/Dd2_ability_purge.webp";
import Dd2_ability_withstand from "../assets/img/paths/leper/Dd2_ability_withstand.webp";
import Dd2_ability_solemnity from "../assets/img/paths/leper/Dd2_ability_solemnity.webp";
import Dd2_ability_reflection from "../assets/img/paths/leper/Dd2_ability_reflection.webp";
import Dd2_ability_hew from "../assets/img/paths/leper/Dd2_ability_hew.webp";
import Dd2_ability_revenge from "../assets/img/paths/leper/Dd2_ability_revenge.webp";
import Dd2_ability_intimidate from "../assets/img/paths/leper/Dd2_ability_intimidate.webp";
import Dd2_ability_ruin from "../assets/img/paths/leper/Dd2_ability_ruin.webp";
import Dd2_ability_break from "../assets/img/paths/leper/Dd2_ability_break.webp";
import Dd2_ability_bash from "../assets/img/paths/leper/Dd2_ability_bash.webp";

//import manAtArms
import Dd2_ability_crush from "../assets/img/paths/manAtArms/Dd2_ability_crush.webp";
import Dd2_ability_rampart from "../assets/img/paths/manAtArms/Dd2_ability_rampart.webp";
import Dd2_ability_defender from "../assets/img/paths/manAtArms/Dd2_ability_defender.webp";
import Dd2_ability_bolster from "../assets/img/paths/manAtArms/Dd2_ability_bolster.webp";
import Dd2_ability_holdtheline from "../assets/img/paths/manAtArms/Dd2_ability_holdtheline.webp";
import Dd2_ability_bellow from "../assets/img/paths/manAtArms/Dd2_ability_bellow.webp";
import Dd2_ability_retribution from "../assets/img/paths/manAtArms/Dd2_ability_retribution.webp";
import Dd2_ability_command from "../assets/img/paths/manAtArms/Dd2_ability_command.webp";
import Dd2_ability_standfast from "../assets/img/paths/manAtArms/Dd2_ability_standfast.webp";
import Dd2_ability_courageousabandon from "../assets/img/paths/manAtArms/Dd2_ability_courageousabandon.webp";
import Dd2_ability_strategicwithdrawal from "../assets/img/paths/manAtArms/Dd2_ability_strategicwithdrawal.webp";

//import occultist
import Dd2_ability_sacrificialstab from "../assets/img/paths/occultist/Dd2_ability_sacrificialstab.webp";
import Dd2_ability_abyssalartillery from "../assets/img/paths/occultist/Dd2_ability_abyssalartillery.webp";
import Dd2_ability_weakeningcurse from "../assets/img/paths/occultist/Dd2_ability_weakeningcurse.webp";
import Dd2_ability_wyrdreconstruction from "../assets/img/paths/occultist/Dd2_ability_wyrdreconstruction.webp";
import Dd2_ability_daemonspull from "../assets/img/paths/occultist/Dd2_ability_daemonspull.webp";
import Dd2_ability_vulnerabilityhex from "../assets/img/paths/occultist/Dd2_ability_vulnerabilityhex.webp";
import Dd2_ability_bindingshadows from "../assets/img/paths/occultist/Dd2_ability_bindingshadows.webp";
import Dd2_ability_malediction from "../assets/img/paths/occultist/Dd2_ability_malediction.webp";
import Dd2_ability_anamnesis from "../assets/img/paths/occultist/Dd2_ability_anamnesis.webp";
import Dd2_ability_theburningstars from "../assets/img/paths/occultist/Dd2_ability_theburningstars.webp";
import Dd2_ability_chaoticoffering from "../assets/img/paths/occultist/Dd2_ability_chaoticoffering.webp";

//import plagueDoctor
import Dd2_ability_noxiousblast from "../assets/img/paths/plagueDoctor/Dd2_ability_noxiousblast.webp";
import Dd2_ability_blindinggas from "../assets/img/paths/plagueDoctor/Dd2_ability_blindinggas.webp";
import Dd2_ability_incision from "../assets/img/paths/plagueDoctor/Dd2_ability_incision.webp";
import Dd2_ability_battlefieldmedicine from "../assets/img/paths/plagueDoctor/Dd2_ability_battlefieldmedicine.webp";
import Dd2_ability_ounceofprevention from "../assets/img/paths/plagueDoctor/Dd2_ability_ounceofprevention.webp";
import Dd2_ability_plaguegrenade from "../assets/img/paths/plagueDoctor/Dd2_ability_plaguegrenade.webp";
import Dd2_ability_emboldeningvapours from "../assets/img/paths/plagueDoctor/Dd2_ability_emboldeningvapours.webp";
import Dd2_ability_disorientingblast from "../assets/img/paths/plagueDoctor/Dd2_ability_disorientingblast.webp";
import Dd2_ability_indiscriminatescience from "../assets/img/paths/plagueDoctor/Dd2_ability_indiscriminatescience.webp";
import Dd2_ability_causeofdeath from "../assets/img/paths/plagueDoctor/Dd2_ability_causeofdeath.webp";
import Dd2_ability_magnesiumrain from "../assets/img/paths/plagueDoctor/Dd2_ability_magnesiumrain.webp";

//import Vestal
import Skill_icon_vestal_hand_of_light from "../assets/img/paths/vestal/Skill_icon_vestal_hand_of_light.webp";
import Skill_icon_vestal_illumination from "../assets/img/paths/vestal/Skill_icon_vestal_illumination.webp";
import Skill_icon_vestal_judgement from "../assets/img/paths/vestal/Skill_icon_vestal_judgement.webp";
import Dd2_vestal_divine_grace from "../assets/img/paths/vestal/Dd2_vestal_divine_grace.webp";
import Skill_icon_vestal_blessing_of_fortitude from "../assets/img/paths/vestal/Skill_icon_vestal_blessing_of_fortitude.webp";
import Skill_icon_vestal_ministration from "../assets/img/paths/vestal/Skill_icon_vestal_ministration.webp";
import Skill_icon_vestal_mash_bash from "../assets/img/paths/vestal/Skill_icon_vestal_mash_bash.webp";
import Skill_icon_vestal_sanctuary from "../assets/img/paths/vestal/Skill_icon_vestal_sanctuary.webp";
import Skill_icon_vestal_blessing_of_light from "../assets/img/paths/vestal/Skill_icon_vestal_blessing_of_light.webp";
import Skill_icon_vestal_divine_comfort from "../assets/img/paths/vestal/Skill_icon_vestal_divine_comfort.webp";
import Skill_icon_vestal_mantra from "../assets/img/paths/vestal/Skill_icon_vestal_mantra.webp";

//import runaway
import Dd2_ability_searingstrike from "../assets/img/paths/Runaway/Dd2_ability_searingstrike.webp";
import Dd2_ability_firefly from "../assets/img/paths/Runaway/Dd2_ability_firefly.webp";
import Dd2_ability_smokescreen from "../assets/img/paths/Runaway/Dd2_ability_smokescreen.webp";
import Dd2_ability_runandhide from "../assets/img/paths/Runaway/Dd2_ability_runandhide.webp";
import Dd2_ability_hearthlight from "../assets/img/paths/Runaway/Dd2_ability_hearthlight.webp";
import Dd2_ability_ransack from "../assets/img/paths/Runaway/Dd2_ability_ransack.webp";
import Dd2_ability_cauterize from "../assets/img/paths/Runaway/Dd2_ability_cauterize.webp";
import Dd2_ability_controlledburn from "../assets/img/paths/Runaway/Dd2_ability_controlledburn.webp";
import Dd2_ability_dragonfly from "../assets/img/paths/Runaway/Dd2_ability_dragonfly.webp";
import Dd2_ability_firestarter from "../assets/img/paths/Runaway/Dd2_ability_firestarter.webp";
import Dd2_ability_backdraft from "../assets/img/paths/Runaway/Dd2_ability_backdraft.webp";

//import bountyHunter
import collectbounty from "../assets/img/paths/bountyHunter/Bh_skill_collectbounty_100_(1).webp";
import markfordeath from "../assets/img/paths/bountyHunter/Bh_skill_markfordeath_100_(1).webp";
import comehither from "../assets/img/paths/bountyHunter/Bh_skill_comehither_100_(1).webp";
import caltrops from "../assets/img/paths/bountyHunter/Bh_skill_caltrops_100_(1).webp";
import flashbang from "../assets/img/paths/bountyHunter/Bh_skill_flashbang_100_(1).webp";
import staredown from "../assets/img/paths/bountyHunter/Bh_skill_staredown_100_(1).webp";
import hurlbat from "../assets/img/paths/bountyHunter/Bh_skill_hurlbat_100_(1).webp";
import no_escape from "../assets/img/paths/bountyHunter/Bh_skill_no_escape_100_(1).webp";
import finishhim from "../assets/img/paths/bountyHunter/Bh_skill_finishhim_100_(1).webp";
import uppercut from "../assets/img/paths/bountyHunter/Bh_skill_uppercut_100_(1).webp";
import bodyguard from "../assets/img/paths/bountyHunter/Bh_skill_bodyguard_100_(1).webp";

//import crusader
import Skill_icon_crusader_smite from "../assets/img/paths/crusader/Skill_icon_crusader_smite.webp";
import Skill_icon_crusader_stunning_blow from "../assets/img/paths/crusader/Skill_icon_crusader_stunning_blow.webp";
import Skill_icon_crusader_zealous_accusation from "../assets/img/paths/crusader/Skill_icon_crusader_zealous_accusation.webp";
import Skill_icon_crusader_inspiring_cry from "../assets/img/paths/crusader/Skill_icon_crusader_inspiring_cry.webp";
import Skill_icon_crusader_rallying_cry from "../assets/img/paths/crusader/Skill_icon_crusader_rallying_cry.webp";
import Skill_icon_crusader_reap from "../assets/img/paths/crusader/Skill_icon_crusader_reap.webp";
import Skill_icon_crusader_battle_heal from "../assets/img/paths/crusader/Skill_icon_crusader_battle_heal.webp";
import Skill_icon_crusader_bulwark_of_faith from "../assets/img/paths/crusader/Skill_icon_crusader_bulwark_of_faith.webp";
import Skill_icon_crusader_holy_lance from "../assets/img/paths/crusader/Skill_icon_crusader_holy_lance.webp";
import Skill_icon_crusader_radiance from "../assets/img/paths/crusader/Skill_icon_crusader_radiance.webp";
import Skill_icon_crusader_tenacity from "../assets/img/paths/crusader/Skill_icon_crusader_tenacity.webp";

//import duelist
import Skill_icon_duelist_touche from "../assets/img/paths/duelist/Skill_icon_duelist_touche.webp";
import Skill_icon_duelist_feint from "../assets/img/paths/duelist/Skill_icon_duelist_feint.webp";
import Skill_icon_duelist_disengage from "../assets/img/paths/duelist/Skill_icon_duelist_disengage.webp";
import Skill_icon_duelist_flick from "../assets/img/paths/duelist/Skill_icon_duelist_flick.webp";
import Skill_icon_duelist_preparation from "../assets/img/paths/duelist/Skill_icon_duelist_preparation.webp";
import Skill_icon_duelist_the_boot from "../assets/img/paths/duelist/Skill_icon_duelist_the_boot.webp";
import Skill_icon_duelist_again from "../assets/img/paths/duelist/Skill_icon_duelist_again.webp";
import Skill_icon_duelist_fleche from "../assets/img/paths/duelist/Skill_icon_duelist_fleche.webp";
import Skill_icon_duelist_meditation from "../assets/img/paths/duelist/Skill_icon_duelist_meditation.webp";
import Skill_icon_duelist_coup_de_grace from "../assets/img/paths/duelist/Skill_icon_duelist_coup_de_grace.webp";
import Skill_icon_duelist_ruthless_instruction from "../assets/img/paths/duelist/Skill_icon_duelist_ruthless_instruction.webp";

//import flagellant
import Skill_icon_flagellant_punish from "../assets/img/paths/flagellant/Skill_icon_flagellant_punish.webp";
import Skill_icon_flagellant_fester from "../assets/img/paths/flagellant/Skill_icon_flagellant_fester.webp";
import Skill_icon_flagellant_undying from "../assets/img/paths/flagellant/Skill_icon_flagellant_undying.webp";
import Skill_icon_flagellant_endure from "../assets/img/paths/flagellant/Skill_icon_flagellant_endure.webp";
import Skill_icon_flagellant_lashs_gift from "../assets/img/paths/flagellant/Skill_icon_flagellant_lashs_gift.webp";
import Skill_icon_flagellant_rain_of_sorrows from "../assets/img/paths/flagellant/Skill_icon_flagellant_rain_of_sorrows.webp";
import Skill_icon_flagellant_more_more from "../assets/img/paths/flagellant/Skill_icon_flagellant_more_more.webp";
import Skill_icon_flagellant_suffer from "../assets/img/paths/flagellant/Skill_icon_flagellant_suffer.webp";
import Skill_icon_flagellant_sepsis from "../assets/img/paths/flagellant/Skill_icon_flagellant_sepsis.webp";
import Skill_icon_flagellant_deathless from "../assets/img/paths/flagellant/Skill_icon_flagellant_deathless.webp";
import Skill_icon_flagellant_necrosis from "../assets/img/paths/flagellant/Skill_icon_flagellant_necrosis.webp";

const skillsHero = [
  {
    name: "Highwayman",
    skills: [
      wickedslice,
      pistolshot,
      duelistadvance,
      trackingshot,
      takeaim,
      pointblankshot,
      grapeshotblast,
      openvein,
      doubletap,
      highwayrobbery,
      doublecross,
    ],
  },
  {
    name: "GraveRobber",
    skills: [
      Picktotheface,
      Throwndagger,
      Flashingdaggers,
      Poisondart,
      Absinthe,
      Deadofnight,
      Glintinthedark,
      Lunge,
      Pirouette,
      Repartee,
      Shadowfade,
    ],
  },
  {
    name: "Hellion",
    skills: [
      wickedhack,
      ironswan,
      barbaricyawp,
      ifitbleeds,
      toetotoe,
      adrenalinerush,
      bleedout,
      bloodlust,
      breakthrough,
      rauciousrevelry,
      howlingend,
    ],
  },
  {
    name: "Jester",
    skills: [
      razorswit,
      fadetoblack,
      sliceoff,
      battleballad,
      inspiringtune,
      harvest,
      finale,
      solo,
      playout,
      encore,
      echoingmarch,
    ],
  },
  {
    name: "Leper",
    skills: [
      Dd2_ability_chop,
      Dd2_ability_purge,
      Dd2_ability_withstand,
      Dd2_ability_solemnity,
      Dd2_ability_reflection,
      Dd2_ability_hew,
      Dd2_ability_revenge,
      Dd2_ability_intimidate,
      Dd2_ability_ruin,
      Dd2_ability_break,
      Dd2_ability_bash,
    ],
  },
  {
    name: "ManAtArms",
    skills: [
      Dd2_ability_crush,
      Dd2_ability_rampart,
      Dd2_ability_defender,
      Dd2_ability_bolster,
      Dd2_ability_holdtheline,
      Dd2_ability_bellow,
      Dd2_ability_retribution,
      Dd2_ability_command,
      Dd2_ability_standfast,
      Dd2_ability_courageousabandon,
      Dd2_ability_strategicwithdrawal,
    ],
  },
  {
    name: "Occultist",
    skills: [
      Dd2_ability_sacrificialstab,
      Dd2_ability_abyssalartillery,
      Dd2_ability_weakeningcurse,
      Dd2_ability_wyrdreconstruction,
      Dd2_ability_daemonspull,
      Dd2_ability_vulnerabilityhex,
      Dd2_ability_bindingshadows,
      Dd2_ability_malediction,
      Dd2_ability_anamnesis,
      Dd2_ability_theburningstars,
      Dd2_ability_chaoticoffering,
    ],
  },
  {
    name: "PlagueDoctor",
    skills: [
      Dd2_ability_noxiousblast,
      Dd2_ability_blindinggas,
      Dd2_ability_incision,
      Dd2_ability_battlefieldmedicine,
      Dd2_ability_ounceofprevention,
      Dd2_ability_plaguegrenade,
      Dd2_ability_emboldeningvapours,
      Dd2_ability_disorientingblast,
      Dd2_ability_indiscriminatescience,
      Dd2_ability_causeofdeath,
      Dd2_ability_magnesiumrain,
    ],
  },
  {
    name: "Vestal",
    skills: [
      Skill_icon_vestal_hand_of_light,
      Skill_icon_vestal_illumination,
      Skill_icon_vestal_judgement,
      Dd2_vestal_divine_grace,
      Skill_icon_vestal_blessing_of_fortitude,
      Skill_icon_vestal_ministration,
      Skill_icon_vestal_mash_bash,
      Skill_icon_vestal_sanctuary,
      Skill_icon_vestal_blessing_of_light,
      Skill_icon_vestal_divine_comfort,
      Skill_icon_vestal_mantra,
    ],
  },
  {
    name: "Runaway",
    skills: [
      Dd2_ability_searingstrike,
      Dd2_ability_firefly,
      Dd2_ability_smokescreen,
      Dd2_ability_runandhide,
      Dd2_ability_hearthlight,
      Dd2_ability_ransack,
      Dd2_ability_cauterize,
      Dd2_ability_controlledburn,
      Dd2_ability_dragonfly,
      Dd2_ability_firestarter,
      Dd2_ability_backdraft,
    ],
  },

  {
    name: "BountyHunter",
    skills: [
      collectbounty,
      markfordeath,
      comehither,
      caltrops,
      flashbang,
      staredown,
      hurlbat,
      no_escape,
      finishhim,
      uppercut,
      bodyguard,
    ],
  },

  {
    name: "Crusader",
    skills: [
      Skill_icon_crusader_smite,
      Skill_icon_crusader_stunning_blow,
      Skill_icon_crusader_zealous_accusation,
      Skill_icon_crusader_inspiring_cry,
      Skill_icon_crusader_rallying_cry,
      Skill_icon_crusader_reap,
      Skill_icon_crusader_battle_heal,
      Skill_icon_crusader_bulwark_of_faith,
      Skill_icon_crusader_holy_lance,
      Skill_icon_crusader_radiance,
      Skill_icon_crusader_tenacity,
    ],
  },

  {
    name: "Duelist",
    skills: [
      Skill_icon_duelist_touche,
      Skill_icon_duelist_feint,
      Skill_icon_duelist_disengage,
      Skill_icon_duelist_flick,
      Skill_icon_duelist_preparation,
      Skill_icon_duelist_the_boot,
      Skill_icon_duelist_again,
      Skill_icon_duelist_fleche,
      Skill_icon_duelist_meditation,
      Skill_icon_duelist_coup_de_grace,
      Skill_icon_duelist_ruthless_instruction,
    ],
  },
  {
    name: "Flagellant",
    skills: [
      Skill_icon_flagellant_punish,
      Skill_icon_flagellant_fester,
      Skill_icon_flagellant_undying,
      Skill_icon_flagellant_endure,
      Skill_icon_flagellant_lashs_gift,
      Skill_icon_flagellant_rain_of_sorrows,
      Skill_icon_flagellant_more_more,
      Skill_icon_flagellant_suffer,
      Skill_icon_flagellant_sepsis,
      Skill_icon_flagellant_deathless,
      Skill_icon_flagellant_necrosis,
    ],
  },
];

function skillFrame({ skillData, arrowCheck, heroIndex }) {
  return (
    <div className="skillBox">
      <div className="skillFrame">
        <IoMdArrowDropdown style={{ opacity: arrowCheck ? 1 : 0 }} />
        <img
          src={skillsHero[heroIndex].skills[skillData.id]}
          alt={skillData.name}
        />
      </div>
    </div>
  );
}

export default skillFrame;
