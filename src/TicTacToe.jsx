/* import React, { useState } from 'react';
import Confetti from 'react-confetti';

const calculateWinner = (squares) => {
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
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const isBoardFull = (squares) => {
  return squares.every((square) => square !== null);
};

const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [confettiActive, setConfettiActive] = useState(false);

  const handleClick = (i) => {
    if (calculateWinner(board) || board[i]) {
      return;
    }

    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[i] = xIsNext ? 'X' : 'O';
      return newBoard;
    });
    setXIsNext((prevXIsNext) => !prevXIsNext);
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setConfettiActive(false); 
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : isBoardFull(board)
    ? "It's a Draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  if (winner && !confettiActive) {
    setConfettiActive(true); 
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="mb-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Tic Tac Toe</h2>
        <p className="text-white">Player 1 (X) vs Player 2 (O)</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-20 h-20 bg-white rounded-md text-lg"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-bold text-white">{status}</p>
      </div>
      <div className="mt-4 text-center">
        {winner && confettiActive && <Confetti numberOfPieces={500} />}
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRestart}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
  
};

export default TicTacToe;
 */


import React, { useState } from 'react';
import Confetti from 'react-confetti';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d] &&
      squares[a] === squares[e]
    ) {
      return squares[a];
    }
  }

  return null;
};

const isBoardFull = (squares) => {
  return squares.every((square) => square !== null);
};

const initialBoard = Array(25).fill(null);

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [confettiActive, setConfettiActive] = useState(false);

  const handleClick = (i) => {
    if (calculateWinner(board) || board[i]) {
      return;
    }

    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[i] = xIsNext ? 'X' : 'O';
      return newBoard;
    });
    setXIsNext((prevXIsNext) => !prevXIsNext);
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setConfettiActive(false);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : isBoardFull(board)
    ? "It's a Draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  if (winner && !confettiActive) {
    setConfettiActive(true);
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="mb-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">5x5 Tic Tac Toe</h2>
        <p className="text-white">Player 1 (X) vs Player 2 (O)</p>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-16 h-16 bg-white rounded-md text-lg"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-bold text-white">{status}</p>
      </div>
      <div className="mt-4 text-center">
        {winner && confettiActive && <Confetti numberOfPieces={500} />}
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRestart}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe