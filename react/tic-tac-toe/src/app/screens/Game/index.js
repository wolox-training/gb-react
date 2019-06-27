import React, { Component } from 'react';

import styles from './styles.module.scss';
import Board from './components/Board';
import HistoryList from './components/HistoryList';
import calculateWinner from './utils';


class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    player: 'X'
  };

  changeTurn = () => this.state.player === 'X' ? 'O' : 'X';

  handleJumpTo = (stepNumber) => {
    const { history } = this.state;
    const player = stepNumber % 2 ? 'X' : '0';
    this.setState({
      stepNumber,
      player,
      history: history.slice(0, stepNumber + 1)
    });
  }

  handleClick = index => {
    let { history } = this.state;
    history = history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = [...current.squares];
    const hasWon = calculateWinner(squares);
    const isFilled = squares[index];

    if (hasWon || isFilled) {
      return;
    }

    squares[index] = this.state.player;
    this.setState({
      history: history.concat([
        { squares }
      ]),
      stepNumber: history.length,
      player: this.changeTurn()
    });
  }

  render() {
    const current = this.state.history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner: ${winner}` : `${this.state.player}'s turn`;

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={this.handleClick}
          />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <HistoryList
            history={this.state.history}
            onChangeHistory={this.handleJumpTo}
          />
        </div>
      </div>
    );
  }
}

export default Game;
