import { getRandomNumber } from '../utils.js';

const RULES = 'What is the result of the expression?';
const operators = [
  { sign: '+', method: (a, b) => a + b },
  { sign: '-', method: (a, b) => a - b },
  { sign: '*', method: (a, b) => a * b },
];

const getRandomOperator = () => {
  const index = getRandomNumber(3);

  return operators[index];
};

const getFullExercise = () => {
  const operator = getRandomOperator();
  const a = getRandomNumber(100);
  const b = getRandomNumber(100);
  const question = `${a} ${operator.sign} ${b}`;
  const correctAnswer = `${operator.method(a, b)}`;

  return [question, correctAnswer];
};

const getErrorMessage = (name, answer, correctAnswer) => `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${name}!`;

const BrainCalc = {
  RULES,
  getFullExercise,
  getErrorMessage,
};

export default BrainCalc;
