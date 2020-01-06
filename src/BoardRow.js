import React from "react";
import PropTypes from "prop-types";

import Square from "./Square";

class BoardRow extends React.Component {
  render() {
    const { y, board, onPlayerChoose } = this.props;

    return (
      <div className="board-row">
        <Square x={0} y={y} onClick={onPlayerChoose} value={board[y][0]} />
        <Square x={1} y={y} onClick={onPlayerChoose} value={board[y][1]} />
        <Square x={2} y={y} onClick={onPlayerChoose} value={board[y][2]} />
      </div>
    );
  }
}

BoardRow.propTypes = {
  // Required
  y: PropTypes.number.isRequired,
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  onPlayerChoose: PropTypes.func.isRequired
  // Optional
  // ...
};

export default BoardRow;
