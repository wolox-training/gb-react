import React, { Component } from 'react';

import styles from './styles.module.scss';
import Board from './components/Board';
import HistoryList from './components/HistoryList';
import MatchHistoryList from './components/MatchHistoryList';
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
    const player = stepNumber % 2 ? 'X' : 'O';
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
    const { history, stepNumber, player } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner: ${winner}` : `${player}'s turn`;

    return (
      <div className={styles.game}>
        <Board squares={current.squares} onClick={this.handleClick} />
        <div className={styles.gameInfo}>
          <span>{status}</span>
          <HistoryList history={history} onChangeHistory={this.handleJumpTo} />
        </div>
        <MatchHistoryList />
      </div>
    );
  }
}

export default Game;
