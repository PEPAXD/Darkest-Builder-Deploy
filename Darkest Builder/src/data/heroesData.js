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
          },          {
            Rank: [1, 2],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },          {
            Rank: [1, 2],
            Ally: [1, 2, 3, 4],
            Cooldown: 1,
          },
        ],

        description: "This stress heal is effective and removes horror but isn't always available to Sarmenti in all ranks. It provides more healing than Bolster+ if Barristan is stressed but can struggle with widespread stress.",

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

        description: "This cleave move offers high value with more direct damage and useful DoT compared to Plague Grenade. It can set up stuns and handle multiple tokens. It’s effective in fights like beast dens but less so against cultists where backline cleaves excel. It’s versatile but not the strongest option for all situations.",
      },
      {
        id: 6,
        name: "Finale",
        Type: 0,

        skillsPaths: [
          {
            Rank: [3, 4],
            Target: [1,2, 3,4],
            Cooldown: 2,
          },
          {
            Rank: [3, 4],
            Target: [1,2, 3,4],
            Cooldown: 2,
          },
          {
            Rank: [3, 4],
            Target: [1,2, 3,4],
            Cooldown: 2,
          },
          {
            Rank: [3, 4],
            Target: [1,2, 3,4],
            Cooldown: 2,
          },

        ],

        description: "Finale delivers the best combo token payoff, adding 6-10 extra damage. It pairs well with Smokescreen but has drawbacks like daze and vuln. Despite this, it remains highly effective, dealing 20-26 damage in Jester comps.",
      },
      {
        id: 7,
        name: "Solo",

        Type: 1,

        
        skillsPaths: [
          {
            Rank: [1, 2],
            Target: [1,2, 3,4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [1,2, 3,4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [1,2, 3,4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [1,2, 3,4],
            Cooldown: 1,
          },

        ],
        description: "Solo moves Jester to the front, applying combo and removing a dodge token. It boosts mitigation and sets up for Finale or Fade to Black next turn. However, it limits Jester’s options initially, restricting him to Finale or Fade. Be sure you want to use one of these moves, or be prepared to shuffle Jester back with a friendly skill.",
      },
      {
        id: 8,
        name: "Play Out",
        Type: 2,

        skillsPaths: [
          {
            Rank: [1, 2,3],
            Ally: [2, 3,4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2,3],
            Ally: [2, 3,4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2,3],
            Ally: [2, 3,4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2,3],
            Ally: [2, 3,4],
            Cooldown: 1,
          },
        ],

        description: "This move mirrors Battle Ballad, offering reactive mitigation and positioning. It effectively counters threats like Exemplar’s Prelude by pushing back and removing combo. While it provides block+ and can handle pulls, it has lower tempo. Both moves can be used flexibly in intermezzo setups and may boost relationships.",
      },
      {
        id: 9,
        name: "Encore",

        Type: 2,

        skillsPaths: [
          {
            Rank: [1, 2],
            Ally: [1,2, 3,4],
            Cooldown: 3,
          },
          {
            Rank: [1, 2],
            Ally: [1,2, 3,4],
            Cooldown: 3,
          },
          {
            Rank: [1, 2],
            Ally: [1,2, 3,4],
            Cooldown: 3,
          },
          {
            Rank: [1, 2],
            Ally: [1,2, 3,4],
            Cooldown: 3,
          },
        ],
        description: "Encore is the strongest move, letting Jester perform any other move at the cost of his turn. It can heal, deal damage, guard, or use items but gives him a weak and daze token (or just daze when upgraded). The upgrade reduces cooldown. Essential for Jester if he's in the back, but use it strategically for best results.",


      },
      {
        id: 10,
        name: "Echoing March",

        Type: 1,

        skillsPaths: [
          {
            Rank: [1, 2],
            Target: [2, 3,4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [2, 3,4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [2, 3,4],
            Cooldown: 1,
          },
          {
            Rank: [1, 2],
            Target: [2, 3,4],
            Cooldown: 1,
          },

        ],

        description: "Echoing March can move a target up to 4 times, disabling enemies like Cherubs or Heralds. It has a base pull of 1 and applies bleed if upgraded. It’s powerful for shutting down enemies but less versatile than other pulls.",
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
    text: "+33% Damage Chop"
  },
  { 
    title: "Buff Resistance", 
    text: "+33% Debuff RES"
  },
  { 
    title: "Immunity to Disease", 
    text: "+100% Disease RES"
  },
  { 
    title: "Debuff MaxHP", 
    text: "-25% Max HP"
  },
  { 
    title: "Slower Speed", 
    text: "-3 Speed"
  }
],
[
  { 
    title: "Enhanced Healing Skills", 
    text: "+50% Healing Given"
  },
  { 
    title: "Stun Resistance", 
    text: "+50% Stun RES"
  },
  { 
    title: "Move Resistance", 
    text: "+50% Move RES"
  },
  { 
    title: "Damage Reduction", 
    text: "-25% DMG"
  }
],

[
  { 
    title: "Reduced MaxHP", 
    text: "-30% Max HP"
  },
  { 
    title: "Chop Skills Penalty", 
    text: "-75% DMG"
  },
  { 
    title: "Target Vulnerability", 
    text: "Purge & Intimidate Skills: Vulnerable"
  },
  { 
    title: "Combat Start Boost", 
    text: "Cosmic: +50% Max HP and +2 Speed"
  },
  { 
    title: "Chop Skills Enhancement", 
    text: "+100% DMG"
  }
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
    skills: [
      {
        id: 0,
        name: "Chop",
        Type: 0,

        skillsPaths: [
          {
            Rank: [1, 2],
            Target: [1, 2],
          },
          {
            Rank: [1, 2],
            Target: [1, 2],
          },
          {
            Rank: [1, 2],
            Target: [1, 2],
          },
          {
            Rank: [1, 2],
            Target: [1, 2],
          },
        ],

        description: "a",
      },
      {
        id: 1,
        name: "Purge",
      },
      {
        id: 2,
        name: "Withstand",
      },
      {
        id: 3,
        name: "Solemnity",
      },
      {
        id: 4,
        name: "Reflection",
      },
      {
        id: 5,
        name: "Hew",
      },
      {
        id: 6,
        name: "Revenge",
      },
      {
        id: 7,
        name: "Intimidate",
      },
      {
        id: 8,
        name: "Ruin",
      },
      {
        id: 9,
        name: "Break",
      },
      {
        id: 10,
        name: "Bash",
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
    skills: [
      {
        id: 0,
        name: "Crush",
        Type: 0,

        skillsPaths: [
          {
            Rank: [0],
            Target: [1, 2],
          },
          {},
          { Rank: [1], Target: [1, 2] },
          {},
        ],
      },
      {
        id: 1,
        name: "Rampart",
      },
      {
        id: 2,
        name: "Defender",
      },
      {
        id: 3,
        name: "Bolster",
      },
      {
        id: 4,
        name: "Hold the Line",
      },
      {
        id: 5,
        name: "Bellow",
      },
      {
        id: 6,
        name: "Retribution",
      },
      {
        id: 7,
        name: "Command",
      },
      {
        id: 8,
        name: "Stand Fast",
      },
      {
        id: 9,
        name: "Courageous Abandon",
      },
      {
        id: 10,
        name: "Strategic Withdrawal",
      },
    ],
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
    skills: [
      {
        id: 0,
        name: "Sacrificial Stab",
        Type: 0,

        skillsPaths: [
          {
            Rank: [0],
            Target: [1, 2],
          },
          {},
          { Rank: [1], Target: [1, 2] },
          {},
        ],
      },
      {
        id: 1,
        name: "Abyssal Artillery",
      },
      {
        id: 2,
        name: "Weakening Curse",
      },
      {
        id: 3,
        name: "Wyrd Reconstruction",
      },
      {
        id: 4,
        name: "Daemon's Pull",
      },
      {
        id: 5,
        name: "Vulnerability Hex",
      },
      {
        id: 6,
        name: "Binding Shadows",
      },
      {
        id: 7,
        name: "Malediction",
      },
      {
        id: 8,
        name: "Anamnesis",
      },
      {
        id: 9,
        name: "The Burning Stars",
      },
      {
        id: 10,
        name: "Chaotic Offering",
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
    skills: [
      {
        id: 0,
        name: "Noxious Blast",
        Type: 0,

        skillsPaths: [
          {
            Rank: [0],
            Target: [1, 2],
          },
          {},
          { Rank: [1], Target: [1, 2] },
          {},
        ],
      },
      {
        id: 1,
        name: "Blinding Gas",
      },
      {
        id: 2,
        name: "Incision",
      },
      {
        id: 3,
        name: "Battlefield Medicine",
      },
      {
        id: 4,
        name: "Ounce of Prevention",
      },
      {
        id: 5,
        name: "Plague Grenade",
      },
      {
        id: 6,
        name: "Emboldening Vapours",
      },
      {
        id: 7,
        name: "Disorienting Blast",
      },
      {
        id: 8,
        name: "Indiscriminate Science",
      },
      {
        id: 9,
        name: "Cause of Death",
      },
      {
        id: 10,
        name: "Magnesium Rain",
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
    skills: [
      {
        id: 0,
        name: "Hand of Light",
        Type: 0,

        skillsPaths: [
          {
            Rank: [0],
            Target: [1, 2],
          },
          {},
          { Rank: [1], Target: [1, 2] },
          {},
        ],
      },
      {
        id: 1,
        name: "Illumination",
      },
      {
        id: 2,
        name: "Judgement",
      },
      {
        id: 3,
        name: "Divine Grace",
      },
      {
        id: 4,
        name: "Consecration of Fortitude",
      },
      {
        id: 5,
        name: "Ministrations",
      },
      {
        id: 6,
        name: "Mace Bash",
      },
      {
        id: 7,
        name: "Sanctuary",
      },
      {
        id: 8,
        name: "Consecration of Light",
      },
      {
        id: 9,
        name: "Divine Comfort",
      },
      {
        id: 10,
        name: "Mantra",
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
    skills: [
      {
        id: 0,
        name: "Searing Strike",
        Type: 0,

        skillsPaths: [
          {
            Rank: [0],
            Target: [1, 2],
          },
          {},
          { Rank: [1], Target: [1, 2] },
          {},
        ],
      },
      {
        id: 1,
        name: "Firefly",
      },
      {
        id: 2,
        name: "Smokescreen",
      },
      {
        id: 3,
        name: "Run and Hide",
      },
      {
        id: 4,
        name: "Hearthlight",
      },
      {
        id: 5,
        name: "Ransack",
      },
      {
        id: 6,
        name: "Cauterize",
      },
      {
        id: 7,
        name: "Controlled Burn",
      },
      {
        id: 8,
        name: "Dragonfly",
      },
      {
        id: 9,
        name: "Firestarter",
      },
      {
        id: 10,
        name: "Double Cross",
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
      cites: ['"Default skills. Rewards candles upon reaching the second Inn"'],

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
    skills: [
      {
        id: 0,
        name: "Collect Bounty",
        Type: 0,

        skillsPaths: [
          {
            Rank: [0],
            Target: [0],
          },
          {},
          {},
          {},
        ],
      },
      {
        id: 1,
        name: "Mark for Death",
      },
      {
        id: 2,
        name: "Come Hither",
      },
      {
        id: 3,
        name: "Caltrops",
      },
      {
        id: 4,
        name: "Flashbang",
      },
      {
        id: 5,
        name: "Staredown",
      },
      {
        id: 6,
        name: "Hurlbat",
      },
      {
        id: 7,
        name: "No Escape",
      },
      {
        id: 8,
        name: "Finish Him",
      },
      {
        id: 9,
        name: "Uppercut",
      },
      {
        id: 10,
        name: "Bodyguard",
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
    skills: [
      {
        id: 0,
        name: "Smite",
        Type: 0,

        skillsPaths: [
          {
            Rank: [0],
            Target: [1, 2],
          },
          {},
          { Rank: [1], Target: [1, 2] },
          {},
        ],
      },
      {
        id: 1,
        name: "Stunning Blow",
      },
      {
        id: 2,
        name: "Zealous Accusation",
      },
      {
        id: 3,
        name: "Inspiring Cry",
      },
      {
        id: 4,
        name: "Rallying Cry",
      },
      {
        id: 5,
        name: "Reap",
      },
      {
        id: 6,
        name: "Battle Heal",
      },
      {
        id: 7,
        name: "Bulwark of Faith",
      },
      {
        id: 8,
        name: "Holy Lance",
      },
      {
        id: 9,
        name: "Radiance",
      },
      {
        id: 10,
        name: "Tenacity",
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
    skills: [
      {
        id: 0,
        name: "Touché",
        Type: 0,

        skillsPaths: [
          {
            Rank: [0],
            Target: [1, 2],
          },
          {},
          { Rank: [1], Target: [1, 2] },
          {},
        ],
      },
      {
        id: 1,
        name: "Feint",
      },
      {
        id: 2,
        name: "Disengage",
      },
      {
        id: 3,
        name: "Flick",
      },
      {
        id: 4,
        name: "Preparation",
      },
      {
        id: 5,
        name: "The Boot",
      },
      {
        id: 6,
        name: "Again!",
      },
      {
        id: 7,
        name: "Flèche",
      },
      {
        id: 8,
        name: "Meditation",
      },
      {
        id: 9,
        name: "Coup de Grâce",
      },
      {
        id: 10,
        name: "Ruthless Instruction",
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
    skills: [
      {
        id: 0,
        name: "Punish",
        Type: 0,

        skillsPaths: [
          {
            Rank: [0],
            Target: [1, 2],
          },
          {},
          { Rank: [1], Target: [1, 2] },
          {},
        ],
      },
      {
        id: 1,
        name: "Fester",
      },
      {
        id: 2,
        name: "Deathless",
      },
      {
        id: 3,
        name: "Endure",
      },
      {
        id: 4,
        name: "Lash's Gift",
      },
      {
        id: 5,
        name: "Acid Rain",
      },
      {
        id: 6,
        name: "More! MORE!",
      },
      {
        id: 7,
        name: "Suffer",
      },
      {
        id: 8,
        name: "Sepsis",
      },
      {
        id: 9,
        name: "Undying",
      },
      {
        id: 10,
        name: "Necrosis",
      },
    ],
  },
};

export default heroesData;
