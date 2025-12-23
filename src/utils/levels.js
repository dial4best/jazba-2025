export const LEVELS = [
  { level: 1, premium: 100000 },
  { level: 2, premium: 300000 },
  { level: 3, premium: 500000 },
  { level: 4, premium: 800000 },
  { level: 5, premium: 1150000 },
  { level: 6, premium: 1800000 },
  { level: 7, premium: 2300000 },
  { level: 8, premium: 3200000 },
  { level: 9, premium: 4400000 },
  { level: 10, premium: 6400000 },
  { level: 11, premium: 8500000 },
  { level: 12, premium: 8800000 },
  { level: 13, premium: 17000000 },
  { level: 14, premium: 18000000 },
  { level: 15, premium: 36000000 },
];

export function getCurrentLevel(currentPremium) {
  let level = 0;

  for (let i = 0; i < LEVELS.length; i++) {
    if (currentPremium >= LEVELS[i].premium) {
      level = LEVELS[i].level;
    }
  }

  return level;
}
