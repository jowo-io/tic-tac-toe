import { playerValues } from "./constants";

/**
 * takes the first square in a row of the board, and matches that square
 * against all other squares in the row.
 * If they all match, return data about the winning move.
 *
 * @param {array} board
 * @param {number} y
 *
 * @returns {object | undefined}
 */
const checkRowWinner = function(board, y) {
  const matchAgainst = board[y][0];
  if (
    matchAgainst &&
    board[y][1] === matchAgainst &&
    board[y][2] === matchAgainst
  ) {
    return {
      player: matchAgainst,
      squares: [{ x: 0, y }, { x: 1, y }, { x: 2, y }]
    };
  } else {
    return undefined;
  }
};

/**
 * takes the first square in a collumn of the board, and matches that square
 * against all other squares in the collumn.
 * If they all match, return data about the winning move.
 *
 * @param {array} board
 * @param {number} x
 *
 * @returns {object | undefined}
 */
const checkColWinner = function(board, x) {
  const matchAgainst = board[0][x];
  if (
    matchAgainst &&
    board[1][x] === matchAgainst &&
    board[2][x] === matchAgainst
  ) {
    return {
      player: matchAgainst,
      squares: [{ x, y: 0 }, { x, y: 1 }, { x, y: 2 }]
    };
  } else {
    return undefined;
  }
};

/**
 * takes the central square in of the board,
 * since it will always need to match for a diagonal win.
 * Then, checks two conditions:
 * 1. Diagonal win for: Top-left / bottom-right
 * 2. Diagonal win for: Top-right / bottom-left
 *
 * @param {array} board
 *
 * @returns {object | undefined}
 */
const checkDiagWinner = function(board) {
  const matchAgainst = board[1][1]; // choose central square bc/ will be same for both
  if (
    matchAgainst &&
    matchAgainst === board[0][0] &&
    matchAgainst === board[2][2]
  ) {
    return {
      player: matchAgainst,
      squares: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }]
    };
  } else if (
    matchAgainst &&
    matchAgainst === board[0][2] &&
    matchAgainst === board[2][0]
  ) {
    return {
      player: matchAgainst,
      squares: [{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 }]
    };
  } else {
    return undefined;
  }
};

/**
 * Checks all possible win scenarios. 3x row, 3x col, 2x diagonal
 * And returns data about the winning move
 *
 * @param {array} board
 *
 * @returns {object | undefined}
 */
export const getBoardWinner = function(board) {
  const rowWinner =
    checkRowWinner(board, 0) ||
    checkRowWinner(board, 1) ||
    checkRowWinner(board, 2);
  if (rowWinner) return rowWinner;

  const colWinner =
    checkColWinner(board, 0) ||
    checkColWinner(board, 1) ||
    checkColWinner(board, 2);
  if (colWinner) return colWinner;

  const diagWinner = checkDiagWinner(board);
  if (diagWinner) return diagWinner;

  return undefined;
};

/**
 * toggles between players based on current player
 *
 * @param {string} player
 *
 * @returns {string}
 */
export const getNextPlayer = function(player) {
  return player === playerValues.X ? playerValues.O : playerValues.X;
};

/**
 * checks if the board is full (has no has empty squares)
 *
 * @param {array} board
 *
 * @returns {boolean}
 */
export const checkIfBoardIsFull = function(board) {
  return board.flat().findIndex(square => !square) === -1;
};
