import { getRandomNumber } from '../utils.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getFullExercise = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question);

  return [question, correctAnswer];
};

const BrainEven = {
  RULES,
  getFullExercise,
};

export default BrainEven;
