import readlineSync from 'readline-sync';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const askName = () => readlineSync.question('May I have your name? ');
const getErrorMessage = (name, answer, correctAnswer) => `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${name}!`;
const getCongratsMessage = (name) => `Congratulations, ${name}!`;
const getRandomNumber = () => Math.floor(Math.random() * 100);
const getAnswer = () => readlineSync.question('Your answer: ');
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const init = () => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}`);
  console.log(RULES);
  let counter = 0;

  do {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = getAnswer(number);
    const correctAnswer = isEven(number);
    if (correctAnswer !== answer) {
      console.log(getErrorMessage(name, answer, correctAnswer));
      return;
    }
    console.log('Correct');
    counter += 1;
  } while (counter < 3);

  console.log(getCongratsMessage(name));
};

export default init;
