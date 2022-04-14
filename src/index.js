import readlineSync from 'readline-sync';
import { gameType } from './constants.js';
import BrainEven from './games/even.js';

const askName = () => readlineSync.question('May I have your name? ');
const getCongratsMessage = (name) => `Congratulations, ${name}!`;
const getAnswer = () => readlineSync.question('Your answer: ');

let counter = 0;
const runRounds = (name, game) => {
  console.log(game.RULES);
  do {
    const question = game.getQuestion();
    console.log(`Question: ${question}`);
    const answer = getAnswer();
    const correctAnswer = game.getCorrectAnswer(question);
    if (correctAnswer !== answer) {
      console.log(game.getErrorMessage(name, answer, correctAnswer));
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
  }
};

export default playGame;
