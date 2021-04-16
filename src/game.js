import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  do {
    const randomNumber = Math.floor(Math.random() * (100 - 0)) + 0;
    // let userEnter = readlineSync.question(`Question: ${randomNumber}\n`);
    console.log(`Question: ${randomNumber}`);
    const userEnter = readlineSync.question('Your answer: ');
    if (userEnter !== 'yes' && userEnter !== 'no') {
      const str = "Let's try again";
      return console.log(str);
    }
    if ((randomNumber % 2 === 0 && userEnter === 'yes') || (randomNumber % 2 !== 0 && userEnter === 'no')) {
      count += 1;
      console.log('Correct!');
    } else {
      let opositeAnswer = '';
      if (userEnter === 'yes') opositeAnswer = 'no';
      else opositeAnswer = 'yes';
      return console.log(`'${userEnter}' is wrong answer ;(. Correct answer was '${opositeAnswer}'.\nLet's try again, ${name}!`);
    }
  } while (count !== 3);
  return console.log(`Congratulations, ${name}!`);
};

// checkEven();
