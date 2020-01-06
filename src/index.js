import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

import Board from "./Board";

import rootReducer from "./reducers";
import { resetAction, playerChoiceAction } from "./actions";

import "./styles.css";

const store = createStore(rootReducer);

const mapStateToProps = function(state) {
  return {
    isBoardFull: state.isBoardFull,
    winner: state.winner,
    player: state.player,
    board: state.board
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onReset: () => dispatch(resetAction()),
    onPlayerChoose: (x, y) => dispatch(playerChoiceAction(x, y))
  };
};

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Provider store={store}>
          <ConnectedBoard />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
