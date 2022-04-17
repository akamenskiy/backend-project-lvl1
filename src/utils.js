export const gameType = {
  BRAIN_EVEN: 'BrainEven',
  BRAIN_CALC: 'BrainCalc',
  BRAIN_GCD: 'BrainGCD',
  BRAIN_PROGRESSION: 'BrainProgression',
  BRAIN_PRIME: 'BrainPrime',
};

export const getRandomNumber = (max = 100, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);
