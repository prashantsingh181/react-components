import "./styles.css";
import { useState } from "react";

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentStep = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  let status;
  const winner = calculateWinner(currentStep);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (winner) return;
    const nextStep = currentStep.slice();
    if (nextStep[i]) return;
    nextStep[i] = xIsNext ? "X" : "O";
    setHistory((prevHistory) => [
      ...prevHistory.slice(0, currentMove + 1),
      nextStep,
    ]);
    setCurrentMove((prevCurrentMove) => prevCurrentMove + 1);
  }
  function handleHistoryClick(i) {
    setCurrentMove(i);
  }
  function calculateWinner(squaresArray) {
    const winningMove = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningMove.length; i++) {
      const [a, b, c] = winningMove[i];
      if (
        squaresArray[a] &&
        squaresArray[a] === squaresArray[b] &&
        squaresArray[b] === squaresArray[c]
      ) {
        return squaresArray[a];
      }
    }
    return null;
  }
  return (
    <div className="tictactoe-container">
      <div>
        {status}
        <Board steps={currentStep} handleClick={handleClick} />
      </div>
      <div className="history">
        <p>History of Game</p>
        {history.map((step, i) => (
          <button key={i} onClick={() => handleHistoryClick(i)}>
            Go to Step {i}
          </button>
        ))}
      </div>
    </div>
  );
}

function Board({ steps, handleClick }) {
  return (
    <div className="square-container">
      <div className="square-row">
        <Square value={steps[0]} handleClick={() => handleClick(0)} />
        <Square value={steps[1]} handleClick={() => handleClick(1)} />
        <Square value={steps[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="square-row">
        <Square value={steps[3]} handleClick={() => handleClick(3)} />
        <Square value={steps[4]} handleClick={() => handleClick(4)} />
        <Square value={steps[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="square-row">
        <Square value={steps[6]} handleClick={() => handleClick(6)} />
        <Square value={steps[7]} handleClick={() => handleClick(7)} />
        <Square value={steps[8]} handleClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function Square({ value, handleClick }) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
