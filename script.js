const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');
let board = Array(9).fill(null);  // Change from 25 to 9 for 3x3
let xIsNext = true;

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];  // Remove unnecessary variables
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

function isBoardFull(squares) {
    return squares.every((square) => square !== null);
}

function updateStatus() {
    const winner = calculateWinner(board);
    const status = winner
        ? `Winner: ${winner}`
        : isBoardFull(board)
        ? "It's a Draw!"
        : `Next player: ${xIsNext ? 'X' : 'O'}`;

    statusElement.textContent = status;
}

function handleClick(index) {
    if (calculateWinner(board) || board[index]) {
        return;
    }

    board[index] = xIsNext ? 'X' : 'O';
    xIsNext = !xIsNext;
    renderBoard();
    updateStatus();
}

function resetGame() {
    board = Array(9).fill(null);
    xIsNext = true;
    renderBoard();
    updateStatus();
}

function renderBoard() {
    // Clear the board element before rendering
    boardElement.innerHTML = '';

    const boardSize = Math.sqrt(board.length); // Calculate the size of the board (3x3, 5x5, etc.)

    for (let row = 0; row < boardSize; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        for (let col = 0; col < boardSize; col++) {
            const index = row * boardSize + col;
            const button = document.createElement('button');
            button.className = 'cell';
            button.textContent = board[index] || '';
            button.addEventListener('click', () => handleClick(index));
            rowDiv.appendChild(button);
        }
        boardElement.appendChild(rowDiv);
    }
}

renderBoard();
updateStatus();
