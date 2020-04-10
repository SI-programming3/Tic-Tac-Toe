/** @jsx jsx */
import { css, jsx } from "@emotion/core";

interface Props {
  steps: number;
  toggle: boolean;
  stepNumber: number;
  onMoveButtonClick: (n: number) => void;
}

export function MoveList(props: Props) {
  const { steps, toggle, stepNumber, onMoveButtonClick } = props;
  return (
    <ol
      css={css`
        padding-left: 30px;
      `}
      reversed={toggle}
    >
      {[...Array(steps)].map((_, i) => {
        const n = toggle ? steps - 1 - i : i;
        let desc = n ? "Go to move #" + n : "Go to game start";
        return (
          <li key={i}>
            <button onClick={() => onMoveButtonClick(n)}>
              {stepNumber === n ? <b>{desc}</b> : desc}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
