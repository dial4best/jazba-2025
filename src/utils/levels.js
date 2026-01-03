export const LEVELS = [
  { level: 1, target: 100000, reward: null },
  { level: 2, target: 300000, reward: null },
  { level: 3, target: 500000, reward: null },
  { level: 4, target: 800000, reward: null },

  { level: 5, target: 1150000, reward: "Thailand" },
  { level: 6, target: 1800000, reward: "Thailand + 35K Voucher" },
  { level: 7, target: 2300000, reward: "2 Ticket Thailand" },

  { level: 8, target: 3200000, reward: "Taiwan" },
  { level: 9, target: 4400000, reward: "Taiwan with Rising Circle" },
  { level: 10, target: 6400000, reward: "2 Ticket Taiwan" },

  { level: 11, target: 8500000, reward: "Munich" },
  { level: 12, target: 8800000, reward: "2 Ticket Taiwan with Rising Circle" },
  { level: 13, target: 17000000, reward: "2 Ticket Munich" },
  { level: 14, target: 18000000, reward: "1 Ticket Munich with Prime Circle" },
  { level: 15, target: 36000000, reward: "2 Ticket Munich with Prime Circle" },
];


export function getCurrentLevel(currentPremium) {
  let level = 0;

  for (let i = 0; i < LEVELS.length; i++) {
    if (currentPremium >= LEVELS[i].target) {
      level = LEVELS[i].level;
    }
  }

  return level;
}

