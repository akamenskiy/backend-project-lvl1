import { getRandomNumber } from '../../utils.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, k = Math.sqrt(num); i <= k; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getFullExercise = () => {
  const question = getRandomNumber(3572);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const BrainPrime = {
  RULES,
  getFullExercise,
};

export default BrainPrime;
