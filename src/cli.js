import readlineSync from 'readline-sync';

// export const name = readlineSync.question('May I have your name? ');

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
