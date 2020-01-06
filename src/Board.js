import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import BoardRow from "./BoardRow";

import { playerValues } from "./constants";

class Board extends React.Component {
  getStatusMessage = () => {
    const { winner, player, isBoardFull } = this.props;

    if (winner) {
      return `The winner is: ${winner.player}!`;
    } else if (isBoardFull) {
      return `It's a draw!`;
    } else {
      return `Next player: ${player}`;
    }
  };

  render() {
    const { onReset, onPlayerChoose, winner, isBoardFull, board } = this.props;

    return (
      <div className={cx("board", { "is-game-over": !!winner || isBoardFull })}>
        <div
          className={cx("board-status", {
            "is-win": !!winner,
            "is-draw": !winner && isBoardFull
          })}
        >
          {this.getStatusMessage()}
        </div>
        <button className="reset" onClick={onReset}>
          Reset
        </button>
        <div className="board-game">
          <BoardRow y={0} board={board} onPlayerChoose={onPlayerChoose} />
          <BoardRow y={1} board={board} onPlayerChoose={onPlayerChoose} />
          <BoardRow y={2} board={board} onPlayerChoose={onPlayerChoose} />
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  // Required
  onPlayerChoose: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  player: PropTypes.oneOf(Object.values(playerValues)).isRequired,
  isBoardFull: PropTypes.bool.isRequired,
  // Optional
  winner: PropTypes.shape({
    player: PropTypes.string.isRequired,
    squares: PropTypes.arrayOf(PropTypes.object).isRequired
  })
};

export default Board;
