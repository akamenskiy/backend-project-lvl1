import { getRandomNumber } from '../utils.js';

const RULES = 'Find the greatest common divisor of given numbers.';

const getFullExercise = () => {
  const a = getRandomNumber(100, 2);
  const b = getRandomNumber(100, 2);

  const question = `${a} ${b}`;
  const findGCD = (num1, num2) => {
    if (num1 % num2 === 0) {
      return num2;
    }
    return findGCD(num2, num1 % num2);
  };

  const correctAnswer = `${a > b ? findGCD(a, b) : findGCD(b, a)}`;

  return [question, correctAnswer];
};

const BrainGCD = {
  RULES,
  getFullExercise,
};

export default BrainGCD;
