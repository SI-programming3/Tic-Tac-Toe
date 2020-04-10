import React from "react";
import styles from "./Board.module.css";
import { Square } from "./Square";

interface Props {
  squares: any[];
  winner: number[];
  onClick: (i: number) => void;
}

function Board(props: Props) {
  return (
    <div>
      {[0, 3, 6].map((i) => {
        return (
          <div className={styles.board_row}>
            {[i, i + 1, i + 2].map((j) => (
              <Square
                value={props.squares[j]}
                highlighted={props.winner.includes(j)}
                onClick={() => props.onClick(j)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
