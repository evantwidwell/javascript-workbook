'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'o';
function turns (turn) {
  if (playerTurn === 'x') {
    playerTurn = 'o' 
    } else {
    playerTurn = 'x' 
    };
    // console.log(playerTurn);
}

 

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  for (let i = 0; i < 3; i++){
    if (board[i][0] === 'x' && board[i][1] === 'x' && board[i][2] === 'x'){
      // console.log('player ' + playerTurn + 'wins!')
      return true
    }
    if (board[i][0] === 'o' && board[i][1] === 'o' && board[i][2] === 'o'){
      // console.log('player ' + playerTurn + 'wins!')
      return true
    }
  }
}

function verticalWin() {
  for (let i = 0; i < 3; i++){
    if (board[0][i] === 'x' && board[1][i] === 'x' && board[2][i] === 'x'){
      // console.log('player ' + playerTurn + 'wins!')
      return true
    }
    if (board[0][i] === 'o' && board[1][i] === 'o' && board[2][i] === 'o'){
      return true
    }
  }
}

function diagonalWin() {
  for (let i = 0; i < 3; i++){
  if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x'){
      return true
    }
    if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o'){
      return true
    }
  }
}

function checkForWin() {
  if (horizontalWin() === true){
    console.log(" Player " + playerTurn + "  wins!!")
  }
  if (verticalWin() === true){
    console.log(" Player " + playerTurn + "  wins!!")
  }
  if (diagonalWin() === true){
    console.log(" Player " + playerTurn + "  wins!!")
  }

}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  horizontalWin();
  verticalWin();
  diagonalWin();
  checkForWin();
}

function getPrompt() {
  printBoard();
  turns();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
      // console.log(board === [row], [column])
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
