/** @jsx jsx */
import React from "react";
import Board from "./Board";
import { calculateWinner } from "./calculateWinner";
import { MoveList } from "./MoveList";
import { css, jsx } from "@emotion/core";

const { useState } = React;
const initialHistory = [
  {
    squares: Array(9).fill(null),
    matrix: Array(1).fill(null),
  },
];

function Game() {
  const [history, setHistory] = useState(initialHistory);
  const [stepNumber, setStepNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  const xIsNext = stepNumber % 2 === 0;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const matrix = current.matrix[stepNumber];

  const handleClick = (i: number) => {
    const h = history.slice(0, stepNumber + 1);
    const cur = h[h.length - 1];
    const sqrs = cur.squares.slice();
    const mat = cur.matrix.slice(0, stepNumber + 1);

    if (calculateWinner(sqrs).length || sqrs[i]) {
      return;
    }
    sqrs[i] = xIsNext ? "X" : "O";

    setHistory(
      h.concat([
        {
          squares: sqrs,
          matrix: mat.concat(i),
        },
      ])
    );
    setStepNumber(h.length);
  };

  const toggleButton = () => {
    setToggle(!toggle);
  };

  let cr =
    stepNumber !== 0
      ? "col: " + Math.floor(matrix % 3) + " row: " + Math.floor(matrix / 3)
      : "";
  const sort = <button onClick={() => toggleButton()}>{"Change Sort"}</button>;
  let status;
  if (winner.length) {
    status = "Winner: " + (!xIsNext ? "X" : "O");
  } else if (stepNumber !== 9) {
    status = "Next player: " + (xIsNext ? "X" : "O");
  } else {
    status = "Draw";
  }

  return (
    <div
      css={css`
        font: 14px "Century Gothic", Futura, sans-serif;
        margin: 20px;
        display: flex;
        flex-direction: row;
      `}
    >
      <div>
        <Board
          squares={current.squares}
          winner={winner}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div
        css={css`
          margin-left: 20px;
        `}
      >
        <div>{status}</div>
        <div>{cr}</div>
        <div>{sort}</div>
        <MoveList
          steps={history.length}
          toggle={toggle}
          stepNumber={stepNumber}
          onMoveButtonClick={(n: number) => setStepNumber(n)}
        />
      </div>
    </div>
  );
}

export default Game;
