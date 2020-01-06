import { actionTypes } from "./constants";

export const resetAction = function() {
  return {
    type: actionTypes.RESET
  };
};

export const playerChoiceAction = function(x, y) {
  return {
    type: actionTypes.PLAYER_CHOICE,
    x,
    y
  };
};
