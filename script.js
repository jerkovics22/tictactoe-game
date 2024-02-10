const playerEl = document.getElementById('player');
const boardEl = document.getElementById('board');
const resultEl = document.getElementById('result');
const restartButton = document.getElementById('restart');

let onTurn = 'X';

let turnNum = 9;

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let endGame = true;

function createBoard() {
  boardEl.innerHTML = '';

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      boardEl.innerHTML += `
                <div class="cell" onclick="turn(${i}, ${j})"> ${board[i][j]}  </div>
            `;
    }
  }
}

function check() {
  if (
    board[0][0] != '' &&
    board[0][0] == board[0][1] &&
    board[0][0] == board[0][2]
  )
    return true;
  else if (
    board[1][0] != '' &&
    board[1][0] == board[1][1] &&
    board[1][0] == board[1][2]
  )
    return true;
  else if (
    board[2][0] != '' &&
    board[2][0] == board[2][1] &&
    board[2][0] == board[2][2]
  )
    return true;
  else if (
    board[0][0] != '' &&
    board[0][0] == board[1][0] &&
    board[0][0] == board[2][0]
  )
    return true;
  else if (
    board[0][1] != '' &&
    board[0][1] == board[1][1] &&
    board[0][1] == board[2][1]
  )
    return true;
  else if (
    board[0][2] != '' &&
    board[0][2] == board[1][2] &&
    board[0][2] == board[2][2]
  )
    return true;
  else if (
    board[0][0] != '' &&
    board[0][0] == board[1][1] &&
    board[0][0] == board[2][2]
  )
    return true;
  else if (
    board[0][2] != '' &&
    board[0][2] == board[1][1] &&
    board[0][2] == board[2][0]
  )
    return true;
  else return false;
}
function checkDraw() {
  return board.every((row) => row.every((cell) => cell !== ''));
}

createBoard();

function turn(i, j) {
  if (board[i][j] == '' && endGame) {
    board[i][j] = onTurn;

    createBoard();

    if (check()) {
      resultEl.innerHTML = `Winner is: ${board[i][j]}`;
      endGame = false;
    } else if (checkDraw()) {
      resultEl.innerHTML = "It's a draw!";
      endGame = false;
    }

    if (onTurn == 'X') {
      onTurn = 'O';
    } else {
      onTurn = 'X';
    }
  }

  playerEl.innerText = onTurn;
}

function restartGame() {
  onTurn = 'X';
  turnNum = 9;
  endGame = true;
  resultEl.innerHTML = '';

  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  createBoard();
  playerEl.innerText = 'X';
}

restartButton.addEventListener('click', restartGame);
