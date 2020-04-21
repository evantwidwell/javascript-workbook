'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let count = 0;
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(first, second) {
  
  let move = stacks[first].pop()
  // console.log(move + "1")
  count++
  // console.log(stacks);
  stacks[second].push(move)
  console.log("You've made " + count + " moves so far")
  checkForWin()
  // getPrompt();
  
//   endStack.push(move);
//   console.log(endStack);
}

function isLegal(first, second) {
  let original = stacks[first][stacks[first].length - 1 ]
  let moveTo = stacks[second][stacks[second].length - 1 ]
  
  
  // console.log(stacks[first][stacks[first].length - 1 ])
  // console.log(original)
  // console.log(moveTo)
  
  if (moveTo == undefined){
    movePiece(first, second)
    // console.log(moveTo + " is undefined")
    // getPrompt();
  } else if (original < moveTo){
    movePiece(first, second)
    // console.log(original + " is smaller than " + moveTo)
  } else {
    console.log("This is not a legal move")
    getPrompt()
  }
}

function checkForWin() {
  // Your code here
  let bWin = stacks.b.length
  let cWin = stacks.c.length
  // console.log(bWin)
  // console.log(cWin)
  // console.log(stacks.c.toString())
  if((cWin == 4) || (bWin == 4)) {
    console.log("Congrats!! You win!!")
    
  //   // console.log(stacks.c)
  //   // console.log(stacks.a)
  // } if (bWin == 4){
  //   console.log('Congrats!!, You win!!')
  // //   // console.log(stacks)
  } else {
    // console.log(stacks.c.length)
  console.log("Not there yet!")
  
  // console.log(stacks.c.length)
  getPrompt();
  }
}

function towersOfHanoi(first, second) {
  // Your code here
  // checkForWin();
  isLegal(first, second)
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      let first = startStack.toLowerCase().trim()
      let second = endStack.toLowerCase().trim()
      if ((first === undefined) || (second === undefined)){
        console.log("You did not put in two inputs")
        getPrompt();
      }
      
      towersOfHanoi(first, second)
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should trim an input', () => {
      assert.equal(isLegal(' a', ' b '), true);
    });
    it('should transform an input to lower case', () => {
      assert.equal(isLegal('A', 'b'), true);
    });
    it('should not allow you to skip an input', () => {
      assert.equal(isLegal('', 'b'), false);
    });
    

    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
