'use strict';
console.log("it's connected")
let addButton = document.getElementById('addButton');
addButton.addEventListener('click', function(){
  console.log('clicked the add button');
  //read the value from the input box
  let inputElement = document.getElementById('answer');
  let answer = inputElement.value;
  inputElement.value = '';
  console.log(answer)
  let splitAnswer = answer.split("")
  console.log(splitAnswer)
  // console.log(["d","o","g"])
});
let guessButton = document.getElementById('guessButton');
guessButton.addEventListener('click', function(){
  console.log('clicked the guess button');
  //read the value from the input box
  let inputElement = document.getElementById('guess');
  let guess = inputElement.value;       
  inputElement.value = '';
  let trimmedGuess = guess.trim().toUpperCase()
  console.log(trimmedGuess)
  //create a span element
  let li = document.createElement('li');
  let span = document.createElement('span');
  //put the text inside the span element
  span.innerText = "Guess is  " + trimmedGuess;
  let ul = document.querySelector('ul');
  ul.appendChild(li);

  //add the span and the delete button as children of newly create li
  li.appendChild(span);


});


//read the value from the input box
  // let inputElement = document.getElementById('inputText');
  // let todoText = inputElement.value;
  // inputElement.value = '';

let solution = splitAnswer;

let guessArry = [];

function initializeBoard(){
  for(let i = 0; i < solution.length; i++)
  guessArry.push("__")
  console.log(guessArry)
  return guessArry
}

let correctGuesses = 0;
let incorrectGuess = 0;
function playGuess(guess){
  

for(let i = 0; i<solution.length; i++){
  
  if(solution[i]==guess){
    console.log("That one is in these")
    guessArry.splice(i, 1, guess)
    correctGuesses++;
    incorrectGuess
    
  } else{
    incorrectGuess++;
  }
  // console.log(correctGuesses)
  }
  if(correctGuesses == solution.length){
    console.log("You win!")
} if (incorrectGuess == 10){
   console.log("You wasted too many guesses, you lose")
}
console.log(guessArry)
}
initializeBoard();
playGuess("O");
playGuess("D");
playGuess("G");

function getPrompt() {

}

//create answer

//create guess array

//take guess

//compare guess to each letter of answer

//if guess is a part of answer, push guess to guess array.

//if not instruct user to guess again

//check for win-if each value in the guess array equals each value in the answer array, return you win 
// (could probably cheat and just check for array length)

//Optional, create an iterator and add to it for each guess taken. If it reaches 10, end game

//Start with HTML, we need a form for the answer word, a form for the guess, and then can add elements to display 
// messages

