const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const getErrorMessage = (name, answer, correctAnswer) => `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${name}!`;

const BrainEven = {
  RULES,
  getQuestion: getRandomNumber,
  getCorrectAnswer: isEven,
  getErrorMessage,
};

export default BrainEven;
