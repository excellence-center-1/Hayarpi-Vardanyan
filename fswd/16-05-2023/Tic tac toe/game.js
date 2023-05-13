const board = document.getElementById('board');
const cells = Array.from(board.getElementsByClassName('cell'));
const message = document.getElementById('message');
let currentPlayer = 'X';
let gameActive = true;
let boardState = Array(9).fill('');

const makeMove = (index) => {
if (!gameActive || boardState[index] !== '') return;

    boardState[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    cells[index].classList.add(currentPlayer);

    if (checkWin()) {
        message.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (checkDraw()) {
        message.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `Current Player: ${currentPlayer}`;
    };

const checkWin = () => {
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

    for (const combination of winCombinations) {
        const [a, b, c] = combination;
          if (
            boardState[a] === currentPlayer &&
            boardState[b] === currentPlayer &&
            boardState[c] === currentPlayer
          ) {
            return true;
          }
    }

    return false;
    };

    const checkDraw = () => {
      return boardState.every(cell => cell !== '');
    };

