const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = Math.floor(Math.random() * 20) + 1;
let guessesLeft = 5;

console.log("Number Guessing Game");
console.log("I picked a number from 1 to 20.");
console.log("You have 5 guesses. Good luck!\n");

function askQuestion() {
  if (guessesLeft === 0) {
    console.log(`Game over! The number was ${secretNumber}.`);
    rl.close();
    return;
  }

  rl.question(`Guess a number (${guessesLeft} left): `, (answer) => {
    const guess = Number(answer);

    if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
      console.log("Please enter a whole number from 1 to 20.\n");
      askQuestion();
      return;
    }

    guessesLeft--;

    if (guess === secretNumber) {
      console.log("You got it! Nice job.");
      rl.close();
      return;
    }

    if (guess < secretNumber) {
      console.log("Too low.\n");
    } else {
      console.log("Too high.\n");
    }

    askQuestion();
  });
}

askQuestion();