const heroesData = {
  names: [
    { id: 1, name: "Highwayman" },
    { id: 2, name: "Grave-Robber" },
    { id: 3, name: "Hellion" },
    { id: 4, name: "Jester" },
    { id: 5, name: "Leper" },
    { id: 6, name: "Man-At-Arms" },
    { id: 7, name: "Occultist" },
    { id: 8, name: "Plague-Doctor" },
    { id: 9, name: "Vestal" },
    { id: 10, name: "Runaway" },
    { id: 11, name: "Bounty-Hunter" },
    { id: 12, name: "Crusader" },
    { id: 13, name: "Duelist" },
    { id: 14, name: "Flagellant" },
  ],

  0: {
    name: "Highwayman",
    rolePlay: ["ANY RANK", "HIGH DMG", "VERSATILE", "RIPOSTE"],
    cite: [
      "Hunted, hurried, a fugitive seeking to outpace the past.",
      "Up close and personal - thats how the job gets done.",
      "I never miss.",
      "Lets go another round, then.",
    ],
    paths: ["Wanderer", "Rogue", "Sharpshot", "Yellowhand"],
    description:
      "The Highwayman is a highly versatile hero that heavily focuses on dealing damage thanks to his ability to target the front Ranks as well as the back Ranks. His skillset places emphasis on damage and utility such as self-Buffs, Execution 1 finishers, and a unique skill to destroy or steal powerful Tokens from enemies.",

    characteristics: {
      Rol: [
        {
          title: "self-sufficient character specializing in direct damage.",
        },
      ],
      Strengths: [
        {
          title: "Reach",
          tooltips: "His damage is very flexible, he can hit any target",
        },
        {
          title: "Consistency",
          tooltips: "Damage Output, reach, mobility is consistent",
        },
        {
          title: "Robbery",
          tooltips:
            "Highway Robbery is a very powerful move to help mitigate tokens",
        },
      ],
      Weaknesses: [
        {
          title: "No+Tokens",
          tooltips: "No access to plus defensive tokens",
        },
        {
          title: "Low Ceiling",
          tooltips: "Doesn't have a super high damage ceiling",
        },
        {
          title: "Wants Mastery",
          tooltips: "Needs to be mastered points to be really effective",
        },
      ],
    },
  },

  1: {
    name: "Grave-Robber",
    rolePlay: ["ANY RANK", "STEALTH", "DODGE", "HIGH CRIT"],
    cite: [
      "Avarice slips unseen into the catacombs of the mind.",
      "I always was rather good at darts, wasn't I?",
      "I'll double the dose, just to be sure.",
      "The shadows—my favorite cloak.",
    ],
    paths: ["Wanderer", "Deadeye", "Venomdrop", "Nightsworn"],
    description:
      "The Grave Robber has some of the most flexible targeting and positioning amongst the Heroes. Combined with her fantastic self-sustain, Dodge, dodgeplusand and stealth, she suffers very little from enemy disruption despite her low HP. Most of Grave robber Damage is very reliant on CRIT chance as such Grave Robber requires more planning than other heroes but can be very effective given the right circunstances.",

    characteristics: {
      Rol: [
        {
          title:
            "Expert in direct damage focused on specific team compositions.",
        },
      ],
      Strengths: [
        {
          title: "Self-Sustain",
          tooltips: "Heal herself and has a high dodge chance",
        },
        {
          title: "Reach",
          tooltips: "His damage is very flexible, he can hit any target",
        },
        {
          title: "Dancing",
          tooltips:
            "Mobile character, can move around the team and reposition herself",
        },
      ],
      Weaknesses: [
        {
          title: "Low HP",
          tooltips: "Low HP, can be easily killed by high damage attacks",
        },
        {
          title: "Wants Crits",
          tooltips: "Damage balanced around hitting crits consistently",
        },
        {
          title: "Wants Mastery",
          tooltips: "Needs to be mastered points to be really effective",
        },
      ],
    },
  },

  2: {
    name: "Hellion",
    rolePlay: ["FRONT RANK", "HIGH DMG", "BLEED", "BLOODLUST"],
    cite: [
      "Beneath the bloodlust and fury, there is emptiness... and shame.",
      "I am no coward - come make your end!",
      "Let it bleed! AKYLORAAHHH!",
      "Again! I can take it!",
    ],
    paths: ["Wanderer", "Ravager", "Berserker", "Carcass"],
    description:
      "The Hellion's primary role a front-line damage dealer with large bursts of damage. Her ability to gain extra damage when Low HP pairs well with her secondary tank role( by having a multitude of self-heals, both for HP and Stress). In addition to tanking and doing damage, it can also serve as a minimum support role but in general Hellion brings large amounts of damage to the team while protecting her teammates with Taunt.",
    characteristics: {
      Rol: [
        {
          title:
            "Strong in position 1, combining high damage, offensive utility, and tanking.",
        },
      ],
      Strengths: [
        {
          title: "Reach",
          tooltips: "His damage is very flexible, he can hit any target",
        },
        {
          title: "Damage",
          tooltips: "Put out a lot of damage, especially with ravager effects",
        },
        {
          title: "Survivability",
          tooltips: "Self-sustain through adrenaline rush",
        },
      ],
      Weaknesses: [
        {
          title: "Wants Unlocks",
          tooltips: "Needs hero shrines to unlock her full potential",
        },
        {
          title: "Wants Mastery",
          tooltips: "Needs to be mastered points to be really effective",
        },
        {
          title: "Negative Tokens",
          tooltips:
            "Vulnerable to negative tokens, especially blind or weekend tokens",
        },
      ],
    },
  },

  3: {
    name: "Jester",
    rolePlay: ["ANY RANK", "BLEED", "STRESS HEAL", "SUPPORT"],
    cite: [
      "A murderous melody lingers long after the final chord has been struck.",
      "Play the hits, keep the crowd happy.",
      "This'll be a cutting performance...",
      "Let's keep this melody moving...",
    ],
    paths: ["Wanderer", "Virtuoso", "Soloist", "Intermezzo"],
    description:
      "The Jester is a highly mobile hero with skills that require him to move around the team. His versatility allows him to apply Combo Tokens effectively across different ranks. He excels at stress healing and buffing teammates on Rank 3, while using Finale on Rank 2 for powerful attacks against tough enemies.",
    characteristics: {
      Rol: [
        {
          title:
            "Great at applying combo tokens, fixing team order, and providing utility.",
        },
      ],
      Strengths: [
        {
          title: "Dancing",
          tooltips:
            "Mobile character, can move around the team and reposition herself",
        },
        {
          title: "Combo",
          tooltips: "Great at applying combo tokens",
        },
        {
          title: "Support",
          tooltips: "Great at heal-stress and buffing teammates",
        },
      ],
      Weaknesses: [
        {
          title: "Low HP",
          tooltips: "Low HP, can be easily killed by high damage attacks",
        },
        {
          title: "Low Damage",
          tooltips: "Exception for finale skill, his damage is low",
        },
        {
          title: "Teammates",
          tooltips:
            "Needs to be paired combo/buff with other heroes, alone is not effective",
        },
      ],
    },
  },

  4: {
    name: "Leper",
    rolePlay: ["FRONT RANK", "HIGH DMG", "SELF-SUFFICIENT", "DURABLE"],
    cite: [
      "Making peace with adversity is the very essence of existence.",
      "The winter storm knows only rage.",
      "Petals must fall.",
      "To rule, one must learn to serve.",
    ],
    paths: ["Wanderer", "Tempest", "Poet", "Monarch"],
    description:
      "The Leper is a strong frontline hero dealing high damage and absorbing damage for the team. His main weakness is Blind tokens, countered by Reflection. Limited to the front ranks, he lacks mobility and is vulnerable to knockbacks.",
    characteristics: {
      Rol: [
        {
          title: "Robust tank with self-healing and high damage potential.",
        },
      ],
      Strengths: [
        {
          title: "Survivability",
          tooltips:
            "Self-sustain stress-Heal, and high resistance generating block",
        },
        {
          title: "High Damage",
          tooltips: "will hit for a lot of damage, careful with blind tokens",
        },
        {
          title: "Utility",
          tooltips: "Control enemys position, keep himself alive, etc.",
        },
      ],
      Weaknesses: [
        {
          title: "Low Resists",
          tooltips: "Low resistance across the board",
        },
        {
          title: "Blinds",
          tooltips:
            "self-blinding can be a big problem for him, loose hit chance",
        },
        {
          title: "Positioning",
          tooltips: "needs to be in the front ranks to be effective",
        },
      ],
    },
  },

  5: {
    name: "Man-At-Arms",
    rolePlay: ["FRONT RANK", "GUARD", "DURABLE", "RIPOSTE"],
    cite: [
      "Pride - more devastating than the horrors of a hundred campaigns.",
      "Listen up you lot!",
      "Stand fast behind me!",
      "Look death in the eye.",
    ],
    paths: ["Wanderer", "Sergeant", "Bulwark", "Vanguard"],
    description:
      "The Man-at-Arms is essentially a tank who takes punishments to protect his more fragile teammates thanks to his easy access to Taunt and Block. Man-at-Arms can be effective at dealing damage as well.His entire skillset is highly flexible; allowing him to adapt to any Rank or Party. Because of his toughness and ability to protect his allies the Man-at-Arms can become the backbone of any team composition.",
    characteristics: {
      Rol: [
        {
          title:
            "Tank with high damage mitigation and utility, ideal for teams requiring control and resilience in combat.",
        },
      ],
      Strengths: [
        {
          title: "Versatile",
          tooltips: "Can be used pretty much dismantle any difficult encounter",
        },
        {
          title: "Support",
          tooltips: "protect his allies, and can heal stress",
        },
        {
          title: "Mobile",
          tooltips: "Move forward and backward, can adapt to any situation",
        },
      ],
      Weaknesses: [
        {
          title: "No DOT",
          tooltips: "No damage overtime effects",
        },
        {
          title: "Not Immortal",
          tooltips:
            "Overestimate the hero's endurance, putting them in constant danger",
        },
      ],
    },
  },

  6: {
    name: "Occultist",
    rolePlay: ["BACK RANK", "RANGED DMG", "HEALER", "OFFENSIVE SUPPORT"],
    cite: [
      "To know the abyss, one must embrace it.",
      "A curse upon my enemies, and a curse upon myself.",
      "Those beyond the veil hear my calls and obey!",
      "I drift in the starless skies of the void.",
    ],
    paths: ["Wanderer", "Ritualist", "Warlock", "Aspirant"],
    description:
      "the Occultist focuses on applying Negative Tokens to enemies and healing critically injured allies. As players progress, they unlock offensive skills that utilize Unchecked Power, enabling the Occultist to deal significant damage and apply powerful effects. However, harnessing Unchecked Power also introduces subtle risks for the Occultist.",
    characteristics: {
      Rol: [
        {
          title:
            "Utility kit with curses; its strength is control and support in combat.",
        },
      ],
      Strengths: [
        {
          title: "Reach",
          tooltips: "His damage is very flexible, he can hit any target",
        },
        {
          title: "Debuff",
          tooltips: "Can apply a lot of negative tokens to enemies",
        },
        {
          title: "Combo",
          tooltips: "Great at applying combo tokens and Stun",
        },
      ],
      Weaknesses: [
        {
          title: "Resists",
          tooltips:
            "Very resistant prone, a lot of his effectiveness can feel diminished if resist",
        },
        {
          title: "Risky Heal",
          tooltips:
            "Healing can be very risky, the bleed is pretty devastating",
        },
        {
          title: "No Defenses",
          tooltips:
            "No defensive skills, can be easily killed by high damage attacks",
        },
      ],
    },
  },

  7: {
    name: "Plague-Doctor",
    rolePlay: ["BACK RANK", "BLIGHT", "BLINDS", "HEALER"],
    cite: [
      "Indiscriminate science stains the surgeon's hands.",
      "Suture or sever? Both have their uses...",
      "A fascinating reaction...",
      "Let me prescribe a more ...holistic regimen.",
    ],
    paths: ["Wanderer", "Surgeon", "Alchemist", "Physician"],
    description:
      "The Plague Doctor is a reliable healer and supportive-damage dealer, with utility, diversity, and usefulness with her skills. The Plague Doctor is capable of dealing a surprisingly massive amount of Blight damage, with some respectable Direct and Bleed damage. Due to her lack of defensive skills and low-HP. The Plague Doctor is best utilized in the back Ranks, where she has access to most of her skills, and avoids harm from the dangerous front Ranks.",
    characteristics: {
      Rol: [
        {
          title:
            "healer and specialist in prolonged damage-over-time (DoT), she breaks enemy backlines and clears corpses.",
        },
      ],
      Strengths: [
        {
          title: "DOT",
          tooltips: "Apply burn, blight, and bleed tokens to enemies",
        },
        {
          title: "Support",
          tooltips: "Support unit with healing capabilities",
        },
        {
          title: "Flexible Items",
          tooltips:
            "Very flexible with trinkets, you can build damage/defensive/support in general",
        },
      ],
      Weaknesses: [
        {
          title: "Squishy",
          tooltips: "Low HP, can be easily killed by high damage attacks",
        },
        {
          title: "Backline Only",
          tooltips:
            "Needs to be in the back ranks 4-3 to be effective, and protect herself",
        },
        {
          title: "Needs Teammates",
          tooltips:
            "Build around her, she can't do much by herself, needs a team to be effective",
        },
      ],
    },
  },

  8: {
    name: "Vestal",
    rolePlay: ["BACK RANK", "RANGED DMG", "HEALER", "SUPPORT"],
    cite: [
      "A sister of battle—repudiated but unbowed!",
      "Submit and be purified!",
      "Faith is my shield; piety, my armor!",
      "Witness ye the holy radiance of the Light!",
    ],
    paths: ["Wanderer", "Confessor", "Chaplain", "Seraph"],
    description:
      "The Vestal is a versatile hero capable of supporting the team and dealing damage. Her strategic use of Conviction tokens and careful skill planning optimize her effectiveness across both front and back ranks.",
    characteristics: {
      Rol: [
        {
          title:
            "Powerful healer, ideal for slow-paced compositions and team protection.",
        },
      ],
      Strengths: [
        {
          title: "Support",
          tooltips: "Best support in the game, can heal and buff teammates",
        },
        {
          title: "Flexible",
          tooltips: "very flexible rank and can be used in any position",
        },
        {
          title: "Tanky",
          tooltips:
            "Surprisingly tanky, great support off-tank",
        },
      ],
      Weaknesses: [
        {
          title: "Conviction Timing",
          tooltips: "Needs all three tokens to reach her full potential",
        },
        {
          title: "Burst Damage",
          tooltips:
            "Low damage output, her consistent damage output per turn is pretty low",
        },
        {
          title: "Wants Mastery",
          tooltips:
            "Needs to be mastered points to be really effective, especially in the early game",
        },
      ],
    },
  },

  9: {
    name: "Runaway",
    rolePlay: ["FRONT RANK", "BURN", "STEALTH", "SUPPORT"],
    cite: [
      "Nothing remains... save a burning will to survive.",
      "Everything burns.",
      "Patch up. Stay sharp. Keep moving.",
      "I have nothing, and so I have everything.",
    ],
    paths: ["Wanderer", "Arsonist", "Survivor", "Orphan"],
    description:
      "As a new addition to the Hero's roster in Darkest Dungeon II, the Runaway's skillset has a heavy focus on Burn effect. The Runaway is primarily a front-liner, having access to most of her skills when placed on the front Ranks. Furthermore, she can target the back Ranks, provided that she stays on Rank 3 or 4, where she can not use various skills. She is one of the few Heroes that can use Stealth and also among the few that can heal allies.",
  },

  10: {
    name: "Bounty-Hunter",
    rolePlay: [],
    cite: ["The thrill of the hunt, the promise of payment!"],
    paths: ["Professional"],
    description:
      "The Bounty Hunter has a unique recruitment method through the inn's poster, costing 4 candles per region. He cannot form relationships but can experience stress and meltdowns. His pre-mastered skills offer powerful versatility despite the absence of paths or skill upgrades.",
  },

  11: {
    name: "Crusader",
    rolePlay: ["FRONT RANK", "DURABLE", "BURN", "SUPPORT"],
    cite: [
      "Metal and man, soldier and sword - forged in the fires of war.",
      "Flame and damnation!",
      "Let the blows rain upon me. I will not fall.",
      "When the wind whips violent, rally to my standard!",
    ],
    paths: ["Wanderer", "Aggressor", "Templar", "Banneret"],
    description:
      "Reynauld is a frontline Crusader with high resistance to bleed and burn. His paths include Wanderer, Aggressor, Templar, and Banneret, each with a different focus. His abilities range from powerful strikes, stress healing, stuns, and area attacks with burns, adapting to different roles depending on the chosen path.",
  },

  12: {
    name: "Duelist",
    rolePlay: ["ANY RANK", "RIPOSTE", "DODGE", "MOBILE"],
    cite: [
      "Perfection glints wicked along the rapier's edge.",
      "Encore! Again - until you get it right!",
      "Imbécile! You've nothing to me!",
      "I live for this",
    ],
    paths: ["Wanderer", "Instructice", "Antagoniste", "Intrédpide"],
    description:
      "The Duelist is a highly-mobile, high-damage-dealing hero, with low HP and few defenses. In a way, it plays similar to the Grave Robber, however the Duelist has no self-healing skills which makes her a higher-risk, higher-reward bet.",
  },

  13: {
    name: "Flagellant",
    rolePlay: ["FRONT RANK", "SACRIFICIAL SUPPORT", "BLIGHT", "DURABLE"],
    cite: [
      "Zealotry—an undying blight upon the soul.",
      "Sacrifice and sensation to the last!",
      "Let me but sample the bitter taste of death!",
      "I am purged of beauty, empty of all but blight!",
    ],
    paths: ["Wanderer", "Maniac", "Exanimate", "Scourge"],
    description:
      "The Flagellant is a hero with a unique Meltdown ability called 'Toxic'. He excels in high resistance to Death's Door and can never be resolute. His skills include blight attacks, self-healing at the cost of his own HP, stress and DoT transfer abilities, and team healing and protection capabilities. His three main paths (Maniac, Exanimate, Scourge) modify specific skills to focus on different playstyles and roles within the team.",
  },
};

export default heroesData;
