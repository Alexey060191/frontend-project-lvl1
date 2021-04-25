import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What number is missing in the progression?');
  let count = 0;
  do {
    const firstNumber = Math.floor(Math.random() * (100 - 0)) + 0;
    const d = Math.floor(Math.random() * (10 - 1)) + 1;
    const arrLength = Math.floor(Math.random() * (10 - 5)) + 5;
    const arrProgression = [firstNumber];
    for (let i = 0; i < arrLength; i += 1) {
      arrProgression.push(arrProgression[i] + d);
    }
    const randomNumber = Math.floor(Math.random() * ((arrLength + 1) - 0)) + 0;
    const result = arrProgression[randomNumber];
    arrProgression[randomNumber] = '..';

    console.log(`Question: ${arrProgression.join(' ')}`);
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
