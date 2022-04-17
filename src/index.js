import readlineSync from 'readline-sync';
import { gameType } from './utils.js';
import greetings from './cli.js';
import {
  BrainEven,
  BrainCalc,
  BrainGCD,
  BrainProgression,
  BrainPrime,
} from './games/index.js';

const askName = () => readlineSync.question('May I have your name? ');
const getCongratsMessage = (name) => `Congratulations, ${name}!`;
const getErrorMessage = (name, answer, correctAnswer) => `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${name}!`;
const getAnswer = () => readlineSync.question('Your answer: ');

let counter = 0;
const runRounds = (name, game) => {
  console.log(game.RULES);
  do {
    const [question, correctAnswer] = game.getFullExercise();
    console.log(`Question: ${question}`);
    const answer = getAnswer();
    if (correctAnswer !== answer) {
      console.log(getErrorMessage(name, answer, correctAnswer));
      return;
    }
    console.log('Correct');
    counter += 1;
    if (counter === 3) {
      console.log(getCongratsMessage(name));
    }
  } while (counter < 3);
};

const playGame = (type) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}`);
  switch (type) {
    case gameType.BRAIN_EVEN:
      runRounds(name, BrainEven);
      break;
    case gameType.BRAIN_CALC:
      runRounds(name, BrainCalc);
      break;
    case gameType.BRAIN_GCD:
      runRounds(name, BrainGCD);
      break;
    case gameType.BRAIN_PROGRESSION:
      runRounds(name, BrainProgression);
      break;
    case gameType.BRAIN_PRIME:
      runRounds(name, BrainPrime);
      break;
    default:
      greetings();
  }
};

export default playGame;
