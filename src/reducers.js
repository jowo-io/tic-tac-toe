import cloneDeep from "lodash.clonedeep";

import { actionTypes, initialState, squareValues } from "./constants";
import { getBoardWinner, checkIfBoardIsFull, getNextPlayer } from "./utils";

/**
 * `playerChoiceReducer` handles all of the logic for when a player clicks a square.
 * It invokes various util methods which check the state of the board to check for
 * a winning move by a player, or to check if the board is full (if the game was a draw).
 */
const playerChoiceReducer = function(state, action) {
  if (state.winner || state.board[action.y][action.x]) {
    // if winner or square is already in use then don't continue
    return state;
  }

  const currentPlayer = state.player;
  const nextPlayer = getNextPlayer(currentPlayer);

  // deep clone the board state so it can be mutated
  const board = cloneDeep(state.board);

  // set the value of the square that was chosen
  board[action.y][action.x] = currentPlayer;

  // get info about potential winning move
  const winner = getBoardWinner(board);

  // check if the board is full (or not e.g. still has empty square)
  const isBoardFull = checkIfBoardIsFull(board);

  // if there was a winner, then update the winning squares to checks (✓)
  if (winner) {
    winner.squares.forEach(square => {
      board[square.y][square.x] = squareValues.CHECK;
    });
  }

  return {
    ...state,
    player: nextPlayer,
    winner,
    isBoardFull,
    board
  };
};

/**
 * the root reducer for our app!
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PLAYER_CHOICE:
      return playerChoiceReducer(state, action);
    case actionTypes.RESET:
      return initialState;
    default:
      return state;
  }
}
