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
      "highly versatile hero that heavily focuses on dealing damage thanks to his ability to target the front Ranks as well as the back Ranks. His skillset places emphasis on damage and utility such as self-Buffs, Execution 1 finishers, and a unique skill to destroy or steal powerful Tokens from enemies.",
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
      "She stands out for her versatility in positioning among the heroes. Her self-sustain ability, Dodge, and Stealth make her resilient to enemy disruptions. Her damage relies primarily on CRIT chance, which requires careful planning, but can be very effective under the right circumstances.",
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
  },

  10: {
    name: "Bounty-Hunter",
    rolePlay: [],
    cite: ["The thrill of the hunt, the promise of payment!"],
    paths: ["Professional"],
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
  },
};

export default heroesData;
