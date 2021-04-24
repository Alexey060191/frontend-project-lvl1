import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');
  let count = 0;
  do {
    const num1 = Math.floor(Math.random() * (100 - 0)) + 0;
    const num2 = Math.floor(Math.random() * (100 - 0)) + 0;
    const arr = ['+', '-', '*'];
    const randomForArr = Math.floor(Math.random() * (3 - 0)) + 0;
    let result = 0;
    switch (arr[randomForArr]) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      default:
        result = num1 * num2;
        break;
    }

    console.log(`Question: ${num1} ${arr[randomForArr]} ${num2}`);
    const userEnter = readlineSync.question('Your answer: ');

    if (+userEnter === result) {
      count += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${userEnter}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    }
  } while (count !== 3);
  return console.log(`Congratulations, ${name}!`);
};
