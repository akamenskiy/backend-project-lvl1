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

const getQuestion = () => {
  const operator = getRandomOperator();
  const a = getRandomNumber(100);
  const b = getRandomNumber(100);
  return `${a} ${operator.sign} ${b}`;
};

const getCorrectAnswer = (question) => {
  const elements = question.split(' ');
  const operatorsObject = Object.fromEntries(
    operators.map((operator) => [operator.sign, operator.method]),
  );
  const result = operatorsObject[elements[1]](parseInt(elements[0], 10), parseInt(elements[2], 10));

  return `${result}`;
};
const getErrorMessage = (name, answer, correctAnswer) => `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${name}!`;

const BrainCalc = {
  RULES,
  getQuestion,
  getCorrectAnswer,
  getErrorMessage,
};

export default BrainCalc;
