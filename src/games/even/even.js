import { getRandomNumber } from '../../utils.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getFullExercise = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const BrainEven = {
  RULES,
  getFullExercise,
};

export default BrainEven;
