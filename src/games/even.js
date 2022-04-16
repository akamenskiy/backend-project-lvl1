const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const getErrorMessage = (name, answer, correctAnswer) => `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${name}!`;

const getFullExercise = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question);

  return [question, correctAnswer];
};

const BrainEven = {
  RULES,
  getFullExercise,
  getErrorMessage,
};

export default BrainEven;
