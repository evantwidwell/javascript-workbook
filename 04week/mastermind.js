'use strict';
var colors = require('colors/safe');
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
  // console.log(solution);
  return solution
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here

  let solutionArray = solution.split("")
  let guessArray = guess.split("")
  let correctLetterLocations = 0
  let correctLetters = 0
  let hint = 0
  // console.log(solution.length)

  for (let i = 0; i < solution.length; i++){
      if (guessArray[i] == solutionArray[i]){
      correctLetterLocations ++;
      solutionArray[i] = null;
      // console.log(solutionArray)
      }
    }
    for (let x = 0; x<= solution.length; x++){
      if (solutionArray.indexOf(guessArray[x]) > -1){
        correctLetters++
        solutionArray[x] = null;
        
      }
  }
    // console.log("The secret solution is " + solution)
    // console.log(correctLetterLocations.toString())
    // console.log
    hint = (guess + " : " + correctLetterLocations + " - " + correctLetters)
    
    board.push(hint);
    
    // console.log(board)

  
}

function mastermind(guess) {
  // solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  generateHint(guess);
  
  if(guess === solution){
    console.log("You got it!")
  } else if (board.length === 10){ 

   console.log("You took to many guesses, the answer was " + solution)
    
  } else{
    console.log("Guess again")
  }
  
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
