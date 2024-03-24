let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

function handleClick(cellIndex) {
  if (gameBoard[cellIndex] === '' && gameActive) {
    gameBoard[cellIndex] = currentPlayer;
    const cell = document.getElementById('game-board').children[cellIndex];
    cell.classList.add(currentPlayer.toLowerCase()); // Add class based on currentPlayer
    if (checkWin()) {
      document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (!gameBoard.includes('')) {
      document.getElementById('message').textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('message').textContent = `Player ${currentPlayer}'s Turn`;
    }
  }
}

function checkWin() {
  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('message').textContent = "Player X's Turn";
  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.textContent = ''; // Remove X or O content
    cell.classList.remove('x', 'o'); // Remove class
  }
}
