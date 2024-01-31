import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Footer from './Footer';
import background from './assets/FCC.png'
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
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
    <div
      className="w-full min-h-screen grid grid-row-3 justify-items-center justify-center p-4"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: '90rem',
      }}
    >
      <div className="mb-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-2 py-9">3x3 Tic Tac Toe</h2>
        <p className="text-white">FCC Player 1 (X) vs FCC Player 2 (O)</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {board.map((value, index) => (
          <button
            key={index}
            className="w-20 h-20 bg-white rounded-md text-xl"
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
      <Footer />
    </div>
  );
};

export default TicTacToe;
