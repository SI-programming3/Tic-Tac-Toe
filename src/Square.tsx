import React from "react";
import styles from "./Square.module.css";

console.log(styles);

interface Props {
  value: number[];
  highlighted: boolean;
  onClick: () => void;
}

export function Square(props: Props) {
  return (
    <button
      className={`${styles.square} ${
        props.highlighted ? styles.highlight : ""
      }`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
