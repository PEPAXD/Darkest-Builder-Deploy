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
    paths: {
      name: ["Wanderer", "Rogue", "Sharpshot", "Yellowhand"],
      skillsArray: [[], [0, 2, 4, 5, 6], [1, 4, 5, 6, 8], [3, 6, 7, 9, 10]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A brawler focused on front rank combat and Riposte."',
        '"A back rank role that emphasizes ranged skill use"',
        '"A rank-flexible Bleed specialist. Riposte inflicts Bleed."',
      ],
      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
          {
            title: "Riposte Combo (33%)",
            text: "Target add Combo token when using Riposte.",
          },
        ],
        [
          { title: "If Rank = 1:", text: "+25% DMG" },
          { title: "If Rank = 3:", text: "-25% DMG" },
          { title: "If Rank = 4:", text: "-50% DMG" },
          { title: "Point Blank Shot", text: "Add Riposte" },
        ],
        [
          { title: "Ranged Skills:", text: "+25% DMG" },
          { title: "Melee Skills:", text: "-25% DMG" },
          { title: "Buff Speed", text: "+3 Speed" },
          { title: "Grapeshot Blast", text: "Add Strength" },
        ],
        [
          { title: "Buff HP", text: "+15% MAXHP" },
          { title: "Ranged Skills:", text: "-75% DMG" },
          { title: "Apply On Melee-Hit :", text: "-10% Bleed RES" },
          { title: "Highway Robbery", text: "Steal Positive Token" },
          { title: "Double Cross", text: "Remove Block" },
        ],
      ],
    },

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

      stats: {
        HP: [35],
        SPD: [5],
        FORW: [2],
        BACK: [2],

        BLEED: [30, 40],
        BURN: [30],
        BLIGHT: [30],
        DISEASE: [30, 40],
        MOVE: [30],
        STUN: [30, 40],
        DEBUFF: [20],
        DEATH: [60, 75],
      },
    },

    howToPlay: [
      {
        tittle: "Target Priority",
        description:
          "The gameplay with the Highwayman is characterized by its direct approach and its ability to deal significant damage. It is crucial to direct his attacks towards the biggest threats on the enemy side. Therefore, it is essential for him to focus on eliminating important enemy units.",
      },
      {
        tittle: "Backup Plans",
        description:
          "It is essential to have a backup plan to adapt to adverse situations, we must have alternative skills available for unforeseen events. 'Point-Blank Shot' or 'Advanced Duel' will be crucial for us to reposition ourselves. Having a well-defined backup plan can make the difference between victory and defeat in critical situations of the game.",
      },
      {
        tittle: "Feed Buffs",
        description:
          "To maximize performance, provide your character with a wide range of benefits and enhancements. Equip yourself with damage items, apply critical buffs. Your character will truly stand out when receiving this type of additional support. Don't underestimate the impact these small details can have on your performance in the game!",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "Turn Start: If First in Turn Order: Crit (33%)",
          "Self: Take Aim Skill: Skills Ignore Blind",
          "Target: Tracking Shot Skill: -20% Stun RES",
          "vs Creature: -66% Healing Received from Skills",
        ],
      },
      {
        stats: [
          "If Rank = 1: +10% CRIT",
          "If Rank = 4: +10% CRIT",
          "Open Vein Skill: +1 Bleed Dealt",
          "Gain on Hit: Ranged Skills: +1 Stress (15%)",
        ],
      },
      {
        stats: [
          "+5% DMG per Positive Token",
          "Target: Highway Robbery Skill: Steal Regeneration",
          "If Relics in inventory > 50: -10% CRIT",
        ],
      },
      {
        stats: [
          "[2 Targets]",
          "Positive affinity x6: (80%)",
          "Negative affinity x4: (20%)",
        ],
        cite: '"Wrecked him? That it surely did."',
      },
    ],

    teemmates: {
      cite: "The Wall of Faith: Unstoppable Mitigation Comp",

      comp: [
        { id: 8, path: [3, "Seraph"] },
        { id: 0, path: [2, "Sharpshot"] },
        { id: 3, path: [1, "Virtuoso"] },
        { id: 5, path: [2, "Bulwark"] },
      ],

      description:
        "This team focuses on strong mitigation without sacrificing much damage. Vestal uses *Consecration of Fortitude* on Jester to generate block or dodge tokens every turn. Barristan uses *Rampart* to stun or reposition, while Dismas uses *Pistol Shot* to stun as well. Jester marks a target with *Razor’s Wit* and can use *Finale* if needed. Vestal uses the tokens to cast *Judgment* with high damage and can apply *Consecration of Light* on Dismas to boost his damage. With *Bolster* and strong heals, the team handles stress and HP effectively. This composition is effective in all acts, especially against bosses vulnerable to stuns.",
    },

    skills: [
      {
        id: 0,
        name: "Wicked Slice",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
        ],

        description:
          "High damage skill that hits the Front-rank. Has Execution, helping bypass Death Armor which would let enemies survive a Deathblow.",
      },
      {
        id: 1,
        name: "Pistol Shot",

        Type: 1,

        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Target: [2, 3, 4],
          },
          {
            Rank: [1, 2, 3],
            Target: [2, 3, 4],
          },
          { Rank: [1, 2], Target: [2, 3, 4] },
          {
            Rank: [1, 2, 3],
            Target: [2, 3, 4],
          },
        ],

        description:
          "High damage skills that hits the Back-ranks. Applies Daze/ Stun when Target has combo. Most used as a utility but still has enough damage to kill most enemies, is the only HWM skill that can directly damage Rank 4..",
      },
      {
        id: 2,
        name: "Duelist's Advance",
        Type: 0,

        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
          },
        ],

        description:
          "Forward 1. Gives access to Riposte, Highwayman Riposte has a chance to apply Combo on enemies, this make HWM's Riposte valuable as a DMG skill, Finisher Tool and a Support skill.",
      },
      {
        id: 3,
        name: "Tracking Shot",
        Type: 1,

        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Target: [1, 2, 3, 4],
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [1, 2, 3, 4],
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [1, 2, 3, 4],
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [1, 2, 3, 4],
          },
        ],
        description:
          "Hard counter dodge, dodgeplus Dodge. Very useful to counter certain enemies as no only Ignores and Remove dodgeplus but also prevents enemies to Gain dodgeplus / Dodge for 2 Turns. Also adds Combo and Removes Stealth as an added bonus.",
      },
      {
        id: 4,
        name: "Take Aim",
        Type: 2,

        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Cooldown: 2,
          },
          {
            Rank: [2, 3, 4],
            Target: [0],
            Cooldown: 3,
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Cooldown: 2,
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Cooldown: 2,
          },
        ],

        description:
          "Is the cornerstone of HWM's damage output. It generates crit, dodge(and Dd2 token speed when mastered) while simultaneously clearing blind. Is recommended to always use this skills in combination with other DMG skills as the guaranteed Crit will greatly improve your DPS.",
      },
      {
        id: 5,
        name: "Point Blank Shot",
        Type: 1,

        skillsPaths: [
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
        ],

        description:
          "is a highly devastating skill, but has rather strict Rank requirement (Only can be used in Rank 1). Makes good combo with another Dancing heroes that can move HWM to Rank",
      },
      {
        id: 6,
        name: "Grapeshot Blast",
        Type: 1,

        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [4],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2],
            Target: [3, 4],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
        ],

        description:
          "Multi-hit attack. Due to the Low Base DMG is preferably used to remove Tokens and to finish off enemies at low health. Combined with Dd2 ability takeaimTake Aim can be used as a Pseudo Stress Healer (it procs Stress heal chance two times)",
      },
      {
        id: 7,
        name: "Open Vein",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
        ],

        description:
          "Moderate Damage skill that hits the front ranks. Althought the direct damage is not high, the skill shines when the Target has Combo as it doubles the Bleed Dealt.",
      },
      {
        id: 8,
        name: "Double Tap",
        Type: 1,

        skillsPaths: [
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3, "Not Corpse"],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
        ],
        description:
          "High damage skill that hits the Middle-ranks. Has Execution 1 (when upgraded), and deals more DMG when the enemy is a low Icon HP dd2 HP. Works as a main DMG Skill, as a Finisher and is most effective the more health has the enemy.",
      },
      {
        id: 9,
        name: "Highway Robbery",
        Type: 0,

        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
            Cooldown: 1,
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
            Cooldown: 1,
          },
        ],
        description:
          "is extremely useful against enemies that can apply positive Tokens on themselves or allies,as it can remove these Tokens and destroy enemies' advantages to alleviate combat risks. With the skill upgraded, the Highwayman can also steal powerful Tokens to increase his damage and defense",
      },
      {
        id: 10,
        name: "Double Cross",
        Type: 0,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
        ],
        description:
          "can apply Vulnerable to enemies and block to Self. Is best pair with other heroes that can use Vulnerable. Take Aim can make this Skill more effective as Crits ignores +20% Debuff RES.",
      },
    ],
  },

  1: {
    name: "Grave Robber",
    rolePlay: ["ANY RANK", "STEALTH", "DODGE", "HIGH CRIT"],
    cite: [
      "Avarice slips unseen into the catacombs of the mind.",
      "I always was rather good at darts, wasn't I?",
      "I'll double the dose, just to be sure.",
      "The shadows—my favorite cloak.",
    ],

    paths: {
      name: ["Wanderer", "Deadeye", "Venomdrop", "Nightsworn"],
      skillsArray: [[], [1, 2, 4, 9, 5], [1, 2, 3, 4, 10], [1, 2, 7, 8, 9]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A back rank role with a heavy emphasis on CRIT and reach."',
        '"Rank-flexible role that expands the Grave Robbers Blight capabilities."',
        '"A flexible role with a variety of Stealth-oriented offense and counter-defense skills."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
        ],
        [
          {
            title: "Buff Ranged Skills:",
            text: "Increased damage and crit chance",
          },
          { title: "Debuff Melee Damage", text: "Decreased Melee damage" },
          { title: "Debuff Mov RES", text: "-33% movement resistance" },
        ],
        [
          {
            title: "Blight Application Bonus",
            text: "Applies +2 Blight from attacks when in Stealth",
          },
          { title: "Speed Reduction", text: "-3 Speed" },
          {
            title: "Blight Resistance Piercing",
            text: "Lunge, Pirouette, and Shadow Fade gain 30% Blight resistance piercing",
          },
          {
            title: "Flashing Daggers",
            text: "Flashing Daggers applies 2 (4) Blight",
          },
        ],
        [
          {
            title: "Stealth Damage Boost",
            text: "+50% damage when attacking from Stealth",
          },
          { title: "Health Reduction", text: "-20% Max HP" },
        ],
      ],
    },

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

      stats: {
        HP: [29],
        SPD: [5, 7],
        FORW: [2],
        BACK: [2],

        BLEED: [30],
        BLIGHT: [30, 40],
        BURN: [30],
        DISEASE: [30],
        STUN: [20],
        MOVE: [20],
        DEBUFF: [30],
        DEATH: [60, 75],
      },
    },

    howToPlay: [
      {
        tittle: "Damage Skill",
        description:
          "Focus on one damage skill and upgrade it as soon as possible... Pick to the Face is a good mele option or flashing daggers for a ranged skill. And pick one other move skill to reposition yourself.",
      },
      {
        tittle: "Build Around It",
        description:
          "Build the rest of the team around it to maximize the potential of the Grave Robber. She can be a good combo with other heroes that can apply Combo tokens.",
      },
      {
        tittle: "Keep a Heal",
        description:
          "Make sure to equip a healing or defense skill to ensure her survival. She has a low HP pool and can be easily killed. Keeping a heal or defensive ability can help her stay alive longer.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "If Stealth: +20% DMG",
          "Self: Shadow Fade Skill: Remove All Negative Tokens",
          "If no Stealth: -25% Healing Received from Skills",
        ],
      },
      {
        stats: [
          "Apply to Attacker when Missed: Combo",
          "Pick to the Face Skill: +10% CRIT",
          "Self: Dead of Night Skill: +2 Relics, +1 Bauble",
          "Gain When Hit: +1 Stress (15%)",
        ],
      },
      {
        stats: [
          "Apply on CRIT: Blight1",
          "If Stealth: +1 Blight Dealt",
          "Self: Absinthe Skill: Blight1",
        ],
      },
      {
        stats: ["[1 Target]", "+10% CRIT (Until Next Inn)"],

        cite: '"Oh darling, you cant get this anywhere."',
      },
    ],

    teemmates: {
      cite: "Lightning Strikes Twice: High-Damage Double Lunge Comp with Nightsworn GraveRobber",

      comp: [
        { id: 1, path: [3, "Nightsworn"] },
        { id: 7, path: [2, "Alchemist"] },
        { id:6, path: [3, "Aspirant"] },
        { id: 2, path: [1, "Ravager"] },
      ],

      description:
        "This is a double lunge comp focused on the GraveRobber (Nightsworn) paired with Hellion (Ravager) for high damage and flexibility. The GraveRobber lunges on turn 1, and then the Occultist (Alhazred) pulls her back to rank 3 with Binding Shadows, allowing her to lunge again and follow up with Pirouette. Hellion uses Toe to Toe to stay in place and tank, while Alhazred repositions Audrey to repeat the cycle. The Plague Doctor (PD) or Vestal (Seraph) provide healing and support, depending on whether you prefer consistency or additional mitigation. This team excels at quickly eliminating enemies, winning fights in 2 turns, and handles most bosses well.",
    },

    skills: [
      {
        id: 0,
        name: "Pick to the Face",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
        ],
        description:
          "Melee option to deal with frontliners. Ignores and Remove block from enemies. Like most of her skills, is very effective with Combo since it gives an extra +50% CRIT chance. Combined with Stiff Drink (+50% DMG) the skill can deliver a powerful blow.",
      },
      {
        id: 1,
        name: "Thrown Dagger",
        Type: 1,

        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Target: [2, 3, 4],
          },
          {
            Rank: [1, 2],
            Target: [2, 3, 4],
          },
          {
            Rank: [1, 2, 3],
            Target: [2, 3, 4],
          },
          {
            Rank: [1, 2, 3],
            Target: [2, 3, 4],
          },
        ],
        description:
          "Ranged option, can hit back-lines and certain front-lines. It can bypass both Guard and Dodge when Grave Robbe has Stealth. Having the highest CRIT chance of all GR Moves (alongisde ability lunge) makes this move very deadly combined with +50% CRIT on Combo.",
      },
      {
        id: 2,
        name: "Flashing Daggers",
        Type: 1,

        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Target: [2, 3],
          },
          {
            Rank: [1, 2],
            Target: [3, 4],
          },
          {
            Rank: [1, 2, 3],
            Target: [2, 3],
          },
          {
            Rank: [1, 2, 3],
            Target: [2, 3, 4],
            Cooldown: 1,
          },
        ],
        description:
          "Ranged option, can hit back-lines and certain front-lines. It can bypass both Guard and Dodge when Grave Robbe has Stealth. Having the highest CRIT chance of all GR Moves (alongisde ability lunge) makes this move very deadly combined with +50% CRIT on Combo.",
      },
      {
        id: 3,
        name: "Poison Dart",
        Type: 1,

        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3, 4],
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3, 4],
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3, 4],
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3, 4],
          },
        ],
        description:
          "source of Blight. Can hit all Ranks and it benefits greatly from the crit chance due to Blight (Extra Duration/Ignore Blight RES). IT has a lower CRIT chance than other Ranged Options but shares the +50% CRIT on Combo with makes this move incredible effective.",
      },
      {
        id: 4,
        name: "Absinthe",
        Type: 2,

        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Uses: 3,
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Uses: 3,
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Uses: 3,
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Uses: 3,
          },
        ],

        description:
          "Primary panic button. Heals HP and applies a good amount of Dodge and speed. It is advisable to equip this skill as it is one of the major sources of self-sustain for Grave robber.",
      },
      {
        id: 5,
        name: "Dead of Night",
        Type: 0,

        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Corpse: [1, 2, 3, 4],
            Uses: 3,
          },
          {
            Rank: [1, 2, 3, 4],
            Corpse: [1, 2, 3, 4],
            Uses: 3,
          },
          {
            Rank: [1, 2, 3, 4],
            Corpse: [1, 2, 3, 4],
            Uses: 3,
          },
          {
            Rank: [1, 2, 3, 4],
            Corpse: [1, 2, 3, 4],
            Uses: 3,
          },
        ],

        description:
          "amazing Self-sustain move . Heals HP, Stress and adds Stealth.The only drawback of this move is it requires a enemy Corpse to work. If the fight doesnt have any Corpse (like boss fights) It is better to temporarily replace this skill with another one.",
      },
      {
        id: 6,
        name: "Glint in the Dark",
        Type: 1,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
        ],

        description:
          "is one of the most unique Skill in the game as is the only Skill that Bypass Death's Door ( If Grave Robber has Stealth ). Combined with a respectable amount of damage this makes the most difficult fights in the game easier. High threats such as Exemplar (50% Deathsdoor RES) can be killed much faster with this ability.",
      },
      {
        id: 7,
        name: "Lunge",
        Type: 0,

        skillsPaths: [
          {
            Rank: [1, 2],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2],
            Target: [1, 2, 3],
          },
        ],

        description:
          "has the highest CRIT chance of all GR Moves (alongisde Thrown Dagger) wich makes it a very deadly move. This is one of the moves that benefits the most from Trinkets (Example: Trinket cultist silent treatment Silent Treatment, Heartseeker (all)Heartseeker , Sharpness charm (all)Sharpness Charm.) since it's flaws (Huge, inconsistence, damage ranges reliant on CRITs) can be easily denied with Trinkets.",
      },
      {
        id: 8,
        name: "Pirouette",
        Type: 1,

        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2], Cooldown: 1 },
          { Rank: [3, 4], Target: [1, 2], Cooldown: 1 },
          { Rank: [3, 4], Target: [1, 2], Cooldown: 1 },
          { Rank: [3, 4], Target: [1, 2], Cooldown: 1 },
        ],

        description:
          "High damage, high crit move that hits both Front-rank, a very deadly skill that can kill both Front-ranks in a single blow with the correct Trinkets and some Luck. It moves Grave Robber Backwards and apply daze to her but the payoff is worth the huge Damage potential of this skill.",
      },
      {
        id: 9,
        name: "Repartee",
        Type: 2,

        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Target: [0] },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 3 },
        ],

        description:
          "applies DodgePlus x3 and Taunt making Grave Robber a 'Dodge Tank'. Although DodgePlus reduces all damage to zero, GR's low Base HP could cause an unlucky roll to put Grave Robber at risk.",
      },
      {
        id: 10,
        name: "Shadow Fade",
        Type: 2,

        skillsPaths: [
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
        ],

        description:
          "Moves Back 2, gives speed and applies unconditional Stealth to Grave Robber, most of Grave Robber skills have extra benefits with Stealth wich makes this skill a Combo move. Although there are better alternatives to get Stealth.",
      },
    ],
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
    paths: {
      name: ["Wanderer", "Ravager", "Berserker", "Carcass"],
      skillsArray: [[], [0, 1, 4, 5, 9], [0, 3, 5, 7, 9], [2, 3, 4, 8, 9]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A front ranks role that enhances damage at the cost of Bleed capabilities."',
        '"A front ranks role that sacrifices HP in favor of Bleed."',
        '"A front ranks role that absorbs significant punishment."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
        ],
        [
          { title: "Max HP Boost", text: "+20% MaxHP" },
          { title: "More DMG Rank 1 ", text: "If Rank = 1: +25% DMG" },
          { title: "Bleed Chance Reduction", text: "-33% Bleed" },
          { title: "Turn Start Bleed", text: "Turn Start: Bleed x3 (25%)" },
        ],
        [
          { title: "Max HP Reduction", text: "-20% MaxHP" },
          { title: "Death's Door Resistance", text: "+10% Deathsdoor RES" },
          { title: "Increased Bleed Chance", text: "+33% Bleed" },
          {
            title: "BoostCrit on Bleed Skills",
            text: "Bleed-causing Skills: +10% CRIT",
          },
        ],
        [
          {
            title: "Stress Reduction on CRIT",
            text: "CRIT: Heal 0-2 Stress Stress",
          },
          {
            title: "Barbaric YAWP",
            text: "Taunt x2",
          },
          {
            title: "Wicked Hack",
            text: "Target Remove block",
          },
          {
            title: "Turn Start",
            text: "Add winded",
          },
          {
            title: "Turn End",
            text: "Add Per winded: block (75%)",
          },
        ],
      ],
    },

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
      stats: {
        HP: [35, 39],
        SPD: [4],
        FORW: [1],
        BACK: [0],

        BLEED: [30],
        BLIGHT: [30],
        BURN: [30],
        DISEASE: [20, 30],
        STUN: [20],
        MOVE: [20],
        DEBUFF: [20],
        DEATH: [60, 80],
      },

      uniqueAttributes: {
        tittle: "Bonus Damage at Low Health",
        description:
          "The Hellion gets +25% damage when her HP is below 50% and another +25% when it's below 25%.",
      },

      uniqueTokens: [
        {
          id: 0,
          FastDescription:
            "A self-debuff token generated or removed by certain Hellion skills.",
          skillPoints: [
            "-3 SPD per Winded",
            "-33% DMG per Winded",
            "Carcass: Turn End: Add Block (75%) per Winded",
            "Duration: Until end of combat",
            "Limit: 3",
          ],
        },
      ],
    },

    howToPlay: [
      {
        tittle: "Winded Moves Last",
        description:
          "Put her in rank one or two, up front. You'll want to save your most powerful moves for as long as possible. Avoid using abilities like 'howling' and 'bleed out' until the winded penalty isn't a major issue, or make sure you have a quick way to recover if you decide to use them.",
      },
      {
        tittle: "HP < 50%",
        description:
          "Hellion's damage increases when she's below 50% health. This can be a good time to use her most powerful abilities, make sure to keep her life low to maximize her damage output. but not like a dangerous level.",
      },
      {
        tittle: "Equip a Move Skill",
        description:
          "Equip a move skill to reposition her if she gets pushed back. This will allow her to get back to the front line and continue dealing damage.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "Gain on CRIT: Melee Skills: Strength (66%)",
          "If It Bleeds Skill: +2 Bleed Dealt",
          "When Moving: If Rank = 4: +2 Stress",
        ],
      },
      {
        stats: [
          "If Rank = 1: -20% Disease RES",
          "If Rank = 2: +30% DMG",
          "Apply on Hit: Breakthrough Skill: Combo, Add 1 Negative Token",
        ],
      },
      {
        stats: [
          "If Bleed: +25% DMG",
          "Self: Barbaric YAWP! Skill: Strength",
          "Gain on Bleed Resist: Weak (25%)",
        ],
      },
      {
        stats: [
          "[1 Target]",
          "If Rank 1: +25% DMG (Until Next Inn)",
          "If Rank 2: +15% DMG (Until Next Inn)",
          "If Rank 3: -15% DMG (Until Next Inn)",
          "If Rank 4: -25% DMG (Until Next Inn)",
        ],
        cite: '"Wrecked him? That it surely did."',
      },
    ],

    teemmates: {
      cite: "Backline Annihilation: The Ultimate Comp for Crushing Enemies with PD and Hellion",

      comp: [
        { id: 7, path: [2, "Alchemist"] },
        { id: 6, path: [2, "Warlock"] },
        { id: 0, path: [2, "Sharpshot"] },
        { id: 2, path: [1, "Ravager"] },
      ],
      description:
        "This comp specializes in crushing enemy backlines with high damage cleaves and focused attacks. The Plague Doctor handles backline damage with Plague Grenade and Magnesium Rain, and provides healing. The Occultist adds extra backline damage with Abyssal Artillery and offers mitigation through curses and pulls. The choice between Jester and Dismas depends on whether you need flexibility or reliability; Jester offers Finale and movement skills but is more vulnerable, while Dismas provides consistent damage and bulk. The Hellion delivers strong frontline damage and tanking with Toe to Toe and can use Howling End for a powerful alpha strike. This comp is highly effective in Act 2, the Tangle, and cultist fights, focusing on backline destruction with flexibility.",
    },

    skills: [
      {
        id: 0,
        name: "Wicked Hack",
        Type: 0,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
        ],

        description:
          "Front-line Melee attack. Does a respectable amount of damage and doesn't add Winded, combined with Combo can do high amounts of damage enough to kill most enemies in one hit.",
      },
      {
        id: 1,
        name: "Iron Swan",
        Type: 0,

        skillsPaths: [
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
        ],

        description:
          "respectable melee attack that has the main advantage of hitting rank 4, this is the only way for hellion to hit rank 4 which makes this move very valuable since Back-rank enemies tend to have low HP.",
      },
      {
        id: 2,
        name: "Barbaric YAWP!",
        Type: 1,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2],
            Cooldown: 1,
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
            Cooldown: 1,
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
            Cooldown: 1,
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
            Cooldown: 1,
          },
        ],

        description:
          " support skill that serves the purpose of Weak the enemy and Stun when Combo. If you haave enough combo this move can really shine as a support tool for the team by disrupting and disabling the enemy frontline.",
      },
      {
        id: 3,
        name: "If It Bleeds",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
        ],

        description:
          "respectable damage and Bleed attack that hits Rank 2 and Rank 3. The main advantage of this ability is being able to hit the Back-ranks with a good punch (Is the only way to hit rank 3 with Hellion). Requires Hellion to be in rank 2 or 3 which can be disfavorable depending of the team.",
      },
      {
        id: 4,
        name: "Toe to Toe",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
        ],

        description:
          "main tank ability of Hellion. GIves Taunt and Immobilize and Clears Winded but doesn't give Defensive Tokens like Block. Hellion's passive makes this a good thing since you want her to be at Low Icon HP, This ability mixed with Self-healing Skills gives high survivability and protection to other team Members.",
      },
      {
        id: 5,
        name: "Adrenaline Rush",
        Type: 3,

        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Cooldown: 3,
            Uses: 2,
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Cooldown: 3,
            Uses: 2,
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Cooldown: 3,
            Uses: 2,
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [0],
            Cooldown: 3,
            Uses: 2,
          },
        ],

        description:
          "amazing Self-heal move . Heals HP, and Removes all DOTS, is only usable when Low HP, besides the main Healing it gives a buff (Healing on Hit). Combine this with Cleave attacks like Combat Items or Barbaric Yawp to maximize the more Healing per Turn.",
      },
      {
        id: 6,
        name: "Bleed Out",

        Type: 0,

        skillsPaths: [
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
        ],

        description:
          "High damage and Bleed, can easily achieve high amounts of bleed when spammed. It applies Winded but this is barely a downside since the main damage is the bleed damage (DOTS are unnafected by Winded). HIgh HP targets can be killed easily with the high amount of dot.",
      },
      {
        id: 7,
        name: "Bloodlust",

        Type: 2,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [0],
            Cooldown: 2,
          },
          {
            Rank: [2, 3, 4],
            Target: [0],
            Cooldown: 2,
          },
          {
            Rank: [2, 3, 4],
            Target: [0],
            Cooldown: 2,
          },
          {
            Rank: [2, 3, 4],
            Target: [0],
            Cooldown: 2,
          },
        ],
        description:
          "gives Hellion a 5 turns that her Damage against Bleed, doesn't have a cooldown and Clears winded, this gives a potential 100%-150% Extra damage. It requires setup but the amount of damage it can provided combined with other Skills and heroes is worth the effort. (Example: Howling End, Jester)",
      },
      {
        id: 8,
        name: "Breakthrough",

        Type: 0,
        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
            Cooldown: 1,
          },
        ],

        description:
          "Support skill that counters high Block and Guard matchups at cost of Winded. (Example: Combat turnorder enemy lost battalion foot soldierLost Batallion). This is the only skill that makes enemies unable to Obtain Block. Also moves Hellion Forward 2 which is handy for heavy disruptions enemies and Shuffle.",
      },
      {
        id: 9,
        name: "Raucous Revelry",

        Type: 2,
        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3, 4],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3, 4],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3, 4],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },
        ],
        description:
          "Huge Stress-heal skill that heals when Low HP. it can heal up to 3 stress + 1 stress to allies which is enough to prevent Meltdowns. The only downside is the cooldown and it applies Winded.",
      },
      {
        id: 10,
        name: "Howling End",

        Type: 0,
        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2],
            Cooldown: 3,
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
            Cooldown: 3,
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
            Cooldown: 3,
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
            Cooldown: 3,
          },
        ],
        description:
          "HUGE damage front-line attack that gives Winded. This attack derives a very powerful blow and with trinkets and buffs has the potential to instakill almost every enemy in the game (Exception Bosses). Moves Hellion Back 1 wich can be used to combo with other moves like If it Bleeds and Breakthrough",
      },
    ],
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
    paths: {
      name: ["Wanderer", "Virtuoso", "Soloist", "Intermezzo"],
      skillsArray: [[], [0, 1, 4, 5, 9], [1, 4, 6, 7, 9], [3, 4, 8, 9, 10]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A role that sacrifices resistances for Speed and party support."',
        '"A role that trades survivability and Speed for damage and Bleed"',
        '"A role that amplifies the potency of sound to dangerous heights for all."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
        ],
        [
          {
            title: "Max HP Boost",
            text: "20% maxHP",
          },
          {
            title: "Speed Surge",
            text: "Speed +3.",
          },
          {
            title: "Bleed Resistance Drop",
            text: "-20% bleed RES",
          },
          {
            title: "Blight Resistance Drop",
            text: "-20% blight RES",
          },
          {
            title: "Burn Resistance Drop",
            text: "-20% burn RES",
          },
          {
            title: "Stress Resistance Chance",
            text: "15% chance to Ally gain stress resistance",
          },
        ],

        [
          {
            title: "Damage Boost",
            text: "20% DMG.",
          },
          {
            title: "Bleed Chance Increase",
            text: "33% bleed chance.",
          },
          {
            title: "Bleed Skill Crit Boost",
            text: "Bleed gain +10% crit.",
          },
          {
            title: "Max HP Reduction",
            text: "-20% maxHP",
          },
          {
            title: "Speed Reduction",
            text: "-3 speed",
          },
        ],

        [
          {
            title: "Song Skills: Bleed",
            text: "Applies Bleed x2.",
          },
          {
            title: "Inspiring Tune",
            text: "+20% stress resistance.",
          },
          {
            title: "Echoing March",
            text: "Applies Bleed x2 when moving.",
          },
          {
            title: "Battle Ballad & Play Out",
            text: "10% crit, 20% dodge, or 35% strength.",
          },
        ],
      ],
    },
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

      stats: {
        HP: [29],
        SPD: [4, 5],
        FORW: [3],
        BACK: [2],

        BLEED: [20],
        BLIGHT: [20],
        BURN: [20, 30],
        DISEASE: [30],
        STUN: [20],
        MOVE: [20],
        DEBUFF: [30, 40],
        DEATH: [60, 75],
      },
    },

    howToPlay: [
      {
        tittle: "Moving?",
        description:
          "First thing we need to do when building our team is to decide where Jester is going to move. Is he going from position three to four? Is he moving from four to two? Is he going solo up to one? It is important to be clear on who is moving where, so make sure you at least have that plan in mind when you reach the crossroads.",
      },
      {
        tittle: "Combos",
        description:
          "It's crucial to decide which hero applies combo each turn. Make sure your team has at least one or two heroes who can make the most of this combo ability.",
      },
      {
        tittle: "Encore",
        description:
          "The final tip for playing with the jester revolves around Encore, one of his unlockable moves upon completing his shrines. Encore is the most powerful ability in the game, granting an extra turn to an ally, along with other additional benefits that can be very useful.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "If Target Bleed: +25% DMG",
          "Round Start: If Bleed: Add 1 Positive Token",
          "+1 Bleed Received",
        ],
      },
      {
        stats: [
          "When Moving: Crit (10%)",
          "Gain on CRIT: All Allies Behind: Add 1 Positive Token",
          "Gain When Hit: MoveForward 1",
        ],
      },
      {
        stats: [
          "Target Hero: Dodge (20%)",
          "Target: Play Out Skills: Remove 1 Negative Token",
          "Target: Battle Ballad Skills: Turn Start: MoveForward 1 (1 Turn)",
          "Turn End: If Relics in inventory < 25: +1 Stress (25%)",
        ],
      },
      {
        stats: [
          "[Party]",
          "-10 Dd2 token stress.png",
          "+10% Dd2 token horror.png RES (Until Next Inn)",
        ],
        cite: '"Hehe, lets just say the mood is upon me."',
      },
    ],

    teemmates: {
      cite: "Combo Frenzy: Master Backline Destruction with Jester and Deadeye Audrey",

      comp: [
        { id: 9, path: [1, "Arsonist"] },
        { id: 1, path: [1, "Deadeye"] },
        { id: 3, path: [1, "Virtuoso"] },
        { id: 4, path: [1, "Tempest"] },
      ],

      description:
        "This Combo-focused team utilizes Jester Engine to maximize Audrey's damage with thrown daggers, using Fade to Black and Razor's Wit. Leper contributes with high damage and corpse clearing through Purge, while Bonnie supports with Combo application and mitigation. Leper also tanks with Withstand and Intimidate. The team’s flexibility allows it to handle both front and backlines effectively. While it lacks a dedicated healer, Audrey’s self-sufficiency and Leper’s Solemnity cover most healing needs. This setup is ideal for learning Jester, providing a straightforward approach to using Finale and Encore effectively.",
    },

    skills: [
      {
        id: 0,
        name: "Razor's Wit",
        Type: 0,

        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
          },
        ],

        description:
          "Razor’s Wit is part of the 'Jester Engine' that rotates the Jester back and forth. It moves Jester forward, applies combo, and gains a dodge token on upgrade. This skill is essential for combo application and works well with various characters, enhancing Jester's Finale.",
      },
      {
        id: 1,
        name: "Fade to Black",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
        ],

        description:
          "This move is the other half of the 'Jester Engine', slightly better when upgraded due to its blind effect, which always activates if the enemy survives to attack. However, it requires an upgrade to apply combo, unlike Razor’s Wit. Together with Wit, it allows Jester to move back and forth, continuously applying combo, creating a strong and versatile setup that enhances many team compositions with stuns and high damage.",
      },
      {
        id: 2,
        name: "Slice Off",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
        ],
        description:
          "Slice Off is a strong damage move with a unique upgraded effect that transfers damage. This makes it highly effective, especially when combined with characters like Audrey, Dismas, Hellion, and Leper. It sets up a DoT Death’s Door check and damage transfer, enhancing direct damage. Despite its limited targeting range, it works well with setups like a double lunge Grave Robber and Virtuoso Jester, or any high-damage hero. This move allows Jester to stay in the middle ranks, accessing both frontline and backline attacks.",
      },
      {
        id: 3,
        name: "Battle Ballad",

        Type: 2,

        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Ally: [1, 2, 3],
          },
          {
            Rank: [1, 2, 3],
            Ally: [1, 2, 3],
          },
          {
            Rank: [1, 2, 3],
            Ally: [1, 2, 3],
          },
          {
            Rank: [1, 2, 3],
            Ally: [1, 2, 3],
          },
        ],

        description:
          "Battle Ballad is less effective than Slice Off, providing a single strength token and unreliable crits. Its main strength is fixing party composition and clearing combo, useful in specific fights like the Shroud and against the Act 2 boss. Best used in buff and support-heavy builds.",
      },
      {
        id: 4,
        name: "Inspiring Tune",
        Type: 2,
        skillsPaths: [
          {
            Rank: [1, 2],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },
        ],

        description:
          "This stress heal is effective and removes horror but isn't always available to Sarmenti in all ranks. It provides more healing than Bolster+ if Barristan is stressed but can struggle with widespread stress.",
      },
      {
        id: 5,
        name: "Harvest",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
          {
            Rank: [2, 3],
            Target: [2, 3],
          },
        ],

        description:
          "This cleave move offers high value with more direct damage and useful DoT compared to Plague Grenade. It can set up stuns and handle multiple tokens. It’s effective in fights like beast dens but less so against cultists where backline cleaves excel. It’s versatile but not the strongest option for all situations.",
      },
      {
        id: 6,
        name: "Finale",
        Type: 0,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2, 3, 4],
            Cooldown: 2,
          },
          {
            Rank: [3, 4],
            Target: [1, 2, 3, 4],
            Cooldown: 2,
          },
          {
            Rank: [3, 4],
            Target: [1, 2, 3, 4],
            Cooldown: 2,
          },
          {
            Rank: [3, 4],
            Target: [1, 2, 3, 4],
            Cooldown: 2,
          },
        ],

        description:
          "Finale delivers the best combo token payoff, adding 6-10 extra damage. It pairs well with Smokescreen but has drawbacks like daze and vuln. Despite this, it remains highly effective, dealing 20-26 damage in Jester comps.",
      },
      {
        id: 7,
        name: "Solo",

        Type: 1,

        skillsPaths: [
          {
            Rank: [1, 2],
            Target: [1, 2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [1, 2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [1, 2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [1, 2, 3, 4],
            Cooldown: 1,
          },
        ],
        description:
          "Solo moves Jester to the front, applying combo and removing a dodge token. It boosts mitigation and sets up for Finale or Fade to Black next turn. However, it limits Jester’s options initially, restricting him to Finale or Fade. Be sure you want to use one of these moves, or be prepared to shuffle Jester back with a friendly skill.",
      },
      {
        id: 8,
        name: "Play Out",
        Type: 2,

        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Ally: [2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3],
            Ally: [2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3],
            Ally: [2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2, 3],
            Ally: [2, 3, 4],
            Cooldown: 1,
          },
        ],

        description:
          "This move mirrors Battle Ballad, offering reactive mitigation and positioning. It effectively counters threats like Exemplar’s Prelude by pushing back and removing combo. While it provides block+ and can handle pulls, it has lower tempo. Both moves can be used flexibly in intermezzo setups and may boost relationships.",
      },
      {
        id: 9,
        name: "Encore",

        Type: 2,

        skillsPaths: [
          {
            Rank: [1, 2],
            Ally: [1, 2, 3, 4],
            Cooldown: 3,
          },
          {
            Rank: [1, 2],
            Ally: [1, 2, 3, 4],
            Cooldown: 3,
          },
          {
            Rank: [1, 2],
            Ally: [1, 2, 3, 4],
            Cooldown: 3,
          },
          {
            Rank: [1, 2],
            Ally: [1, 2, 3, 4],
            Cooldown: 3,
          },
        ],
        description:
          "Encore is the strongest move, letting Jester perform any other move at the cost of his turn. It can heal, deal damage, guard, or use items but gives him a weak and daze token (or just daze when upgraded). The upgrade reduces cooldown. Essential for Jester if he's in the back, but use it strategically for best results.",
      },
      {
        id: 10,
        name: "Echoing March",

        Type: 1,

        skillsPaths: [
          {
            Rank: [1, 2],
            Target: [2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [2, 3, 4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [2, 3, 4],
            Cooldown: 1,
          },
        ],

        description:
          "Echoing March can move a target up to 4 times, disabling enemies like Cherubs or Heralds. It has a base pull of 1 and applies bleed if upgraded. It’s powerful for shutting down enemies but less versatile than other pulls.",
      },
    ],
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
    paths: {
      name: ["Wanderer", "Tempest", "Poet", "Monarch"],
      skillsArray: [[], [0, 3, 4, 8, 10], [2, 3, 4, 7, 10], [0, 2, 3, 4, 7]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A role that trades HP and Speed for focused power and resistance."',
        '"A defensive role that trades power for survivability."',
        '"A role that excels in battle against cosmic horrors."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
        ],
        [
          {
            title: "Devastating Chop Power!",
            text: "+33% Damage Chop",
          },
          {
            title: "Buff Resistance",
            text: "+33% Debuff RES",
          },
          {
            title: "Immunity to Disease",
            text: "+100% Disease RES",
          },
          {
            title: "Debuff MaxHP",
            text: "-25% Max HP",
          },
          {
            title: "Slower Speed",
            text: "-3 Speed",
          },
        ],
        [
          {
            title: "Enhanced Healing Skills",
            text: "+50% Healing Given",
          },
          {
            title: "Stun Resistance",
            text: "+50% Stun RES",
          },
          {
            title: "Move Resistance",
            text: "+50% Move RES",
          },
          {
            title: "Damage Reduction",
            text: "-25% DMG",
          },
        ],

        [
          {
            title: "Reduced MaxHP",
            text: "-30% Max HP",
          },
          {
            title: "Chop Skills Penalty",
            text: "-75% DMG",
          },
          {
            title: "Target Vulnerability",
            text: "Purge & Intimidate Skills: Vulnerable",
          },
          {
            title: "Combat Start Boost",
            text: "Cosmic: +50% Max HP and +2 Speed",
          },
          {
            title: "Chop Skills Enhancement",
            text: "+100% DMG",
          },
        ],
      ],
    },
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
      stats: {
        HP: [44, 52],
        SPD: [2],
        FORW: [1],
        BACK: [0],

        BLEED: [10],
        BLIGHT: [10],
        BURN: [20],
        DISEASE: [30],
        STUN: [30],
        MOVE: [20, 30],
        DEBUFF: [20],
        DEATH: [60, 75],
      },

      uniqueAttributes: {
        tittle: "Blindness",
        description:
          "The Leper has a high chance of blinding himself when using his most damaging abilities and starts each battle with up to two Blind tokens.",
      },
    },

    howToPlay: [
      {
        tittle: "Set Up Chop",
        description:
          "Prepare him thoroughly for powerful chops to maximize damage output. Ensure optimal conditions and support are in place for his attacks to be effective and devastating on the battlefield.",
      },
      {
        tittle: "Use Tank Kit",
        description:
          "Focus on utilizing skills like intimidate, self-heals, and withstand to effectively fulfill the tanking role. These skills not only allow you to absorb damage but also to maintain enemy attention, thereby protecting your allies.",
      },
      {
        tittle: "Bash, Intimidate",
        description:
          "If necessary, utilize skills like 'Bash' to deal additional damage or 'Intimidate' to control enemies, reducing their ability to attack or maneuver. These tactics are crucial for maintaining tactical advantage during combat.",
      },
      {
        tittle: "Purge",
        description:
          "Use 'Purge' to remove negative effects such as blindness, enhancing combat effectiveness by ensuring your character can attack accurately and respond optimally to battlefield threats.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "Gain on Move RES: Regeneration2",
          "Gain on Stun RES: Block+",
          "Gain on CRIT Melee Skills: +1 Stress (25%)",
        ],
      },
      {
        stats: [
          "Target: Break Skill: Cannot Gain Block (2 rounds)",
          "Gain when Hit: Remove Weak",
          "-2% Deathblow RES per round",
        ],
      },
      {
        stats: [
          "-10% DMG Taken per Negative Token",
          "Apply on Hit: Intimidate Skills: Combo",
          "Gain when Hit: Bleed1 (15%)",
        ],
      },
      {
        stats: [
          "[2 Targets]",
          "+10% Healing Received from Skills per Positive Token (Until Next Inn)",
          "+10% Healing Received from Skills per Negative Token (Until Next Inn)",
        ],
        cite: '"A little beauty yet remains..."',
      },
    ],

    teemmates: {
      cite: "Slow Burn Bulwark: The Leper-Centric Utility Comp",

      comp: [
        { id: 6, path: [1, "Ritualist"] },
        { id: 3, path: [2, "Soloist"] },
        { id: 8, path: [1, "Confessor"] },
        { id: 4, path: [1, "Tempest"] },
      ],

      description:
        "This bulky team centers on Tempest Leper, supported by Confessor Vestal, Ritualist Occultist, and Jester. Leper deals heavy damage and tanks, while Occultist pulls enemies and applies debuffs. Jester provides bleed and flexibility, with Encore and Finale setups. Vestal strengthens the team's defense with debuffs, stress healing, and token removal. The comp excels in slow, controlled fights but can be risky if overly reliant on Leper. Swapping Jester or Occultist for Dismas or Bonnie can add balance.",
    },

    skills: [
      {
        id: 0,
        name: "Chop",
        Type: 0,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
        ],

        description:
          "The Leper's 'Chop' deals high damage but can cause blindness, reducing accuracy. With Tempest, blindness chances drop to less than a third. To manage this, use combo with specific enemies, items that clear blindness, or combat items. Unlike other characters, the Leper only needs combo when blinded, making it easier to manage.",
      },
      {
        id: 1,
        name: "Purge",
        Type: 0,

        skillsPaths: [
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
          {
            Rank: [4],
            Target: [1],
          },
        ],
        description:
          "'Purge' clears corpses and provides strong knockback but is often ineffective due to Leper’s slow speed and the presence of corpses. It's useful if no other corpse-clear options are available or if knockback is specifically needed.",
      },
      {
        id: 2,
        name: "Withstand",
        Type: 2,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [0],
            Cooldown: 3,
            Uses: 2,
          },
          {
            Rank: [2, 3, 4],
            Target: [0],
            Cooldown: 3,
            Uses: 2,
          },
          {
            Rank: [2, 3, 4],
            Target: [0],
            Cooldown: 3,
            Uses: 2,
          },
          {
            Rank: [2, 3, 4],
            Target: [0],
            Cooldown: 3,
            Uses: 2,
          },
        ],
        description:
          "**Withstand** is a Leper ability offering DoT and move resist, which Leper values. It doesn't drastically change his stats but adds similar value to Ounce. The taunt uses initial block tokens, with further tokens providing extra mitigation. This ability is useful as Leper often takes damage, reducing it even for offensive Tempest Lepers.",
      },
      {
        id: 3,
        name: "Solemnity",
        Type: 3,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [0],
            Uses: 2,
          },
          {
            Rank: [3, 4],
            Target: [0],
            Uses: 2,
          },
          {
            Rank: [3, 4],
            Target: [0],
            Uses: 2,
          },
          {
            Rank: [3, 4],
            Target: [0],
            Uses: 2,
          },
        ],
        description:
          "best self-heal and self-stress heal in the game, with a 50% HP heal and stress reduction regardless of current stress. The only drawback is its limited use, preventing immortality. The Poet ability boosts self-heal to 50/75%, making the Leper a powerful stress tank in the short term. However, it is a selfish stress heal and doesn't benefit others like Raucous and Bolster.",
      },
      {
        id: 4,
        name: "Reflection",
        Type: 2,

        skillsPaths: [
          { Rank: [3, 4], Target: [0], Cooldown: 1 },
          { Rank: [3, 4], Target: [0], Cooldown: 1 },
          { Rank: [3, 4], Target: [0], Cooldown: 1 },
          { Rank: [3, 4], Target: [0], Cooldown: 1 },
        ],

        description:
          "This move helps manage Leper's blind and stress, offering debuff resistance without a use limit. It's useful for clearing combos and reducing stress to 0, especially against Exemplar and in Act 2. However, it's a low tempo move and usually only worth equipping if you lack better options for blind or need extra stress healing.",
      },
      {
        id: 5,
        name: "Hew",
        Type: 0,

        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
        ],

        description:
          "This 2-target cleave deals more damage than others and ignores blind if either target has combo. It's useful against Monarch and better than Chop outside of Cosmic fights. It can prevent damage waste or serve as a defensive pinger, though it’s less appealing due to the risk of blinding Leper.",
      },
      {
        id: 6,
        name: "Revenge",

        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 3, Uses: 2 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 3, Uses: 2 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 3, Uses: 2 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 3, Uses: 2 },
        ],

        description:
          "Revenge is a slow buff that provides value over time, especially if Leper hits three times. It’s less effective in quick fights and requires combo and accuracy support. Using other moves can waste the buff, but it can significantly boost damage when used effectively.",
      },
      {
        id: 7,
        name: "Intimidate",
        Type: 0,

        skillsPaths: [
          { Rank: [4], Target: [1, 2, 3, 4] },
          { Rank: [4], Target: [1, 2, 3, 4] },
          { Rank: [4], Target: [1, 2, 3, 4] },
          { Rank: [4], Target: [1, 2, 3, 4] },
        ],

        description:
          "Intimidate offers pings, taunts, weak application, and stealth counter. It also deals some damage and doesn’t generate blind, making it a better blind cure than Reflection. The Monarch version adds vulnerable, which is useful due to Leper’s often-disabled damage move. It’s great for tanking and debuffing but has a rank 1 requirement.",
      },
      {
        id: 8,
        name: "Ruin",
        Type: 2,

        skillsPaths: [
          { Rank: [2, 3, 4], Target: [0], Cooldown: 3, Uses: 2 },
          { Rank: [2, 3, 4], Target: [0], Cooldown: 3, Uses: 2 },
          { Rank: [2, 3, 4], Target: [0], Cooldown: 3, Uses: 2 },
          { Rank: [2, 3, 4], Target: [0], Cooldown: 3, Uses: 2 },
        ],
        description:
          "This move has issues because its 20% damage buffs expire together, unlike Revenge. It’s better if Leper can be hit multiple times quickly but generally, Revenge is easier to use. Noisemakers or Encore can help improve its effectiveness by directing more damage to Leper.",
      },
      {
        id: 9,
        name: "Break",
        Type: 0,

        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
        ],
        description:
          "This move does slightly more damage than Chop and removes Block, useful against enemies with stacked Block. However, it suffers from the same blind issue as Hew and Chop and only ignores blind with an upgrade. Intimidate is usually a better option for dealing with Block.",
      },
      {
        id: 10,
        name: "Bash",
        Type: 0,

        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
        ],
        description:
          "This move can create a daze-stun combo with Barristan if both are upgraded and fast enough. It's useful for locking Leper in place, enabling daze stuns, and immobilizing enemies, especially in the Foetor lair boss fight. It doesn’t generate blind, offering more flexibility. While not a staple, it has niche uses in specific comps.",
      },
    ],
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
    paths: {
      name: ["Wanderer", "Sergeant", "Bulwark", "Vanguard"],
      skillsArray: [[], [3, 2, 4, 5, 7], [1, 4, 5, 9, 8], [0, 6, 4, 3, 5]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A role that trades damage for support survivability."',
        '"A role that enhances the potency of shield attacks at the expense of Crush."',
        '"A role that focuses on Crush and Riposte at the expense of Resistance."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
        ],
        [
          {
            title: "Damage Reduction",
            text: "-20% DMG",
          },
          {
            title: "Movement Resist",
            text: "+100% Move RES",
          },
          {
            title: "Self Ability",
            text: "Bolster Remove Weak",
          },
          {
            title: "Ally Buff",
            text: "All DOT RES (20%)",
          },
        ],

        [
          {
            title: "Crush & Riposte Skills",
            text: "-25% DMG",
          },
          {
            title: "Shield Attack Skills",
            text: "+50% DMG",
          },
          {
            title: "Shield Attack Skills",
            text: "+10% Stun",
          },
          {
            title: "Self Ability",
            text: "Stand Fast Skills: Taunt x2",
          },
        ],

        [
          {
            title: "Max HP",
            text: "+20% Max HP",
          },
          {
            title: "Riposte Skills",
            text: "+25% DMG",
          },
          {
            title: "Crush Skills",
            text: "+50% DMG",
          },
          {
            title: "Damage over Time Resist",
            text: "-20% DOT RES",
          },
        ],
      ],
    },
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
      stats: {
        HP: [42, 46],
        SPD: [2],
        FORW: [2],
        BACK: [2],

        BLEED: [30],
        BLIGHT: [30],
        BURN: [30],
        DISEASE: [30],
        STUN: [30, 50],
        MOVE: [30],
        DEBUFF: [20],
        DEATH: [60, 75],
      },
    },

    howToPlay: [
      {
        tittle: "Support Skills",
        description:
          "The first thing to do is pick your support and match-up skills. Determine how you want the Man at Arms to help the team. Usually, this involves using Bolster, but you can also equip skills like Bellow and Stand Fast. It's crucial to select what he really needs for the upcoming situation.",
      },
      {
        tittle: "Guard or Taunt",
        description:
          "Make sure that the Man at Arms is either guarding or taunting enemies if necessary. Defender is an incredible move, as is Retribution. If your team is in danger and you want to redirect enemy attacks to the Man at Arms, these moves should be your priority. Damage comes after ensuring safety.",
      },
      {
        tittle: "Defined Role",
        description:
          "Define what the Man at Arms is doing in your party. He can deal significant damage if you give him the right path and damage moves. Alternatively, he can become a nearly unkillable wall if you equip all his block skills. Understanding the game and the upcoming match-ups is essential to effectively kit your Man at Arms for each battle.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "Gain when Hit: Block+ (33%)",
          "Self: Rampart Skill: Riposte",
          "Turn Start: If First in Turn Order: Blind",
        ],
      },
      {
        stats: [
          "Each Hero on Combat Start: Block+",
          "Apply to Attacker When Hit: Remove 1 Positive Token",
          "Gain when Crit: Weak",
        ],
      },
      {
        stats: [
          "Target: Heroes: Crit (10%)",
          "Target: Command Skill: BlockTaunt",
          "Apply On Miss: All Allies Behind: +1 Stress",
        ],
      },
      {
        stats: [
          "[Party]",
          "If Dd2 token guarded.png: +25% DMG (Until Next Inn)",
        ],
        cite: '"Ive been thinking..."',
      },
    ],

    teemmates: {
      cite: "Unyielding Guardians: The Mitigation Mastery Comp",

      comp: [
        { id: 6, path: [1, "Ritualist"] },
        { id: 9, path: [1, "Arsonist"] },
        { id: 5, path: [3, "Vanguard"] },
        { id: 4, path: [1, "Tempest"] },
      ],

      description:
        "This comp features a tanky core with Barristan and Leper, supported by a utility-focused Occultist and DoT-dealing Bonnie. The team excels in mitigation and steady damage output. Occultist disrupts enemies with pulls, curses, and corpse clears, while Bonnie provides additional mitigation with Smokescreen and consistent DoT through Firefly. Barristan uses Retribution and Crush, with occasional stuns via Rampart. Leper deals heavy damage and tanks with Intimidate and Withstand. The team is nearly stress-immune with Bolster and Leper’s self-stress heal. It’s a straightforward, slow-roll comp focused on survival and steady control.",
    },

    skills: [
      {
        id: 0,
        name: "Crush",
        Type: 0,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [3, 4],
            Target: [1, 2, 3],
          },
        ],

        description:
          "Front-line melee attack with respectable damage and good reach being able to hit Rank 3. Is essential in any Front-line Man-at-Arms build, thanks to the offensive and supportive versatility. ( Heal 10%-20% when combo)",
      },
      {
        id: 1,
        name: "Rampart",
        Type: 0,

        skillsPaths: [
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
        ],
        description:
          "Rank-flexible melee/shield attack with decent damage. Has the main advantage of moving Forward 1 (Move to a more favorable position) while at the same time pushing enemies Backwards 1 (displacing enemies to disfavorable positions). It also applies Dake, Stun, a very good counter againsts any type of enemy.",
      },
      {
        id: 2,
        name: "Defender",
        Type: 2,

        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
        ],
        description:
          "excelent Support move giving Man-at-Arms Block and Guard to allies. Giving a low-HP Ally a safety-net to maintain the Team alive since all attacks will be redirected to Man-at-Arms. It can be used in all ranks and doesn't have a cooldown, making this skill very safe and reliable to use in any situation.",
      },
      {
        id: 3,
        name: "Bolster",
        Type: 2,

        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "excelent Support move that Stress heal both Allies and Man-at-Arms while also removing Weak and Vulnerable. It can be used in all ranks and has low cooldown making this skill very safe and reliable in any build or situation.",
      },
      {
        id: 4,
        name: "Hold the Line",
        Type: 0,

        skillsPaths: [
          { Rank: [1, 2, 3], Target: [1, 2] },
          { Rank: [1, 2, 3], Target: [1, 2] },
          { Rank: [1, 2, 3], Target: [1, 2] },
          { Rank: [1, 2, 3], Target: [1, 2] },
        ],
        description:
          "Melee/Shield attack that moves Man-at-Arms Forward 3, is advised to equip this skills when using Rank 1 Man-at-arms as it will put you in your favorable position instantly while also Immobilize and Block (Less disruption and less damage recieved).",
      },
      {
        id: 5,
        name: "Bellow",
        Type: 1,

        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "puts the enemy team in a direct disadvantage with a heavy Speed Debuff, Riposte and Crit Removal. As a cleave attack, it also has the advantage of removing several Dodge at the same time, this skill is perfect to counter certain matchups and enemy factions (Example: Combat turnorder enemy shared spider spitterCreature Den, Combat turnorder enemy cultist Exemplar)",
      },
      {
        id: 6,
        name: "Retribution",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 2 },
        ],
        description:
          "excelent tank skill that gives Taunt, Riposte and Block at the same time. Making enemies target Man-at-Arms, reducing incoming damage and dealing (posibly killing) enemies all at the same time. Very efficient tempo gain in most if not all encounters.",
      },
      {
        id: 7,
        name: "Command",

        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "good support skill that removes Blind and giving Strength. Is a good counter to certain matchups (Combat turnorder enemy coastal leviathan Fisherfolk, Combat turnorder enemy fanatic librarian Fanatics), Quirks/Diseases and Certain skills (Portraits-Leper's constant Blind can be completely nullified by this ability)",
      },
      {
        id: 8,
        name: "Stand Fast",

        Type: 2,
        skillsPaths: [
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
        ],
        description:
          "gives the Man-at-Arms,already excellent Tank capabilities, even more self-sustain. Adds constant Block tokens every turn. Recommended to use if you get constant Taunt, generation, (via trinkets or Bulwark) so you will get the most out of this skill.",
      },
      {
        id: 9,
        name: "Courageous Abandon",
        Type: 0,
        skillsPaths: [
          { Rank: [4], Target: [1], Cooldown: 2 },
          { Rank: [4], Target: [1], Cooldown: 2 },
          { Rank: [4], Target: [1], Cooldown: 2 },
          { Rank: [4], Target: [1], Cooldown: 2 },
        ],
        description:
          "is the skill with the highest Single-target Damage potential of Man-at-Arms. Requires constant Block generation(Deals +100% DMG when Block). Consider combining it with Stand Fast or Portraits-Vestal Consecration of Fortitude to get the highest damage faster.",
      },
      {
        id: 10,
        name: "Strategic Withdrawal",
        Type: 0,
        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2], Cooldown: 1 },
          { Rank: [3, 4], Target: [1, 2], Cooldown: 1 },
          { Rank: [3, 4], Target: [1, 2], Cooldown: 1 },
          { Rank: [3, 4], Target: [1, 2], Cooldown: 1 },
        ],
        description:
          "respectable damage and support skill that applies Combo, Consider combining it with heroes that require constant Combo. (Example:Portraits-Leper) . Moves Back 1 and Heals 33% HP + Adds blockplus Death's Door. Is a good combo tool and safety skill that can give Man-at-Arms good survability in disfavorable situations.",
      },
    ],
  },

  6: {
    name: "Occultist",
    rolePlay: ["BACK RANK", "RANGED DMG", "HEALER", "OFFENSIVE SUPP"],
    cite: [
      "To know the abyss, one must embrace it.",
      "A curse upon my enemies, and a curse upon myself.",
      "Those beyond the veil hear my calls and obey!",
      "I drift in the starless skies of the void.",
    ],
    paths: {
      name: ["Wanderer", "Ritualist", "Warlock", "Aspirant"],
      skillsArray: [[], [2, 3, 5, 7, 10], [1, 4, 5, 9, 10], [0, 2, 3, 4, 9]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A role that enhances support at the risk of unexpected vulnerability."',
        '"A role that enhances ranged offense at the cost of survivability."',
        '"A role that emphasizes melee over curses."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
        ],
        [
          {
            title: "Healing Skills",
            text: "+33% Healing Given",
          },
          {
            title: "Cursing Skills",
            text: "+10% Debuff Chance",
          },
          {
            title: "Cursing Skills",
            text: "strength (15%)",
          },
          {
            title: "Cursing Skills",
            text: "Crit (15%)",
          },
          {
            title: "Cursing Skills",
            text: "Dodgeplus (15%)",
          },
          {
            title: "Turn Start",
            text: "Vulnerable (33%)",
          },
        ],
        [
          {
            title: "Max Icon HP",
            text: "-20% MaxHP",
          },
          {
            title: "Ranged Skills",
            text: "+25% DMG",
          },
          {
            title: "Turn Start",
            text: "Uncheckedpower (33%)",
          },
        ],
        [
          {
            title: "Max Icon HP",
            text: "+25% Max HP",
          },
          {
            title: "Melee Skills",
            text: "+25% DMG",
          },
          {
            title: "Anamnesis Skills",
            text: "+125% DMG",
          },
          {
            title: "Cursing Skills",
            text: "-15% Debuff Chance",
          },
          {
            title: "Cursing Skills",
            text: "-15% Debuff RES",
          },
          {
            title: "Combat Start",
            text: "Blockplus",
          },
        ],
      ],
    },
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

      stats: {
        HP: [31],
        SPD: [5],
        FORW: [2],
        BACK: [2],

        BLEED: [30],
        BLIGHT: [30],
        BURN: [30, 40],
        DISEASE: [30, 40],
        STUN: [20],
        MOVE: [20],
        DEBUFF: [30, 40],
        DEATH: [60, 75],
      },

      uniqueTokens: [
        {
          id: 1,
          FastDescription:
            "A token that enables or empowers certain Occultist skills.",
          skillPoints: [
            "Consumed upon use",
            "Turn Start: 33% chance of Burn x1 per Unchecked Power Token [Cannot be resisted]",
            "Duration: Until end of combat",
            "Limit: 3",
          ],
        },
      ],
    },
    howToPlay: [
      {
        tittle: "Pick a Damage Skill",
        description:
          "In the late game, almost any build he runs usually uses Burning Stars as its damage move, simply because the heavy hit of Burning Stars that ignores blocks and sets up combos is usually worth the potential downsides of running stuff like Chaotic Offering or burning yourself.",
      },
      {
        tittle: "Curse Threats",
        description:
          "Really plan out your curses and who they should be going on. For example, if an enemy does a huge single-target hit or even a group hit, but it is a lot of direct damage (not damage over time), you are probably saving Weakening Curse for that. If an enemy likes to generate a bunch of dodge, then you are going to use Vulnerability Hacks after it gets that dodge to get rid of it.",
      },
      {
        tittle: "Build Around",
        description:
          "The Occultist is someone who specifically needs to build all of his skills around his teammates. Everyone has to do this to some extent, but many characters can function if you just give them a specific loadout and then they just kind of do their thing independently, like the Grave Robber or the Highwayman, for example.",
      },
      {
        tittle: "Teammates",
        description:
          "You should tailor an Occultist's loadout to the rest of your team to maximize his effectiveness. This means considering the skills and strengths of your teammates when choosing the Occultist's skills.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "Turn End: Convert Vulnerable to Dd2 token uncheckedpower.png",
          "Apply on Hit: Daemon's Pull Skill: 1 Negative Token (66%)",
          "Gain when Moved by Enemy: 1 Negative Token (33%)",
        ],
      },
      {
        stats: [
          "If Target Burn: +50% Healing Given from Skills",
          "Ranged Skills: +25% Debuff RES Piercing",
          "Random Ally on Turn Start: If Dd2 token uncheckedpower.png >= 2: Burn1 (33%)",
        ],
      },
      {
        stats: [
          "+10% DMG per Stress",
          "-10% Healing Given from Skills per Stress",
          "Gain on CRIT: Binding Shadows Skills: Dd2 token uncheckedpower.png",
        ],
      },
      {
        stats: [
          "[2 Targets]",
          "Combat Start: Add 1 Positive Token (Until Next Inn)",
        ],
        cite: '"Let us empty our minds..."',
      },
    ],

    teemmates: {
      cite: "Blazing Resolve: The Utility and Mitigation Powerhouse Comp",

      comp: [
        { id: 9, path: [1, "Arsonist"] },
        { id: 6, path: [1, "Ritualist"] },
        { id: 4, path: [1, "Tempest"] },
        { id: 2, path: [1, "Ravager"] },
      ],

      description:
        "This comp leverages the Occultist’s utility, particularly his pull and combo effects, to empower Leper and Hellion. The Occultist is positioned in rank 3 to access Stab, running it alongside his pulls, curses, and healing. Bonnie is chosen for her mitigation, DoT, and Cauterize to handle the bleed effects from Hellion and Wyrd. The Smokescreen + Weakening Curse combo provides strong mitigation, while Vulnerability Hex enhances damage output for Leper and Hellion. Tanking is shared between Hellion and Leper, with Runaway providing additional damage control and dodge clearing. The main drawback is Bonnie's position in rank 4, which limits her access to Controlled Burn. This team is designed for a slower, methodical approach but offers flexible targeting and solid mitigation.",
    },

    skills: [
      {
        id: 0,
        name: "Sacrificial Stab",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
        ],
        description:
          "The 'stab' move is effective for rank 3 attacks but unusable in rank 4. The UP mechanic requires a combo, which isn't immediately valuable. Gaining a damage bonus or stun is preferable. Using two combo tokens or killing an enemy grants UP, with the latter being better for immediate use.",
      },
      {
        id: 1,
        name: "Abyssal Artillery",

        Type: 1,
        skillsPaths: [
          { Rank: [1, 2], Target: [3, 4] },
          { Rank: [1, 2], Target: [3, 4] },
          { Rank: [1, 2], Target: [3, 4] },
          { Rank: [1, 2], Target: [3, 4] },
        ],
        description:
          "The UP mechanic enhances a strong backline cleave move, effective with moves like grenade and iron swan. Setting up UP requires a turn and is best with a Warlock Occultist. Double stuns are powerful but hard to achieve.",
      },
      {
        id: 2,
        name: "Weakening Curse",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "Weakening Curse is a reliable debuff that applies Weak, effective against bosses. It has good range and can set up UP for stab moves. It’s especially useful with Ritualist and commonly used outside of Aspirant Occultists.",
      },
      {
        id: 3,
        name: "Wyrd Reconstruction",
        Type: 3,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
        ],
        description:
          "Wyrd Reconstruction is a versatile but unreliable heal with high variance and a 33% threshold. UP can improve healing with critical heals, but it still has risks. Best as a backup heal, especially for Ritualist Occultists, and can combo with Cauterize. Avoid using it as the sole heal unless necessary.",
      },
      {
        id: 4,
        name: "Daemon's Pull",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3], Target: [3, 4] },
          { Rank: [1, 2, 3], Target: [3, 4] },
          { Rank: [1, 2, 3], Target: [3, 4] },
          { Rank: [1, 2, 3], Target: [3, 4] },
        ],
        description:
          "Daemon’s Pull is highly versatile, dealing damage, applying combo, and clearing corpses while disrupting backline enemies. It excels in setting up targets for follow-ups or stuns and is useful in most Occultist kits. Its main limitation is in boss fights, though it can still be situationally helpful. The UP stun is less useful compared to Arty but can be a good alternative.",
      },
      {
        id: 5,
        name: "Vulnerability Hex",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "Vulnerability Hex is a top-tier damage transfer move that clears dodge and applies vulnerability for big hitters. It's especially useful with Alhazred, enhancing his utility. Its effectiveness drops against high debuff resistance enemies or without strong direct damage allies.",
      },
      {
        id: 6,
        name: "Binding Shadows",
        Type: 0,
        skillsPaths: [
          { Rank: [1, 2, 3], Target: [1, 2, 3] },
          { Rank: [1, 2, 3], Target: [1, 2, 3] },
          { Rank: [1, 2, 3], Target: [1, 2, 3] },
          { Rank: [1, 2, 3], Target: [1, 2, 3] },
        ],
        description:
          "Binding Shadows is similar to Stab in use and damage but generates UP on use half the time when upgraded. Its key advantage is the forward 1 movement, making it ideal for Aspirant Occultists in double lunge or Seraph Vestal comps. It's useful with the Tangle trophy when not expecting a kill. Generally, Stab is preferred unless specific movement is needed, as Binding Shadows can't be used in rank 4.",
      },
      {
        id: 7,
        name: "Malediction",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4] },
        ],
        description:
          "Malediction, an UP-only move, temporarily applies DoT, which is best for slow, tanky enemies but often ineffective otherwise. It can fail, wasting a turn. It shines with Cause of Death, converting DoT to immediate damage, but is rarely useful due to its setup requirements. Its value would improve if the debuff were permanent or round-based.",
      },
      {
        id: 8,
        name: "Anamnesis",
        Type: 0,
        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2, 3, 4] },
          { Rank: [3, 4], Target: [1, 2, 3, 4] },
          { Rank: [3, 4], Target: [1, 2, 3, 4] },
          { Rank: [3, 4], Target: [1, 2, 3, 4] },
        ],
        description:
          "Anamnesis is a powerful cleave move needing two UP, typically used by turn 2. Its value declines as fights progress. It checks both block and dodge, but Magnesium Rain offers similar DoT damage with less setup. It's best for Aspirant builds and can be effective against the act 1 boss, but is generally a rare pick.",
      },
      {
        id: 9,
        name: "The Burning Stars",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3], Target: [1, 2, 3, 4] },
          { Rank: [1, 2, 3], Target: [1, 2, 3, 4] },
          { Rank: [1, 2, 3], Target: [1, 2, 3, 4] },
          { Rank: [1, 2, 3], Target: [1, 2, 3, 4] },
        ],
        description:
          "The move is strong, comparable to two stabs, and applies combo while ignoring block. Its main drawback is the use requirement, which slows down its use. It has good range and adds value with combo. While not ideal for building around, it’s a useful addition for longer fights or as a backup in the Act 2 fight. It’s best with Warlock Occultists or if you plan to generate UP through stabs or Chaotic Offering.",
      },
      {
        id: 10,
        name: "Chaotic Offering",
        Type: 2,

        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 3 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 3 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 3 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 3 },
        ],
        description:
          "Chaotic Offering is a low-tempo move that lets you use a UP move next turn but has risky random side effects like Weak, Daze, or Shuffle, which can disrupt your strategy. The buff can be valuable, but its downsides often make it less favorable, especially when paired with moves like Stars.",
      },
    ],
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
    paths: {
      name: ["Wanderer", "Surgeon", "Alchemist", "Physician"],
      skillsArray: [[], [2, 3, 4, 8, 10], [0, 3, 4, 5, 8], [3, 4, 6, 8, 10]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A role that empowers Incision and healing at the expense of Blight."',
        '"A role that improves Blight and Resistance while undermining health."',
        '"A role that enhances utility at the expense of Blight and Bleed."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
        ],
        [
          {
            title: "Max HP Boost",
            text: "+25% Max HP",
          },
          {
            title: "Melee Damage Increase",
            text: "+50% DMG Melee",
          },
          {
            title: "Enhanced Healing",
            text: "+33% Healing Given",
          },
          {
            title: "Reduced Blight Chance",
            text: "-33% Blight Chance",
          },
        ],

        [
          {
            title: "Reduced Max HP",
            text: "-20% Max HP",
          },
          {
            title: "Blight Boost",
            text: "+33% Blight Chance +10% CRIT",
          },
          {
            title: "Enhanced Stun Resistance",
            text: "+50% Stun RES",
          },
          {
            title: "Boost Resistance",
            text: "+20% RES Blight, Bleed And Burn ",
          },
          {
            title: "Debuff Resistance",
            text: "+33% Debuff RES",
          },
        ],

        [
          {
            title: "Reduced DOT Damage",
            text: "DOT Skills: -2 Dealt",
          },
          {
            title: "Disorienting Blast",
            text: "+20% Stun",
          },
          {
            title: "Stress Resistance Boost",
            text: "+15% Stress RES",
          },
          {
            title: "Emboldening Vapours",
            text: "Strength Boost",
          },
          {
            title: "Disorienting Blast",
            text: "Vulnerability Increase",
          },
        ],
      ],
    },
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
      stats: {
        HP: [28],
        SPD: [4],
        FORW: [1],
        BACK: [1],

        BLEED: [30],
        BLIGHT: [40, 50],
        BURN: [30, 40],
        DISEASE: [40, 50],
        STUN: [10],
        MOVE: [20],
        DEBUFF: [20],
        DEATH: [60, 75],
      },
    },
    howToPlay: [
      {
        tittle: "DOT Enemies",
        description:
          "Focus on using your damage over time (DoT) abilities. Try to blight or bleed enemies as much as you can, especially in the early rounds when damage is more important.",
      },
      {
        tittle: "Support Friends",
        description:
          "Do your best to support your allies by giving them the tokens they need, like Ounce of Prevention, and heal them when they need it.",
      },
      {
        tittle: "Disrupt",
        description:
          "Try to disrupt enemies, although this is usually less necessary because the game is so damage-focused. If you're running abilities like Physician or facing enemies where your DoT doesn't match up well, use skills like Planning Gas, Disorienting Blast, and even Magnesium Rain to a lesser extent, as it removes corpses and can disrupt enemy positioning.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "Melee Skills: +10% CRIT",
          "If Medicinal Herbs is Equipped: +50% Healing Given from Skills",
          "Turn Start: If First in Turn Order: Vulnerable",
        ],
      },
      {
        stats: [
          "If Noxious Item is Equipped: +2 Blight Dealt",
          "Apply on Hit Disorienting Blast Skill: Blight2 (50%)",
          "Incision Skill: -100% Bleed Dealt",
        ],
      },
      {
        stats: [
          "Target: Ounce of Prevention Skill: Block",
          "Target: Emboldening Vapours Skill: Regeneration2",
          "Battlefield Medicine Skill: -50% Healing Given from Skills",
        ],
      },
      {
        stats: [
          "[Party]",
          "Heal 100% (50%)",
          "Remove Disease (25%)",
          "Remove Negative Quirk (25%)",
        ],
        cite: '"Just a little something Ive been working on."',
      },
    ],

    teemmates: {
      cite: "Relentless Reach: The Backline Demolisher Comp",

      comp: [
        { id: 7, path: [2, "alchemist"] },
        { id: 9, path: [1, "Arsonist"] },
        { id: 5, path: [3, "Vanguard"] },
        { id: 2, path: [1, "Ravager"] },
      ],

      description:
        "This comp excels in backline destruction and mitigation, making it ideal for Act 3. The Man-at-Arms and Runaway provide strong mitigation through Retribution, Defender, and Smokescreen. The team can effectively target backlines with Plague Doctor’s Plague Grenade, Hellion’s Iron Swan, and Runaway’s Firefly. Hellion shines with her high-damage Howling End and synergy with Runaway’s vulnerability tokens. The comp also offers ample healing options from Plague Doctor, Cauterize, and Hellion’s Adrenaline Rush. With reliable stress management and dodge removal, this team is versatile and effective across various scenarios, particularly against the Act 3 boss.",
    },

    skills: [
      {
        id: 0,
        name: "Noxious Blast",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3], Target: [1, 2] },
          { Rank: [1, 2, 3], Target: [1, 2] },
          { Rank: [1, 2, 3], Target: [1, 2] },
          { Rank: [1, 2, 3], Target: [1, 2] },
        ],
        description:
          "is capable to inflict high Blight damage to a single front-Rank enemies. The DOT damage ignores Block tokens which makes this skill perfect for dealing with the front-ranks where Block tends to be.",
      },
      {
        id: 1,
        name: "Blinding Gas",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2], Target: [3, 4], Cooldown: 1 },
          { Rank: [1, 2], Target: [3, 4], Cooldown: 1 },
          { Rank: [1, 2], Target: [3, 4], Cooldown: 1 },
          { Rank: [1, 2], Target: [3, 4], Cooldown: 1 },
        ],
        description:
          "inflicts respectable Blight damage to the Back-Ranks (3 and 4 positions), enemies in this positions tend to have Low Max Icon HP so this will quickly mow-down enemies with relative ease.",
      },
      {
        id: 2,
        name: "Incision",
        Type: 0,
        skillsPaths: [
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
        ],
        description:
          "a very reliable attack with average physical damage and high Bleed, for when Blight damage is ineffective; Like in the Foetor, where enemies have high Blight RES)",
      },
      {
        id: 3,
        name: "Battlefield Medicine",
        Type: 3,
        skillsPaths: [
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Uses: 3 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Uses: 3 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Uses: 3 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Uses: 3 },
        ],
        description:
          "can be used to heal allies that are on low HP, Deathsdoor or are suffering from DOTS Bleed, Blight, Burn effects. When upgraded it will heal the DOTs from Plague Doctor as well. However, this skill will not be reliable for drawn-out battles, especially boss battles, due to its limited use (3 for each battle).",
      },
      {
        id: 4,
        name: "Ounce of Prevention",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 3 },
        ],
        description:
          "helps the Plague Doctor and her allies withstand All type of DOTS Bleed, Blight, Burn while also buffing Disease RES, perfect for heavy dot and disease dot encounters like The Creature Den and The Foetor. It is a good idea to equip this skill when you are going to face those enemies.",
      },
      {
        id: 5,
        name: "Plague Grenade",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2], Target: [3, 4] },
          { Rank: [1, 2], Target: [3, 4] },
          { Rank: [1, 2], Target: [3, 4] },
          { Rank: [1, 2], Target: [3, 4] },
        ],
        description:
          "inflicts respectable Blight damage to the Back-Ranks (3 and 4 positions), enemies in this positions tend to have Low Max HP so this will quickly mow-down enemies with relative ease.",
      },
      {
        id: 6,
        name: "Emboldening Vapours",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "applies 2 Strength and Speed on allies, consider pair it with heroes that benefits the most Example: Highwayman, Leper, Dmg hero)",
      },
      {
        id: 7,
        name: "Disorienting Blast",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3], Target: [2, 3, 4] },
          { Rank: [1, 2, 3], Target: [2, 3, 4] },
          { Rank: [1, 2, 3], Target: [2, 3, 4] },
          { Rank: [1, 2, 3], Target: [2, 3, 4] },
        ],
        description:
          "can displace a back-Rank target, bring it to a more vulnerable position or Shuffle a front - Rank target where is less effective. The skill also applies Daze so that other Heroes can gain the upper hand. If the enemy already has Daze or Combo the skill will stun instead.",
      },
      {
        id: 8,
        name: "Indiscriminate Science",
        Type: 3,
        skillsPaths: [
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "does not have a limit on use and offers a much greater healing potential at the expense of losing Positive and Negative Tokens. To get a solid heal, the skill should be used on Heroes that hold or can apply a large number of Positive Tokens on themselves.( Example: Highwayman, Graverobber )",
      },
      {
        id: 9,
        name: "Cause of Death",
        Type: 0,

        skillsPaths: [
          { Rank: [2, 3, 4], Target: [1, 2, 3], Cooldown: 2 },
          { Rank: [2, 3, 4], Target: [1, 2, 3], Cooldown: 2 },
          { Rank: [2, 3, 4], Target: [1, 2, 3], Cooldown: 2 },
          { Rank: [2, 3, 4], Target: [1, 2, 3], Cooldown: 2 },
        ],
        description:
          "turns most (or all) of the DOT accumulated on a target into instant physical damage. Paired with other DOT heroes ( Examples: Runaway, Occultist ) Cause of Death is capable to be the most lethal Plague Doctor skill. It ignores strength 2 and crit but also Ignores block from enemies which gives this skill a huge damage potential.",
      },
      {
        id: 10,
        name: "Magnesium Rain",
        Type: 1,

        skillsPaths: [
          { Rank: [1, 2], Target: [1, 2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2], Target: [1, 2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2], Target: [1, 2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2], Target: [1, 2, 3, 4], Cooldown: 2 },
        ],
        description:
          "can quickly remove Dodge from enemies and clear Corpses allowing her team to deal with out-of-reach threats. Due to its mechanic of clearing all Corpses at same time, is particularly helpful against Plague Eaters in Foetor region or Creature Den monsters, as these enemies can consume their allies' corpses to gain huge advantages for themselves, such as healing and access to dangerous skills.",
      },
    ],
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
    paths: {
      name: ["Wanderer", "Confessor", "Chaplain", "Seraph"],
      skillsArray: [[], [1, 2, 4, 5, 8], [4, 7, 8, 9, 10], [2, 4, 5, 8, 9]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"Rank-flexible role that specializes in debuffs and token removal."',
        '"Rank-flexible role focused on party defense."',
        '"Back rank support role that specializes in Consecrations."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
          {
            title: "+1 Conviction Token",
            text: "Add Conviction",
          },
        ],
        [
          {
            title: "Conviction at Turn Start",
            text: "Turn Start: Add Conviction Conviction",
          },
          {
            title: "Debuff RES Piercing",
            text: "+5% Debuff RES Piercing per Conviction",
          },
        ],
        [
          {
            title: "Conviction When Hit",
            text: "Gain Conviction When Hit",
          },
          {
            title: "Increased Stun Resistance",
            text: "+10% Stun RES per Conviction",
          },
          {
            title: "Move Resistance",
            text: "+10% Move RES per Conviction",
          },
        ],
        [
          {
            title: "Gain on Consecration",
            text: "Gain Conviction Conviction When a Consecration Activates",
          },
          {
            title: "Extended Duration",
            text: "Consecrations Last 5 Rounds",
          },
        ],
      ],
    },
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
          tooltips: "Surprisingly tanky, great support off-tank",
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

      stats: {
        HP: [41],
        SPD: [2],
        FORW: [1],
        BACK: [1],

        BLEED: [20],
        BLIGHT: [20],
        BURN: [30],
        DISEASE: [20],
        STUN: [20, 30],
        MOVE: [20, 30],
        DEBUFF: [20, 30],
        DEATH: [60, 75],
      },

      uniqueTokens: [
        {
          id: 2,
          FastDescription: "A token that empowers certain Vestal skills",
          skillPoints: [
            "Consumed upon use",
            "Confessor. +5% Debuff RES Piercing per Conviction Token",
            "Chaplain: +10% Stun RES and +10% MOVE RES per Conviction Token",
            "Duration: Until end of combat",
            "Limit: 3",
          ],
        },
        {
          id: 3,
          FastDescription:
            "Grants offensive tokens to the Hero in that position.",
          skillPoints: [
            "Turn Start: add Strength or Crit",
            "Duration: 3 rounds, (5 rounds with Seraph)",
            "Does not stack with other Consecrations",
          ],
        },
        {
          id: 4,
          FastDescription:
            "Grants defensive tokens to the Hero in that position.",
          skillPoints: [
            "Turn Start: add Block or dodge",
            "Duration: 3 rounds, (5 rounds with Seraph)",
            "Does not stack with other Consecrations",
          ],
        },
      ],
    },
    howToPlay: [
      {
        tittle: "Buff Allies",
        description:
          "Regardless of the build, you probably want to place some consecrations on your teammates. Both are good for different reasons, and we'll talk about that in the skills section.",
      },
      {
        tittle: "Conviction Dump",
        description:
          "Make sure she has a way to get rid of her conviction tokens. This can be through abilities like Judgment, Mace Bash, Divine Grace, anything that uses those tokens. It's crucial because many of her skills become very powerful when she uses these tokens.",
      },
      {
        tittle: "Defined Role",
        description:
          "Ensure you have a clearly defined role for her. Is she supporting the main damage dealer? Then you need Consecration of Light, which should be used on turn one. Is she your tank or off-tank? Then you need Sanctuary, possibly Consecration of Fortitude, and make sure she is protecting the right teammates and applying defensive tokens as early as possible.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "If Rank = 4: +2 Regeneration Dealt",
          "Target: Consecration Skills: -1 Stress",
          "Melee Skills: -50% DMG",
        ],
      },
      {
        stats: [
          "If Rank = 1: +25% Max HP",
          "If Rank = 2: +25% DMG",
          "Hand of Light Skill: Tauntx2",
          "Turn End: If Rank = 3 or 4: +1 Stress (33%)",
        ],
      },
      {
        stats: [
          "If Flammable Item is Equipped: +25% DMG",
          "Target: Ranged Skill: Burn2",
          "Gain when Hit: Burn1 (15%)",
        ],
      },
      {
        stats: ["[Party]", "If has Consecration: +25% Max HP (Until Next Inn)"],
        cite: '"I find this canticle particularly... evocative."',
      },
    ],

    teemmates: {
      cite: "Blighted Bastion: The Slow Roll Blight Comp",

      comp: [
        { id: 7, path: [2, "Alchemist"] },
        { id: 1, path: [2, "Venomdrop"] },
        { id: 8, path: [2, "Chaplain"] },
        { id: 5, path: [3, "Vanguard"] },
      ],

      description:
        "This comp focuses on a slow-roll, blight-centric strategy with Junia’s Chaplain for survivability, Barristan as a reliable tank, and PD and Audrey providing blight damage and healing. Junia’s Mantra boosts team durability, while Barristan handles tanking and mitigation with Retribution and Crush. PD and Audrey contribute substantial blight damage and utility, with Audrey’s Venomdrop allowing for extra direct damage. The team excels at wearing down enemies with blight and flexible damage options, and it’s especially effective against rank 2 enemies. Healing is ample, and the comp works well in slow, controlled fights. Avoid Act 2 due to limitations with rank 4 direct damage and be cautious in the Foetor due to high blight resist.",
    },

    skills: [
      {
        id: 0,
        name: "Hand of Light",
        Type: 0,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [3, 4],
            Target: [1, 2, 3],
          },
        ],

        description:
          "**Hand of Light** is a Vestal ability that varies by path. The *Confessor* variant retains the strength buff, making it ideal for *mace bash* and hitting multiple front-row targets. It's favored for its token pinging and mitigation, though all variants are viable for a front-rank Vestal.",
      },
      {
        id: 1,
        name: "Illumination",
        Type: 1,

        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4] },
          { Rank: [1, 2, 3], Target: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4] },
        ],
        description:
          "The normal variant of this move is a weaker version of *Tracking Shot*, mainly useful for checking Dodge and Stealth but lacking impact outside of Dodge-heavy fights. The *Confessor* variant, however, is much stronger, destroying 2-3 tokens and countering Stealth. This makes it a staple in most *Confessor* setups due to its versatility and effectiveness in various situations.",
      },
      {
        id: 2,
        name: "Judgement",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2], Target: [1, 2, 3, 4] },
          { Rank: [1, 2], Target: [1, 2, 3, 4] },
          { Rank: [1, 2], Target: [1, 2, 3, 4] },
          { Rank: [1, 2], Target: [1, 2, 3, 4] },
        ],
        description:
          "Upgraded *Judgment* deals 8-14 damage and 4 burn at 3 conviction, making it key for backline Vestals, especially *Seraph*. The *Confessor* variant applies debuffs instead but is less impactful since the full effect often comes too late in a fight. It works best in longer battles but can feel underwhelming compared to other debuffs.",
      },
      {
        id: 3,
        name: "Divine Grace",
        Type: 3,

        skillsPaths: [
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 2 },
        ],
        description:
          "*Divine Grace* uses 3 conviction for a powerful, nearly doubled heal, but has a 2-turn cooldown. It's a top-tier directed heal, though it competes with other conviction-based moves like *Judgment*. Best for backline Vestals, especially *Seraph*, who generate ample conviction. Its consistency and strength make it highly valuable.",
      },
      {
        id: 4,
        name: "Consecration of Fortitude",
        Type: 2,

        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 5 },
        ],
        description:
          "This consecration is the stronger of Vestal's two, especially when upgraded, providing valuable *Dodge+* and *Block+* tokens. It excels in dance teams, allowing multiple heroes to benefit from buffs, and is particularly effective with *Seraph Vestal* for strong mitigation. While usable with other paths, it's best with *Seraph*.",
      },
      {
        id: 5,
        name: "Ministrations",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "*Ministrations* is useful for curing stuns and dazes, trading Vestal’s turn for the enemy’s. It’s most effective in fights with frequent stuns or with *Pocket Watch*. Removing DoTs offers indirect healing but is less critical. Generally, it serves as a situational filler rather than a core choice.",
      },
      {
        id: 6,
        name: "Mace Bash",
        Type: 0,
        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
        ],
        description:
          "*Mace Bash* is the main damage move for frontline Vestal, scaling well with modifiers and requiring 3 conviction for bonus damage. It's especially effective when paired with *Hand of Light*, reaching 16-20 damage and ignoring defensive tokens. Chaplain Vestal can use it frequently, while *Confessor* gets it at a useful turn 3. Overall, it’s a reliable choice for any front-rank Vestal.",
      },
      {
        id: 7,
        name: "Sanctuary",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "The generic Vestal version of this move provides both damage absorption and stress healing, useful on any path. The *Chaplain* variant offers extra guard and defense, ideal for tank setups, especially if Vestal needs to absorb hits for conviction. While the generic version is more versatile, the *Chaplain* version excels in providing additional protection.",
      },
      {
        id: 8,
        name: "Consecration of Light",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 5 },
        ],
        description:
          "*Consecration of Light* provides value over time, especially with *Seraph* and dancing setups. It offers damage through strength, but crit tokens from the upgrade are less reliable. It's better used with bulky or backline setups, while *Fortitude* might be preferable otherwise. For slow-roll or fast-roll Vestal builds, it can be useful depending on the team composition.",
      },
      {
        id: 9,
        name: "Divine Comfort",
        Type: 3,
        skillsPaths: [
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Cooldown: 4 },
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Cooldown: 4 },
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Cooldown: 4 },
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Cooldown: 4 },
        ],
        description:
          "This move is more about mitigation through regen than direct healing, given its long cooldown and slow effect. It provides consistent damage reduction by healing over time, ignoring thresholds. Useful in most setups, especially for rank 2 Vestals, but should be used proactively as a mitigative tool rather than a primary heal.",
      },
      {
        id: 10,
        name: "Mantra",
        Type: 3,
        skillsPaths: [
          { Rank: [1, 2], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4] },
        ],
        description:
          "The *Chaplain* and *Seraph* mantras are the best options, with *Chaplain* offering useful self-healing and stress relief, and *Seraph* providing strong healing at the cost of dropping consecrations. The *Wanderer* and *Confessor* mantras are less effective due to their slow impact and short duration. Overall, prioritize *Chaplain* and *Seraph* if you have the space.",
      },
    ],
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
    paths: {
      name: ["Wanderer", "Arsonist", "Survivor", "Orphan"],
      skillsArray: [[], [0, 2, 4, 5, 6], [1, 4, 5, 6, 8], [3, 6, 7, 9, 10]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A role that sacrifices direct damage to revel in the flames."',
        '"A role that enhances survivability while weakening Burn skills."',
        '"A role that relies on positioning to influence direct damage and Burn."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
        ],
        [
          {
            title: "Increased Burn Chance",
            text: "+33% Burn Chance",
          },
          {
            title: "Burn Crit Chance Boost",
            text: "Burn-causing Skills: +10% CRIT",
          },
          {
            title: "Damage Reduction",
            text: "-25% DMG",
          },
          {
            title: "Turn Start Effect",
            text: "Burn x3 (25%)",
          },
        ],
        [
          {
            title: "Enhanced Healing Skills",
            text: "+50% Healing Given",
          },
          {
            title: "Healing-Over-Time",
            text: "+50% Healing-Over-Time Given",
          },
          {
            title: "Reduced Burn Chance",
            text: "-20% Burn Chance",
          },
          {
            title: "Combat Start Effects",
            text: "Dodge x2, Speed Boost",
          },
        ],
        [
          {
            title: "Reduced Max HP",
            text: "-20% Max HP",
          },
          {
            title: "Burn Damage on Rank",
            text: "If Rank =1: -2 Burn Dealt If Rank =2: -1 Burn Dealt If Rank =3: +1 Burn Dealt If Rank =4: +2 Burn Dealt",
          },
          {
            title: "Damage on Rank",
            text: "If Rank =1: +40% DMG If Rank =2: +20% DMG If Rank =3: -20% DMG If Rank =4: -40% DMG",
          },
          {
            title: "Self Effect",
            text: "Firestarter Crit Boost",
          },
        ],
      ],
    },
    description:
      "As a new addition to the Hero's roster in Darkest Dungeon II, the Runaway's skillset has a heavy focus on Burn effect. The Runaway is primarily a front-liner, having access to most of her skills when placed on the front Ranks. Furthermore, she can target the back Ranks, provided that she stays on Rank 3 or 4, where she can not use various skills. She is one of the few Heroes that can use Stealth and also among the few that can heal allies.",
    characteristics: {
      Rol: [
        {
          title:
            "Specialist in prolonged damage-over-time (DoT) and utility, providing consistent damage and control.",
        },
      ],
      Strengths: [
        {
          title: "Burn",
          tooltips: "Apply burn tokens to enemies",
        },
        {
          title: "Mobile",
          tooltips: "Can adapt to any situation, help fix your team order",
        },
        {
          title: "Support",
          tooltips: "Smokescreen, cure bleed/blind",
        },
      ],
      Weaknesses: [
        {
          title: "Bad Defenses",
          tooltips: "No defensive token generation, can be easily killed",
        },
        {
          title: "Enemy Resists",
          tooltips:
            "Very prone to enemy resists, if the enemy has high resist, she can't do much",
        },
      ],
      stats: {
        HP: [33],
        SPD: [4, 5],
        FORW: [1],
        BACK: [2],

        BLEED: [20],
        BLIGHT: [20],
        BURN: [30, 50],
        DISEASE: [30],
        STUN: [20],
        MOVE: [30],
        DEBUFF: [20],
        DEATH: [60, 75],
      },
      uniqueAttributes: {
        tittle: "Controlled Burn",
        description: "The Runaway applies Burn repeatedly to the enemy.",
      },
      uniqueTokens: [
        {
          id: 5,
          FastDescription:
            "A token that repeatedly inflicts Burn on the enemy in that position",
          skillPoints: [
            "Turn Start: Add x2 Burn",
            "Burn is unaffected by Runaway's modifiers.",
            "Duration: 3 rounds",
          ],
        },
      ],
    },
    howToPlay: [
      {
        tittle: "Support Skills",
        description:
          "The easiest way to use Runaway is to give her a couple of support skills so she can help your team. Depending on the region, you will generally want to focus on supportive abilities.",
      },
      {
        tittle: "Main Dmg Skill",
        description:
          "Pick a main damage skill, such as Searing Strike, Firefly, Ransack, or Dragonfly. Make sure to maximize its usage as much as possible.",
      },
      {
        tittle: "Main Rank",
        description:
          "You don't necessarily have to build a dance team for her, but it's useful to have other characters who can move themselves in case she or someone else gets moved.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "Turn Start: If Stealth: Crit (50%)",
          "Apply on Hit: Hearthlight Skill: Combo (50%)",
          "vs Gaunt: -4 Speed",
        ],
      },
      {
        stats: [
          "When Moving: Dodge+ (50%)",
          "Self: Backdraft Skill: Stealth",
          "Combat Start: vs Gaunt: +1 Stress",
        ],
      },
      {
        stats: [
          "+100% Burn RES",
          "Burn-Causing Skills: +2 Burn Dealt",
          "vs Gaunt: -25% DMG",
        ],
      },
      {
        stats: [
          "[1 Target]",
          "If Dd2 token stealth.png: +3 Burn Dealt (Until Next Inn)",
          "If Dd2 token stealth.png: +3 Burn Received (Until Next Inn)",
        ],
        cite: '"Ill cover myself with this.... mind the fumes."',
      },
    ],

    teemmates: {
      cite: "The Wall of Faith: Unstoppable Mitigation Comp",

      comp: [
        { id: 8, path: [3, "Seraph"] },
        { id: 0, path: [2, "Sharpshot"] },
        { id: 3, path: [1, "Virtuoso"] },
        { id: 5, path: [2, "Bulwark"] },
      ],
      description:
        "This team focuses on strong mitigation without sacrificing much damage. Vestal uses *Consecration of Fortitude* on Jester to generate block or dodge tokens every turn. Barristan uses *Rampart* to stun or reposition, while Dismas uses *Pistol Shot* to stun as well. Jester marks a target with *Razor’s Wit* and can use *Finale* if needed. Vestal uses the tokens to cast *Judgment* with high damage and can apply *Consecration of Light* on Dismas to boost his damage. With *Bolster* and strong heals, the team handles stress and HP effectively. This composition is effective in all acts, especially against bosses vulnerable to stuns.",
    },

    skills: [
      {
        id: 0,
        name: "Searing Strike",
        Type: 0,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
        ],
        description:
          "*Searing Strike* is a decent damage move but less effective for Bonnie, who excels in DoT damage with moves like *Firefly*, *Dragonfly*, and *Controlled Burn*. Its utility as a hybrid damage move is less relevant to her kit, and its front-only use can limit its effectiveness. It also has some anti-synergy with her main paths, *Arsonist* and *Orphan*. Overall, while not a bad move, it struggles to find a good role in most of Bonnie's setups.",
      },
      {
        id: 1,
        name: "Firefly",
        Type: 1,

        skillsPaths: [
          { Rank: [1, 2], Target: [2, 3, 4] },
          { Rank: [1, 2], Target: [2, 3, 4] },
          { Rank: [1, 2], Target: [2, 3, 4] },
          { Rank: [1, 2], Target: [2, 3, 4] },
        ],
        description:
          "*Firefly* is Bonnie's staple DoT damage move for back rank setups, with broad targeting and only slightly less DoT than *Noxious Blast*. Its combo effect allows for AoE burn that bypasses most defensive mechanics, making it effective against enemies with Death’s Door Resistance (DBR). While the AoE burn is weaker, it helps manage thresholds and ensures follow-up DoT applications are less necessary. Generally, it's a reliable move for targeting enemies you want to eliminate, similar to *Noxious Blast*.",
      },
      {
        id: 2,
        name: "Smokescreen",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3], Cooldown: 1 },
        ],
        description:
          "*Smokescreen+* is a powerful debuff, applying two blind tokens, a vuln token, and a combo, making it the best single-target debuff in the game. It's effective in most Bonnie setups and works well for enhancing damage, especially with characters like Hellion and Leper. The only downside is that enemies might be killed too quickly, limiting the blind's impact. However, it's less useful against blind-immune enemies like the Act 3 boss.",
      },
      {
        id: 3,
        name: "Run and Hide",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 2 },
        ],
        description:
          "*Run and Hide* is a niche self-sustain move for Bonnie, providing stealth and regen but with low synergy with her kit. It’s useful when she needs to drop aggro or create an 'anti-tank' effect by forcing the other front-rank character to soak up damage. However, it's generally low-tempo and less impactful compared to her other moves like Dragonfly. This move has rare synergies and is situational at best.",
      },
      {
        id: 4,
        name: "Hearthlight",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "*Hearthlight* is a utility move that counters dodge and stealth, making it valuable in fights against dodge-heavy enemies like beast dens and cultists. The upgraded version also cures blindness on allies, which is particularly useful in areas like the Shroud. While it deals no damage, its utility in removing dodge, curing blind, and countering stealth makes it a strong pick in specific situations, especially against certain bosses.",
      },
      {
        id: 5,
        name: "Ransack",
        Type: 0,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [2, 3, 4] },
          { Rank: [1, 2, 3, 4], Target: [2, 3, 4] },
          { Rank: [1, 2, 3, 4], Target: [2, 3, 4] },
          { Rank: [1, 2, 3, 4], Target: [2, 3, 4] },
        ],
        description:
          "*Ransack* is a utility move for Bonnie, offering a weak pull and some damage with burn. Its inability to target rank 4 and its single-rank pull make it less effective compared to other pull abilities. While it can fit into double lunge or dance comps, and helps reposition Bonnie for moves like *Dragonfly* or *Backdraft*, it doesn't stand out in power. It's useful when you need a pull or dance move, but it's generally a weaker option in those roles.",
      },
      {
        id: 6,
        name: "Cauterize",
        Type: 3,
        skillsPaths: [
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Uses: 3 },
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Uses: 3 },
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Uses: 3 },
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Uses: 3 },
        ],
        description:
          "*Cauterize* is a versatile heal that can be used whenever a target is bleeding, which is a common condition in most fights. This makes it a reliable option, especially when facing enemies like bandits and cultists who frequently apply bleed. It also synergizes well with self-bleed comps, such as those involving Ravager Hellion or Leper with Ruin+, and can even complement the Occultist’s *Wyrd Healing* in a pinch. Given its utility, *Cauterize* is often a staple in Bonnie builds, though it's wise to swap it out in bleed-immune fights.",
      },
      {
        id: 7,
        name: "Controlled Burn",
        Type: 1,
        skillsPaths: [
          { Rank: [2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 3 },
        ],
        description:
          "*Controlled Burn* excels in rank 3, applying burn and bypassing stealth and dodge. It deals significant damage, especially to enemies with low burn resist or multiple actions, like the Act 3 boss. The persistent rank token can also affect shuffled enemies. However, it doesn't check block and may not suit fast-moving teams.",
      },
      {
        id: 8,
        name: "Dragonfly",
        Type: 1,
        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
        ],
        description:
          "*Incendiary Grenade* offers a front rank DoT cleave with a bonus combo application. Its effectiveness is somewhat limited by its range and Bonnie's vulnerability in the front ranks. While it requires careful positioning or support from dancers or the Tangle Trophy, it provides substantial value when used correctly. Consider using it as a starting move or with a safer strategy involving Smoke and Firefly.",
      },
      {
        id: 9,
        name: "Firestarter",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 2, Uses: 2 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 2, Uses: 2 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 2, Uses: 2 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 2 },
        ],
        description:
          "This move is most valuable when used with cleaves, amplifying their burn effects significantly. While it can offer some utility when applied randomly to a friendly, its true strength lies in enhancing cleave moves like Magnesium Rain or Grapeshot Blast. The Orphan version adds a crit token, but it's not essential. Without synergy with cleaves or ripostes, its utility is limited, making it a situational choice for those with the right setup.",
      },
      {
        id: 10,
        name: "Backdraft",

        Type: 1,
        skillsPaths: [
          { Rank: [3, 4], Target: [2, 3, 4], Cooldown: 1 },
          { Rank: [3, 4], Target: [2, 3, 4], Cooldown: 1 },
          { Rank: [3, 4], Target: [2, 3, 4], Cooldown: 1 },
          { Rank: [3, 4], Target: [2, 3, 4], Cooldown: 1 },
        ],
        description:
          "Backdraft is a high-damage move that excels with a team built around burn. Its effectiveness depends on getting Bonnie to the front and applying substantial burn first, making it less suitable for singular enemies or high-move bosses. It pairs well with burn-focused strategies like Dragonfly setups, but requires careful positioning and team coordination. Despite its niche use, when executed well, it can deal massive damage, especially in slower comps.",
      },
    ],
  },

  10: {
    name: "Bounty-Hunter",
    rolePlay: [],
    cite: ["The thrill of the hunt, the promise of payment!"],
    paths: {
      name: ["Professional"],
      skillsArray: [[]],
      cites: ['"On time, on budget."'],

      description: [
        [
          {
            title: "Path and Hiring",
            text: "One path, which has no effects. Can only be hired once per run",
          },
          {
            title: "Denial",
            text: "45%",
          },
          {
            title: "Resentment",
            text: "40%",
          },
          {
            title: "Obsession",
            text: "37.5%",
          },
          {
            title: "Ambition",
            text: "35%",
          },
          {
            title: "Cowardice",
            text: "33%",
          },
        ],
      ],
    },
    description:
      "The Bounty Hunter has a unique recruitment method through the inn's poster, costing 4 candles per region. He cannot form relationships but can experience stress and meltdowns. His pre-mastered skills offer powerful versatility despite the absence of paths or skill upgrades.",
    characteristics: {
      Rol: [
        {
          title:
            "Good boss killer, absorbs damage and stress in key fights, and avoids conflicts between heroes.",
        },
      ],
      Strengths: [
        {
          title: "Versatile",
          tooltips: "fits in any team composition, can adapt to any situation",
        },
        {
          title: "Any Region",
          tooltips: "good option for any region",
        },
      ],
      Weaknesses: [
        {
          title: "Setup Damage",
          tooltips: "pretty average damage output, needs to be set up",
        },
        {
          title: "No Affinity",
          tooltips:
            "can't build affinity with other heroes, can't form relationships",
        },
        {
          title: "Candles",
          tooltips: "Recruitment method is expensive, 4 candles per region",
        },
      ],
      stats: {
        HP: [48],
        SPD: [3],
        FORW: [2],
        BACK: [2],

        BLEED: [30],
        BLIGHT: [30],
        BURN: [30],
        DISEASE: [40],
        STUN: [40],
        MOVE: [30],
        DEBUFF: [40],
        DEATH: [75],
      },

      uniqueAttributes: {
        tittle: "Combo Token Regeneration",
        description:
          "The Bounty Hunter, when consuming a Combo token on the enemy, has a 50% chance to reapply the token.",
      },
    },
    howToPlay: [
      {
        tittle: "Boss Fight",
        description:
          "The Bounty Hunter is very useful if you're going to face a boss and need his help. Especially at the beginning, like in Region One, taking him gives you a very good chance of winning. He is also effective at the end of Region Three, where the Cultus mini boss is.",
      },
      {
        tittle: "Affinity Protection",
        description:
          "The Bounty Hunter is ideal for replacing a hero who has a bad affinity in the region you're heading to. For example, in the Sprawl, where there are burn-resistant enemies, you can replace the Runaway with the Bounty Hunter to have a more effective team member.",
      },
      {
        tittle: "Bad Hero Matchup",
        description:
          "If you have a hero with a bad matchup for a specific region, like the Plague Doctor in the Fetter or the Grave Robber in the Fetter who do poison damage, you can swap them for the Bounty Hunter to improve your team. This is especially useful when heading to a region with enemies resistant to certain types of damage.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "+50% Move RES Piercing",
          "If Target Combo: +20% DMG",
          "If Target Stun: +5% CRIT",
        ],
      },
      {
        stats: [
          "Gain on Killing Blow: +3% DMG (Until Next Inn)",
          "All Skills: ExecutionExecution 1",
        ],
      },
      {
        stats: [
          "Caltrops Skill: +25% Debuff RES Piercing",
          "Apply on Hit: Flashbang Skill: Blind",
          "Apply on Hit: Hurlbat Skill: Weak",
        ],
      },
    ],

    teemmates: {
      cite: "The Wall of Faith: Unstoppable Mitigation Comp",

      comp: [
        { id: 8, path: [3, "Seraph"] },
        { id: 0, path: [2, "Sharpshot"] },
        { id: 3, path: [1, "Virtuoso"] },
        { id: 5, path: [2, "Bulwark"] },
      ],

      description:
        "This team focuses on strong mitigation without sacrificing much damage. Vestal uses *Consecration of Fortitude* on Jester to generate block or dodge tokens every turn. Barristan uses *Rampart* to stun or reposition, while Dismas uses *Pistol Shot* to stun as well. Jester marks a target with *Razor’s Wit* and can use *Finale* if needed. Vestal uses the tokens to cast *Judgment* with high damage and can apply *Consecration of Light* on Dismas to boost his damage. With *Bolster* and strong heals, the team handles stress and HP effectively. This composition is effective in all acts, especially against bosses vulnerable to stuns.",
    },

    skills: [
      {
        id: 0,
        name: "Collect Bounty",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
        ],

        description:
          "This move is indeed a top-tier front-rank damage option, outclassing Wicked Hack with its sheer power and straightforward application. It performs exceptionally well with or without combo, and when combined with combo, it rivals Howling End in terms of damage output, making it a reliable staple for any high-damage setup.",
      },
      {
        id: 1,
        name: "Mark for Death",
        Type: 1,
        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Target: [1, 2, 3, 4],
            Cooldown: 1,
          },
        ],
        description:
          "This damage transfer is a powerful tool, effectively enhancing BH's already formidable damage capabilities. It functions similarly to a superior Vuln Hex, but with BH’s tendency to focus on maximizing his own damage rather than setting up others, it can be a bit situational. When used strategically, particularly in cases where BH can capitalize on combo or bypass enemy defenses, it remains a valuable asset.",
      },
      {
        id: 2,
        name: "Come Hither",
        Type: 1,
        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Target: [3, 4],
          },
        ],
        description:
          "This move on BH, though not as strong as Daemon’s Pull, remains highly effective. It provides valuable disruption by pulling enemies, making it especially useful against Cherubs and Trumpets. While it might not surpass Daemon’s Pull, its utility in setting up quick kills or disrupting enemy formations still makes it a powerful tool in BH’s arsenal.",
      },
      {
        id: 3,
        name: "Caltrops",
        Type: 1,
        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Target: [3, 4],
          },
        ],
        description:
          "This move is relatively weak, offering modest DoT damage and minor debuffs. It lacks impact compared to dedicated backline DoT options and its debuffs are often underwhelming. The move resist and speed penalties are situationally useful but generally not worth the slot. It’s a niche pick, typically chosen only when no better options are available.",
      },
      {
        id: 4,
        name: "Flashbang",
        Type: 1,
        skillsPaths: [
          {
            Rank: [1, 2, 3],
            Target: [1, 2, 3],
            Cooldown: 1,
          },
        ],
        description:
          "This move is a more reliable Disorienting Blast, with blind replacing the odd % chance to weak. It’s primarily used for its shuffle or combo stun potential, and the added blind is a bonus. Often, Collect Bounty is preferred for a kill or setup, but this move is solid, offering basic utility that feels fair within BH’s kit.",
      },
      {
        id: 5,
        name: "Staredown",
        Type: 1,
        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Target: [1, 2, 3, 4],
            Cooldown: 1,
          },
        ],
        description:
          "This move functions as an intimidate with added utility for clearing vuln, making it a solid choice for tanking. It’s useful to draw aggro and keep BH alive until the end of the region. You might use it frequently when other moves aren’t needed or to manage enemy attention. If BH dies, there’s no refund, but you can afford to have him take hits until the last fight.",
      },
      {
        id: 6,
        name: "Hurlbat",
        Type: 1,
        skillsPaths: [
          {
            Rank: [1, 2],
            Target: [1, 2, 3, 4],
          },
        ],
        description:
          "This move provides flexible and reliable damage, hitting any target with a strong attack and offering a burn bonus. It’s particularly effective if you have a backline BH, complementing sniping teams and pairing well with burn setups like those with Bonnie and Junia. Even without the burn, its ability to deliver 6-10 damage to any enemy is highly valuable.",
      },
      {
        id: 7,
        name: "No Escape",
        Type: 1,
        skillsPaths: [
          {
            Rank: [1, 2],
            Target: [3, 4],
            Cooldown: 2,
          },
        ],
        description:
          "This move is a reliable backline stun, reminiscent of the powerful stuns from DD1. It’s excellent in this game, especially since it’s balanced around combo and daze stuns. With the ability to ignore dodge, it can consistently stun enemies like cherubs or spitter spiders, making it a top choice for backline BHs unless facing enemies with extremely high stun resist, which is rare.",
      },
      {
        id: 8,
        name: "Finish Him",
        Type: 0,
        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
        ],
        description:
          "Finish Him suffers from a similar issue as in DD1: you rarely plan to strike the stunned target directly. However, if you’re running stun-heavy comps, it provides additional damage. It has a bit more reach than 'Collect Bounty' but is generally less preferred compared to options like 'Hurlbat' for utility. It's useful for finishing off enemies with DBR but is considered a weaker direct damage option compared to other moves like 'Hurlbat' and 'Collect Bounty.'",
      },
      {
        id: 9,
        name: "Uppercut",
        Type: 0,
        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2],
            Cooldown: 2,
          },
        ],
        description:
          "This move's primary strength is its straightforward stun capability, making it highly effective for managing frontlines. Although it lacks dodge ignoring and replaces combo with knockback, the higher damage and versatility in targeting different ranks make it a valuable option. It's an excellent choice for any frontline BH and pairs well with Jester for tactical flexibility.",
      },
      {
        id: 10,
        name: "Bodyguard",
        Type: 2,
        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },
        ],
        description:
          "This move is essentially an unupgraded Defender, which is solid but underwhelming compared to BH’s other abilities. It offers valuable utility by allowing him to absorb damage, but it’s often overshadowed by his more impactful moves. Still, it's useful in situations where BH needs to protect allies, though Staredown is generally preferred for its versatility.",
      },
    ],
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
    paths: {
      name: ["Wanderer", "Aggressor", "Templar", "Banneret"],
      skillsArray: [[], [0, 5, 10, 2, 6], [0, 2, 4, 7, 9], [2, 6, 8, 9, 10]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A front rank fighter who cleanses and slays with Burnholy fire."',
        '"A self-sufficient defender who protects allies while regenerating injuries."',
        '"An armored supporter with improved reach, capable of healing and wide-range buffs."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
        ],
        [
          {
            title: "Smite Execution",
            text: "Grants Execution on burning targets; reduces Stress if it kills.",
          },
          {
            title: "Reap Adjustment",
            text: "No longer heals; grants Execution and decreases healing on burning targets, adds Strength if it kills.",
          },
          {
            title: "Tenacity Effect",
            text: "Melee hits on burning targets heal the Crusader.",
          },
        ],
        [
          {
            title: "Smite Stress Relief",
            text: "Reduces Stress if the target has Combo tokens.",
          },
          {
            title: "Rallying Cry Boost",
            text: "Grants Guard and increased healing; adds HP regeneration if the target's health is below 33%.",
          },
          {
            title: "Tenacity Buff",
            text: "Grants Block, debuff resistance, and increases healing received.",
          },
        ],
        [
          {
            title: "Zealous Accusation",
            text: "Causes Burn and adds a Combo token.",
          },
          {
            title: "Battle Heal",
            text: "Has one extra charge and heals up to 30% of a target's HP.",
          },
          {
            title: "Rallying Cry",
            text: "Also applies the Immobilized effect.",
          },
          {
            title: "Tenacity Adjustment",
            text: "Grants a Block token, but no longer adds debuff resistance.",
          },
        ],
      ],
    },
    description:
      "Reynauld is a frontline Crusader with high resistance to bleed and burn. His paths include Wanderer, Aggressor, Templar, and Banneret, each with a different focus. His abilities range from powerful strikes, stress healing, stuns, and area attacks with burns, adapting to different roles depending on the chosen path.",
    characteristics: {
      Rol: [
        {
          title:
            "Versatile hero, adapts to offensive and defensive strategies. Effective in prolonged battles.",
        },
      ],
      Strengths: [
        {
          title: "Support",
          tooltips: "Multiples ways to support the team",
        },
        {
          title: "Burn",
          tooltips: "Burn sinergy, can apply burn tokens",
        },
        {
          title: "Flexible",
          tooltips: "Can be used in any position, can adapt to any situation",
        },
      ],
      Weaknesses: [
        {
          title: "Damage",
          tooltips: "little damage output, its fine but not great",
        },
        {
          title: "Action Economy",
          tooltips: "",
        },
      ],
      stats: {
        HP: [40],
        SPD: [2],
        FORW: [1],
        BACK: [1],

        BLEED: [30, 40],
        BLIGHT: [10],
        BURN: [30, 40],
        DISEASE: [30],
        STUN: [30, 40],
        MOVE: [30],
        DEBUFF: [20],
        DEATH: [60, 75],
      },
    },
    howToPlay: [
      {
        tittle: "Be Picky",
        description:
          "Be very selective and careful with the skills you assign to him. The Crusader can do many things, but if you try to make him do everything, it can become overwhelming. Instead, focus on having him do a couple of things very well.",
      },
      {
        tittle: "Support",
        description:
          "Ensure the Crusader can support the team. While he has some damage skills, he also has many support skills. Always have two or three, and even four in some builds, to help the team at all times, as that is his primary role.",
      },
      {
        tittle: "1 or 2 Damage",
        description:
          "It is important to have one or two damage options. Although he needs to alternate his skills, any buffs he sets up will be after the enemies act. Therefore, you need to make sure your damage options align well with your support options and the needs of your team.",
      },
      {
        tittle: "Skills",
        description:
          "The Crusader has many skills, but his slowness means that any buffs or synergies he tries to capitalize on will occur after the enemies have acted. It is crucial to choose skills that complement both his support role and his damage capabilities.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "Apply to Attacker When Hit: Burn1 (66%)",
          "Self: Radiance Skills: +1 Burn Dealt (4 Turns)",
          "Turn End: If Combo: +2 Stress",
        ],
      },
      {
        stats: [
          "If Relics in inventory < 10: +10% CRIT",
          "Target: Reap Skills: Steal Positive Token",
          "Self: Reap Skills: -2 Relics from inventory (33%)",
        ],
      },
      {
        stats: [
          "When Moving: Ally Behind: Block",
          "Target: Rallying Cry Skills: +20% Debuff RES",
          "Turn End: If Rank = 4: Weak",
        ],
      },
      {
        stats: [
          "[2 Targets]",
          "+5% Dd2 token stress.png RES per Negative Token (Until Next Inn)",
          "+5% DMG per Positive Token (Until Next Inn)",
        ],
        cite: '"Faith for the forsaken. Judgement for the rest."',
      },
    ],

    teemmates: {
      cite: "The Wall of Faith: Unstoppable Mitigation Comp",

      comp: [
        { id: 8, path: [3, "Seraph"] },
        { id: 0, path: [2, "Sharpshot"] },
        { id: 3, path: [1, "Virtuoso"] },
        { id: 5, path: [2, "Bulwark"] },
      ],

      description:
        "This team focuses on strong mitigation without sacrificing much damage. Vestal uses *Consecration of Fortitude* on Jester to generate block or dodge tokens every turn. Barristan uses *Rampart* to stun or reposition, while Dismas uses *Pistol Shot* to stun as well. Jester marks a target with *Razor’s Wit* and can use *Finale* if needed. Vestal uses the tokens to cast *Judgment* with high damage and can apply *Consecration of Light* on Dismas to boost his damage. With *Bolster* and strong heals, the team handles stress and HP effectively. This composition is effective in all acts, especially against bosses vulnerable to stuns.",
    },

    skills: [
      {
        id: 0,
        name: "Smite",
        Type: 0,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
        ],
        description:
          "Basic Smite has a narrower damage range compared to Wicked Hack, which makes it more consistent but with slightly lower maximum damage. Aggressor's version adds Execution and stress healing, useful for dealing with death armor and managing stress but less effective without combo. Templar’s version provides stress healing on combo, which is good for managing stress but often less impactful compared to other options. Each version has its strengths depending on the team setup and specific fight scenarios.",
      },
      {
        id: 1,
        name: "Stunning Blow",
        Type: 0,
        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2],
          },
        ],
        description:
          "This is a straightforward stun that doesn’t need upgrades to work, offering a bit of damage alongside the stun. While stuns can be less impactful overall, it’s effective for front-line Crusaders with combo access. Its key advantage is providing the stun without requiring upgrades. For focused stun comps, other options might be better, but it’s a solid choice for Crusaders, especially against specific enemies like the Collector.",
      },
      {
        id: 2,
        name: "Zealous Accusation",
        Type: 1,

        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [1, 2], Target: [3, 4] },
        ],
        description:
          "Don’t overlook Zealous Accusation. It’s a powerful cleave, akin to a sturdier Dragonfly, dealing 4 burn to two targets with the Favorite Toy Memory. This move excels against frontline targets with block or dodge, setting up combos and enabling moves like Backdraft. Crusader’s speed is a minor drawback, but it’s generally the better cleave compared to Reap. For back-line Crusaders, Banneret’s version trades one DoT for combo application, making it a strong choice for rank 3 or 4, especially when paired with a Sharpshot or other combo-focused setups.",
      },
      {
        id: 3,
        name: "Inspiring Cry",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "This move offers a unique twist on Inspiring Tune, providing stress healing specifically for Reynauld rather than the target when upgraded. While it can be used anywhere and offers a valuable stress heal, it’s often less flexible compared to other stress heal options since it only benefits Reynauld. This makes it less appealing compared to moves like Bolster+, especially given the effectiveness of Aggressor's Smite. It remains useful but is often less prioritized in favor of other options in Reynauld’s kit.",
      },
      {
        id: 4,
        name: "Rallying Cry",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 3 },
        ],
        description:
          "This stun cure is a niche choice, only offering its full potential with an upgrade. Its value is limited compared to other Crusader options, with self-weak removal being less effective given Zealous’s capabilities. The Templar version adds a guard effect with healing received and regen transfer, but doesn’t protect Reynauld himself. The Banneret version applies immobilize to your entire team, useful in specific scenarios but often less practical overall.",
      },
      {
        id: 5,
        name: "Reap",
        Type: 0,
        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
        ],
        description:
          "Reap is more niche than Zealous but offers a powerful heal on combo, especially against low HP enemies with DoTs. The Aggressor version swaps the heal for Execution 1 on burning targets, but it faces similar challenges as unupgraded Smite. The strength bonus on kill is nice, but its situational nature and mastery requirement make it less appealing. Reap also works with the Aggressor version of Tenacity, unlike Zealous.",
      },
      {
        id: 6,
        name: "Battle Heal",
        Type: 3,
        skillsPaths: [
          { Rank: [3, 4], Ally: [1, 2, 3, 4], Cooldown: 2, Uses: 3 },
          { Rank: [3, 4], Ally: [1, 2, 3, 4], Cooldown: 2, Uses: 3 },
          { Rank: [3, 4], Ally: [1, 2, 3, 4], Cooldown: 2, Uses: 3 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 2, Uses: 4 },
        ],
        description:
          "The 2-turn cooldown on upgraded Battle Heal makes the upgrade feel necessary, as the unupgraded version is weaker than Battlefield Medicine. The Banneret version is more versatile, allowing it to be used on any target and adding an extra use. This makes it generally the better version, but the main priority is upgrading to reduce cooldown and improve efficiency.",
      },
      {
        id: 7,
        name: "Bulwark of Faith",
        Type: 2,
        skillsPaths: [
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
        ],
        description:
          "Reynauld's taunt move is a strong option for tanking, providing 2 block unupgraded and up to 3 taunt when upgraded, making it a reliable way to draw enemy attention. The regen adds some mitigation, though it's more about reducing incoming damage than actual healing. The downside is the lack of Block+ and the 2-turn cooldown, so timing is crucial. Despite these limitations, the taunt is extremely valuable, and this move is almost always worth using, especially if Reynauld is your primary tank.",
      },
      {
        id: 8,
        name: "Holy Lance",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2], Target: [2, 3, 4] },
          { Rank: [1, 2], Target: [2, 3, 4] },
          { Rank: [1, 2], Target: [2, 3, 4] },
          { Rank: [1, 2], Target: [2, 3, 4] },
        ],
        description:
          "It sounds like you're diving deep into the mechanics of Reynauld's moveset, analyzing the effectiveness of *Holy Lance* within different team setups. Your insight on how its value is spread across damage, utility, and combo potential highlights the need for thoughtful consideration when scaling this move. Balancing it against other options like *Zealous* or *Smite*, which benefit more directly from scaling, shows your understanding of how to maximize the effectiveness of a team composition.",
      },
      {
        id: 9,
        name: "Radiance",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 4 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 4 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 4 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 4 },
        ],
        description:
          "Radiance provides buffs but has a slow payoff, making it less appealing compared to more immediate options like Smite or Zealous. It's better with Bonnie but still suffers from the four-turn delay. While it can synergize with Templar's guard skill or healing buffs, there are usually more effective moves to use in most situations.",
      },
      {
        id: 10,
        name: "Tenacity",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 4 },
          { Rank: [3, 4], Target: [0], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 3 },
        ],
        description:
          "Tenacity offers four different versions tailored to various playstyles. The Wanderer and Banneret versions provide valuable block tokens to allies, enhancing their mitigation. The Templar version focuses on increasing Crusader's healing received, making it ideal for absorbing and recovering from damage. The Aggressor version, though limited to melee skills, can be powerful with the right setup, potentially rivaling Adrenaline Rush in specific situations.",
      },
    ],
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
    paths: {
      name: ["Wanderer", "Instructrice", "Antagoniste", "Intrépide"],
      skillsArray: [[], [1, 4, 7, 8, 9], [1, 2, 4, 6, 10], [0, 2, 4, 7, 9]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"A back row taskmaster capable of driving allies forward, whatever the cost."',
        '"Skilled at disrupting the enemy, creating opening for allies to exploit."',
        '"A rank-flexible, extremely high-risk role with high damage potential."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },

          {
            title: "Aggressive Stance",
            text: "On Riposte: Heal Self: 10% (33%)",
          },
          {
            title: "Defensive Stance",
            text: "On Riposte: Gain Dodge (33%)",
          },
        ],

        [
          {
            title: "Aggressive Stance",
            text: "On Killing Blow: Gain Regeneration3.",
          },
          {
            title: "Defensive Stance",
            text: "On Killing Blow: Reduce Stress by 1.",
          },
          {
            title: "Bug Note",
            text: "The 'On Killing Blow' effects also trigger when destroying corpses. This might be a bug.",
          },
        ],
        [
          {
            title: "Aggressive Stance",
            text: "Skills gain +20% Debuff RES Piercing.",
          },
          {
            title: "Defensive Stance",
            text: "Sword Skills gain -5% Debuff RES.",
          },
        ],
        [
          {
            title: "Stance Passive Effects",
            text: "Increase power and risk alike, stacking up to 5 times. Effects are lost when damaged.",
          },
          {
            title: "Aggressive Stance",
            text: "Gain when Missed: +5% CRIT, -10% Damage over Time RES.",
          },
          {
            title: "Defensive Stance",
            text: "Gain when Missed: +20% DMG Dealt, +40% DMG Received.",
          },
        ],
      ],
    },
    description:
      "The Duelist is a highly-mobile, high-damage-dealing hero, with low HP and few defenses. In a way, it plays similar to the Grave Robber, however the Duelist has no self-healing skills which makes her a higher-risk, higher-reward bet.",
    characteristics: {
      Rol: [
        {
          title:
            "Agile and deadly, a specialist in quick and precise attacks, with great dodging and counter-attacking ability.",
        },
      ],
      Strengths: [
        {
          title: "Mobile",
          tooltips: "Rank 1-4, can adapt to any position",
        },
        {
          title: "Damage",
          tooltips: "Good consistent damage output",
        },
        {
          title: "Riposte",
          tooltips: "Best riposte in the game, can counter-attack enemies",
        },
      ],
      Weaknesses: [
        {
          title: "Risky",
          tooltips:
            "Glass cannon, can be easily killed but can deal a lot of damage",
        },
        {
          title: "mastery",
          tooltips: "Needs to be mastered points to be really effective",
        },
        {
          title: "Status",
          tooltips: "Very vulnerable to status effects",
        },
      ],
      stats: {
        HP: [28],
        SPD: [6],
        FORW: [2],
        BACK: [2],

        BLEED: [30, 40],
        BLIGHT: [30, 40],
        BURN: [30, 40],
        DISEASE: [30],
        STUN: [10],
        MOVE: [40],
        DEBUFF: [20],
        DEATH: [60, 75],
      },

      uniqueAttributes: {
        tittle: "Stances",
        description:
          "The Duelist has two stances that affect her skills, and she can only be in one at a time, each with different effects.",
      },
      uniqueTokens: [
        {
          id: 6,
          FastDescription:
            "Aggressive stance that empowers certain Duelist skills.",
          skillPoints: [
            "Varying effects depending on path and skill.",
            "Only one stance may be active at any time.",
            "Duration: Until end of combat",
            "Limit: 1",
          ],
        },
        {
          id: 7,
          FastDescription:
            "Defensive stance that empowers certain Duelist skills.",
          skillPoints: [
            "Varying effects depending on path and skill.",
            "Only one stance may be active at any time.",
            "Duration: Until end of combat",
            "Limit: 1",
          ],
        },
      ],
    },
    howToPlay: [
      {
        tittle: "Skill Chains",
        description:
          "It is crucial to define the skill paths you want to use with Duelist. Her skills compete with each other, so you need to be sure which main skills to use and what to do if one fails. For example, if you want to use FL, you need to enter aggressive stance to get the damage bonus, which puts you in rank one. You must plan how to move back if you want to use FL again or set up defenses and disengage if necessary.",
      },
      {
        tittle: "Defined Role",
        description:
          "It's essential to define Duelist's role from the beginning. While all characters have defined roles, Duelist, because many of her skills focus on damage or provide a bit of utility or stance switching, you need to decide which skills are most needed. If you're focusing on damage, choose your damage skills and plan how to use them effectively without getting out of position on the battlefield.",
      },
      {
        tittle: "Adjust Team",
        description:
          "The team needs to adjust to Duelist, as she's not a plug-and-play character like others. She needs a supportive team to maximize her potential. For example, if you decide to run one of her paths where she acts as a support hero, ensure that Duelist doesn't disrupt the support target by being out of position or pushing them out of position while trying to buff them.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "Riposte Skills: +10% CRIT",
          "+33% Move RES Piercing",
          "Gain on Miss: Remove Dodge (20%)",
        ],
      },
      {
        stats: [
          "Combat Start: Defensive Stance",
          "Apply on Hit: Riposte Skills: Blind (66%)",
          "Gain when Hit: Burn1 (15%)",
        ],
      },
      {
        stats: [
          "Combat Start: Aggressive Stance",
          "Target: Again! Skills: Speed",
          "Gain on Miss: +1 Stress (25%)",
        ],
      },
      {
        stats: [
          "[1 Target]",
          "Riposte Skills: ExecutionExecution 2 (Until Next Inn)",
        ],
        cite: '"A clean blade is a killing blade."',
      },
    ],

    teemmates: {
      cite: "The Wall of Faith: Unstoppable Mitigation Comp",

      comp: [
        { id: 8, path: [3, "Seraph"] },
        { id: 0, path: [2, "Sharpshot"] },
        { id: 3, path: [1, "Virtuoso"] },
        { id: 5, path: [2, "Bulwark"] },
      ],
      description:
        "This team focuses on strong mitigation without sacrificing much damage. Vestal uses *Consecration of Fortitude* on Jester to generate block or dodge tokens every turn. Barristan uses *Rampart* to stun or reposition, while Dismas uses *Pistol Shot* to stun as well. Jester marks a target with *Razor’s Wit* and can use *Finale* if needed. Vestal uses the tokens to cast *Judgment* with high damage and can apply *Consecration of Light* on Dismas to boost his damage. With *Bolster* and strong heals, the team handles stress and HP effectively. This composition is effective in all acts, especially against bosses vulnerable to stuns.",
    },

    skills: [
      {
        id: 0,
        name: "Touché",
        Type: 0,

        skillsPaths: [
          {
            Rank: [1, 2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [1, 2, 3, 4],
            Target: [1, 2],
          },
        ],

        description:
          "Touche Average damage attack with low crit chance. Moves Duelist forward when Token dul aggressive and backward when Token dul defensive. When upgraded grants stance tokens depending on rank if none are currently applied",
      },
      {
        id: 1,
        name: "Feint",
        Type: 0,
        skillsPaths: [
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2], Cooldown: 1 },
        ],
        description:
          "Feint Below average damage attack which switches Duelists current stance and applies Riposte Riposte. Important skill for switching stances and can be used from all Ranks but 4",
      },
      {
        id: 2,
        name: "Disengage",
        Type: 0,
        skillsPaths: [
          { Rank: [2, 3, 4], Target: [1, 2, 3] },
          { Rank: [2, 3, 4], Target: [1, 2, 3] },
          { Rank: [2, 3, 4], Target: [1, 2, 3] },
          { Rank: [2, 3, 4], Target: [1, 2, 3], Cooldown: 1 },
        ],
        description:
          "Disengage Backwards moving skill which applies Token dul defensive stance.png as well as Dodge. Effects applied to the target change depending on the Path Duelist uses as well as which stance she's in at the time of using the skill",
      },
      {
        id: 3,
        name: "Flick",
        Type: 0,
        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
          { Rank: [3, 4], Target: [1, 2] },
        ],
        description:
          "Flick Average damage attack whose effects change depending on the stance Duelist is in. During Token dul aggressive stance.pngAggressive the attack will ignore BlockBlock, and during Token dul defensive stance.pngDefensive ignores DodgeDodge. When upgraded will pierce 1 Death ArmorDeath Armor which can be useful for finishing off larger enemies or bosses",
      },
      {
        id: 4,
        name: "Preparation",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 1 },
        ],
        description:
          "Preparation Self buff which switches Duelist to Token dul aggressive stance.pngAggressive while providing Icon speed.pngSpeed and StrengthStrength tokens for extra damage. When upgraded provides extra Riposte damage when used in Token dul defensive stance.pngDefensive or CritCrit when used in Token dul aggressive stance.pngAggressive",
      },
      {
        id: 5,
        name: "The Boot",
        Type: 0,
        skillsPaths: [
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
          { Rank: [2, 3, 4], Target: [1, 2] },
        ],
        description:
          "The Boot Below average damage knockback skill which requires Token dul aggressive Aggressive stance. Good for disrupting certain enemy formations. Applies ComboCombo and knocks back an additional rank when upgraded",
      },
      {
        id: 6,
        name: "Again!",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 5, Uses: 2 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 3 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 5, Uses: 2 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 5, Uses: 2 },
        ],
        description:
          "Again! Buff skill which requires Token dul Aggressive to use. Clears all skill cooldowns on the target which can allow for repeated uses of many skills that otherwise have long cooldowns. Removes stance tokens when used. When upgraded can be used during either stance and has a 50% chance to not remove tokens",
      },
      {
        id: 7,
        name: "Flèche",
        Type: 0,
        skillsPaths: [
          { Rank: [1, 2, 3], Target: [1, 2, 3] },
          { Rank: [1, 2, 3], Target: [1, 2, 3] },
          { Rank: [1, 2, 3], Target: [1, 2, 3] },
          { Rank: [1, 2, 3], Target: [1, 2, 3] },
        ],
        description:
          "Fleche High damage high crit skill which moves Duelist forward to the front rank when used. Switches Duelist to Token dul aggressive and gains 30% extra damage when used in Token dul aggressive stance.pngAggressive. Clears all dodge tokens upon use. When upgraded gains 5% extra crit in Token dul aggressive ",
      },
      {
        id: 8,
        name: "Meditation",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [0], Cooldown: 1 },
        ],
        description:
          "Meditation Stance switch skill which switches Duelist to Token dul defensive stance.pngDefensive and gives 3 DodgeDodge. Adds TauntTaunt when used in Defensive and Riposte Riposte when used in Aggressive. When upgraded adds Dodge+Dodge+ and removes ComboCombo",
      },
      {
        id: 9,
        name: "Coup de Grâce",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2], Target: [2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Target: [2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Target: [2, 3, 4], Cooldown: 2 },
        ],
        description:
          "Coup De Grace Duelists only ranged skill which deals flat damage and requires Token dul defensive stance.pngDefensive. Ignores both weak, Block and pierces one hit of Death Armor which can be very useful for killing low health enemies. When upgraded pierces an extra hit of Death Armor",
      },
      {
        id: 10,
        name: "Ruthless Instruction",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "Ruthless Instruction Buff skill which requires Token dul defensive and applies 2 DodgeDodge to the target. When upgraded can be used in either stance, with Token dul aggressive giving a BuffBuff which lets the target ignore Blind",
      },
    ],
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
    paths: {
      name: ["Wanderer", "Maniac", "Exanimate", "Scourge"],
      skillsArray: [[], [0, 4, 6, 8, 9], [0, 1, 5, 8, 10], [0, 3, 6, 7, 8]],
      cites: [
        '"Default skills. Rewards candles upon reaching the second Inn"',
        '"Sacrifice Blight Blight potency in favor of flexible position, debuff, and disruption."',
        '"Low health grants great potency to Blight Blight and buff alike."',
        '"A role that revels in divesting other of their burdens. Toxic state gains new effects."',
      ],

      description: [
        [
          {
            title: "Candles of Hope +1",
            text: "Extra Candle of Hope on reaching the 2nd Inn.",
          },
        ],
        [
          {
            title: "Punish",
            text: "Normal damage, 10% self-damage, knockback 1, 2 Blight tokens.",
          },
          {
            title: "Acid Rain",
            text: "Normal damage, applies Weak token.",
          },
          {
            title: "Sepsis",
            text: "Ignores Blind, transfers negative tokens, heals 35%.",
          },
          {
            title: "Lash's Gift",
            text: "Steals negative tokens, heals target.",
          },
        ],
        [
          {
            title: "Punish & Acid Rain",
            text: "-1 Blight; if <50% HP, +2 Blight tokens.",
          },
          {
            title: "Sepsis",
            text: "Consumes Blight, deals 75% remaining damage; heals to 45% if <50% HP.",
          },
          {
            title: "Lash's Gift",
            text: "If <20% HP: Heals 10%, removes debuffs, grants Crit & Dodge.",
          },
        ],
        [
          {
            title: "Sepsis",
            text: "50% Blight damage; keeps Blight with Combo.",
          },
          {
            title: "Deathless",
            text: "Heals Damian 35% if <50% HP.",
          },
          {
            title: "Suffer",
            text: "Steals Horror tokens.",
          },
          {
            title: "Lash's Gift",
            text: "Removes debuffs; adds Horror.",
          },
        ],
      ],
    },
    description:
      "The Flagellant is a hero with a unique Meltdown ability called 'Toxic'. He excels in high resistance to Death's Door and can never be resolute. His skills include blight attacks, self-healing at the cost of his own HP, stress and DoT transfer abilities, and team healing and protection capabilities. His three main paths (Maniac, Exanimate, Scourge) modify specific skills to focus on different playstyles and roles within the team.",
    characteristics: {
      Rol: [
        {
          title:
            "HP tank and blight applier, ideal for damaging the backline and supporting the team.",
        },
      ],
      Strengths: [
        {
          title: "Support",
          tooltips: "Frontline support, can heal and debuff enemies",
        },
        {
          title: "Blight",
          tooltips: "dealing blight damage and negative tokens",
        },
        {
          title: "Flexible",
          tooltips: "various playstyles Tanks/support/damage dealer",
        },
      ],
      Weaknesses: [
        {
          title: "Self-Damage",
          tooltips: "many of his skills require self-damage",
        },
        {
          title: "Timing",
          tooltips: "needs to be timed correctly to be effective",
        },
        {
          title: "Death",
          tooltips: "Death can show up at any time, needs to be careful",
        },
      ],
      stats: {
        HP: [50],
        SPD: [3],
        FORW: [2],
        BACK: [1],

        BLEED: [20],
        BLIGHT: [50],
        BURN: [10],
        DISEASE: [75],
        STUN: [30],
        MOVE: [30],
        DEBUFF: [20],
        DEATH: [75, 90],
      },

      uniqueAttributes: {
        tittle: "Toxic",
        description:
          "Flagellant at Stress 10: becomes Toxic with various effects, including HP adjustments and Blight Damage increase.",
      },
      uniqueTokens: [
        {
          id: 8,
          FastDescription: "Applies Blight to attackers when hit.",
          skillPoints: [
            "Apply x2 Blight to attackers when hit per Toxic token",
            "Duration: Until end of combat",
            "Limit: 3",
          ],
        },
        {
          id: 9,
          FastDescription: "A self-healing token unique to the Flagellant.",
          skillPoints: [
            "Consumed at the end of the turn, healing the Flagellant. (10-15% per pain token)",
            "Duration: 1 Turn",
            "Limit: 3",
          ],
        },
      ],
    },
    howToPlay: [
      {
        tittle: "Juggle HP and CDs",
        description:
          "It's crucial to balance both the Flagellant's health threshold and his cooldowns. You need to be aware of when it's safe to lower his health and when to use one of his heals to keep him safe. Also, understanding his cooldowns properly will prevent situations where you need a skill like sepsis and it's not available.",
      },
      {
        tittle: "Skill Swap",
        description:
          "Skill swapping is an important skill with the Flagellant. You can switch his skills at any time, except during a fight or continuous encounters like in lairs. This allows you to adapt to enemies based on their capabilities, ensuring you use the most effective moves in each specific situation.",
      },
    ],

    heroTrinkeds: [
      {
        stats: [
          "If HP < 20%: +25% DMG",
          "Target: Punish Skill: Steal 1 Positive Token",
          "-20% Bleed RES",
        ],
      },
      {
        stats: [
          "Round End: Remove 1 Negative Token, Remove Combo",
          "Target: Endure Skill: Steal 1 Negative Token, Steal Combo",
          "-20% Burn RES",
        ],
      },
      {
        stats: [
          "Apply to Attacker when Hit: +1 Blight Received (3 turns) (33%)",
          "Self: More! MORE! Skill: Strength",
          "+10% Negative Banter",
        ],
      },
      {
        stats: [
          "[1 Target]",
          "15% DMG",
          "+33% Blight RES Piercing (Until Next Inn) (33%)",
          "+1 Blight Duration Dealt (Until Next Inn) (33%)",
          "+1 Blight Dealt (Until Next Inn) (33%)",
        ],
        cite: '"Fear is the mind-killer..."',
      },
    ],

    teemmates: {
      cite: "The Wall of Faith: Unstoppable Mitigation Comp",

      comp: [
        { id: 8, path: [3, "Seraph"] },
        { id: 0, path: [2, "Sharpshot"] },
        { id: 3, path: [1, "Virtuoso"] },
        { id: 5, path: [2, "Bulwark"] },
      ],

      description:
        "This team focuses on strong mitigation without sacrificing much damage. Vestal uses *Consecration of Fortitude* on Jester to generate block or dodge tokens every turn. Barristan uses *Rampart* to stun or reposition, while Dismas uses *Pistol Shot* to stun as well. Jester marks a target with *Razor’s Wit* and can use *Finale* if needed. Vestal uses the tokens to cast *Judgment* with high damage and can apply *Consecration of Light* on Dismas to boost his damage. With *Bolster* and strong heals, the team handles stress and HP effectively. This composition is effective in all acts, especially against bosses vulnerable to stuns.",
    },

    skills: [
      {
        id: 0,
        name: "Punish",
        Type: 0,

        skillsPaths: [
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
          {
            Rank: [3, 4],
            Target: [1, 2, 3],
          },
          {
            Rank: [2, 3, 4],
            Target: [1, 2],
          },
        ],

        description:
          "Punish A very standard damage front-line melee attack. On hit has a chance to apply Blightx3 to the enemy and deals 10% of Flagellants HP to himself. When upgraded gains an extra point of BlightBlight damage, both versions gain extra Blight resistance piercing when the target has Combo",
      },
      {
        id: 1,
        name: "Fester",
        Type: 1,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Corpse: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Corpse: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Corpse: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Corpse: [1, 2, 3, 4] },
        ],
        description:
          "Fester Corpse clear skill which applies BlightBlight to any enemies adjacent to the corpse destroyed",
      },
      {
        id: 2,
        name: "Deathless",
        Type: 3,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [3, 4], Ally: [1, 2, 3, 4], Cooldown: 2, Uses: 3 },
        ],
        description:
          "Deathless One of the best healing skills in the game. Unlike other healing skills has no HP threshold and has a very low cooldown of 1 turn. Deals 20% HP d damage to Flagellant when used regardless of upgrade",
      },
      {
        id: 3,
        name: "Endure",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4] },
        ],
        description:
          "Endure Unique stress skill which transfers 2x stress from the selected hero to Flagellant. When upgraded takes 3x stress. from the hero while only transferring 2x to Flagellant",
      },
      {
        id: 4,
        name: "Lash's Gift",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2, 3], Ally: [1, 2, 3, 4], Cooldown: 2 },
          { Rank: [1, 2, 3, 4], Target: [0] },
          { Rank: [3, 4], Target: [0], Cooldown: 1 },
        ],
        description:
          "Lash's Gift A combination self-heal and ally buff. Requires Flagellant under 50% HP to use and heals 25% (35% when upgraded). Applies one Strength, Block and stress to the chosen hero, and when upgraded removes Daze and Stun on the chosen hero as well as applying a Block token to the target",
      },
      {
        id: 5,
        name: "Acid Rain",
        Type: 1,
        skillsPaths: [
          { Rank: [3, 4], Target: [3, 4] },
          { Rank: [1, 2, 3], Target: [3, 4] },
          { Rank: [3, 4], Target: [3, 4] },
          { Rank: [3, 4], Target: [3, 4] },
        ],
        description:
          "Acid Rain Low damage back-rank cleave which applies low BlightBlight to the back rank enemies. Very valuable for dealing damage to high-priority back rank enemies",
      },
      {
        id: 6,
        name: "More! MORE!",
        Type: 2,
        skillsPaths: [
          { Rank: [3, 4], Target: [0] },
          { Rank: [3, 4], Target: [0] },
          { Rank: [3, 4], Target: [0] },
          { Rank: [3, 4], Target: [0] },
        ],
        description:
          "More! MORE! Flagellant's most potent tanking ability. Upon use applies 2xTaunt to Flagellant and gives a unique buff. When Flagellant takes damage he receives 1xPain token (maximum of 3) and at the end of his next turn will heal for 10%Hp per Pain. This applies to direct damage, Damage Over Time and Flagellants own self damage, and can allow Flagellant to redirect hits to himself and heal off a substantial amount of damage while keeping other squishier teammates safe from harms way. When upgraded he gains Pain+ tokens when hit which heal for 15% HP per token",
      },
      {
        id: 7,
        name: "Suffer",
        Type: 2,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "Suffer A support skill which upon use transfers the targets Damage Over Time to Flagellant while applying a 10% Deathblow RES buff to himself. When upgraded Flagellant will cure all DoTs on himself at the end of his next turn",
      },
      {
        id: 8,
        name: "Sepsis",
        Type: 0,
        skillsPaths: [
          { Rank: [3, 4], Target: [1, 2], Cooldown: 2, Uses: 3 },
          { Rank: [1, 2, 3, 4], Target: [1, 2], Cooldown: 3, Uses: 3 },
          { Rank: [3, 4], Target: [1, 2, 3], Cooldown: 2, Uses: 3 },
          { Rank: [3, 4], Target: [1, 2, 3], Cooldown: 2 },
        ],
        description:
          "Sepsis A potent blight and healing skill which requires Flagellant to be under 50% Icon HP dd2.pngHP to use. Upon use applies a heavy Blight to the enemy while healing Flagellant for 35% of his max HP. When mastered applies 2 more Blight and heals Flagellant for 50% of his max HP, which can bring him back from the brink of death and beyond. Has a maximum of 3 uses per battle, use with care",
      },
      {
        id: 9,
        name: "Undying",
        Type: 3,
        skillsPaths: [
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [1, 2, 3, 4], Ally: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "Undying A healing skill which applies 3 Regeneration to the chosen hero for 3 turns while dealing 10% of Flagellants HP Has a 1 turn cooldown, and when upgraded increases RegenerationRegen to 5 points per turn",
      },
      {
        id: 10,
        name: "Necrosis",
        Type: 0,
        skillsPaths: [
          { Rank: [2, 3], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [2, 3], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [2, 3], Target: [1, 2, 3, 4], Cooldown: 1 },
          { Rank: [2, 3], Target: [1, 2, 3, 4], Cooldown: 1 },
        ],
        description:
          "Necrosis A party-wide cleave which targets every enemy with Blight, and on contact heals Flagellant for 5% HP per enemy with Blight for a maximum of 20% healed.",
      },
    ],
  },
};

export default heroesData;
