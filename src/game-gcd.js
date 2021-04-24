import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;

  do {
    let num1 = Math.floor(Math.random() * (100 - 0)) + 0;
    let num2 = Math.floor(Math.random() * (100 - 0)) + 0;
    let result = 0;
    console.log(`Question: ${num1} ${num2}`);
    const userEnter = readlineSync.question('Your answer: ');
    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
        num1 %= num2;
      } else {
        num2 %= num1;
      }
    }
    result = num1 + num2;
    if (+userEnter === result) {
      count += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${userEnter}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    }
  } while (count !== 3);
  return console.log(`Congratulations, ${name}!`);
};
