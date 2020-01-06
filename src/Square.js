import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { squareValues } from "./constants";

class Square extends React.Component {
  render() {
    const { x, y, onClick, value } = this.props;

    return (
      <div className={cx("square", { "is-clickable": !value })}>
        <button onClick={() => onClick(x, y)}>{value}</button>
      </div>
    );
  }
}

Square.propTypes = {
  // Required
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  // Optional
  value: PropTypes.oneOf(Object.values(squareValues))
};

export default Square;
