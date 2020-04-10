/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Game from "./Game";

function App() {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <Game />
    </div>
  );
}

export default App;
