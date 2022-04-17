import { getRandomNumber } from '../../utils.js';

const RULES = 'What number is missing in the progression?';

const getProgression = (start, length, step, index) => {
  const progression = [];
  let correctAnswer;
  let currentNumber = start;
  for (let i = 0; i < length; i += 1) {
    if (i === index) {
      correctAnswer = `${currentNumber}`;
      progression.push('..');
    } else {
      progression.push(currentNumber);
    }
    currentNumber += step;
  }
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const getFullExercise = () => {
  const start = getRandomNumber(20);
  const length = getRandomNumber(11, 5);
  const step = getRandomNumber(100, 1);
  const index = getRandomNumber(length - 1, 0);

  return getProgression(start, length, step, index);
};

const BrainProgression = {
  RULES,
  getFullExercise,
};

export default BrainProgression;
