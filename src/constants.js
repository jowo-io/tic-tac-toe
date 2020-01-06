export const playerValues = {
  O: "O",
  X: "X"
};

export const squareValues = {
  ...playerValues,
  CHECK: "✓"
};

export const actionTypes = {
  RESET: "RESET",
  PLAYER_CHOICE: "PLAYER_CHOICE"
};

export const initialState = {
  winner: undefined,
  player: playerValues.X,
  isBoardFull: false,
  board: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ]
};
