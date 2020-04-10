/** @jsx jsx */
import { css, jsx } from "@emotion/core";

interface Props {
  value: number[];
  highlighted: boolean;
  onClick: () => void;
}

export function Square(props: Props) {
  return (
    <button
      css={css`
        background: #fff;
        border: 1px solid #999;
        float: left;
        font-size: 24px;
        font-weight: bold;
        line-height: 34px;
        height: 34px;
        margin-right: -1px;
        margin-top: -1px;
        padding: 0;
        text-align: center;
        width: 34px;
        &:focus {
          outline: none;
          background: #ddd;
        }
        ${props.highlighted ? `background: lightblue;` : ""}
      `}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
