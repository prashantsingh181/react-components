import { useState, useEffect } from "react";
import "./styles.css";
export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleSquareClick(i) {
    const nextSquares = squares.slice();
    if (nextSquares[i]) return;
    if (calculateWinner(nextSquares)) return;
    nextSquares[i] = isXTurn ? "X" : "O";

    setSquares(nextSquares);
    setIsXTurn((prevIsXTurn) => !prevIsXTurn);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
  }

  function calculateWinner(squares) {
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
    for (const move of winningMove) {
      const [a, b, c] = move;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return false;
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus("Winner: " + winner);
    } else if (squares.every((square) => !!square)) {
        setStatus("Draw!");
    } else {
        setStatus("Next player: " + (isXTurn ? "X" : "O"));
    }
  }, [squares, isXTurn]);
  return (
    <div className="tic-tac-toe-container">
      <div>{status}</div>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Board({ squares, handleSquareClick }) {
  return (
    <div className="board">
      <div className="row">
        <Square
          value={squares[0]}
          handleSquareClick={() => handleSquareClick(0)}
        />
        <Square
          value={squares[1]}
          handleSquareClick={() => handleSquareClick(1)}
        />
        <Square
          value={squares[2]}
          handleSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="row">
        <Square
          value={squares[3]}
          handleSquareClick={() => handleSquareClick(3)}
        />
        <Square
          value={squares[4]}
          handleSquareClick={() => handleSquareClick(4)}
        />
        <Square
          value={squares[5]}
          handleSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="row">
        <Square
          value={squares[6]}
          handleSquareClick={() => handleSquareClick(6)}
        />
        <Square
          value={squares[7]}
          handleSquareClick={() => handleSquareClick(7)}
        />
        <Square
          value={squares[8]}
          handleSquareClick={() => handleSquareClick(8)}
        />
      </div>
    </div>
  );
}

function Square({ value, handleSquareClick }) {
  return (
    <button className="square" onClick={handleSquareClick}>
      {value}
    </button>
  );
}
