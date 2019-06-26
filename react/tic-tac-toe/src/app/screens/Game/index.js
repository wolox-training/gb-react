import React, { Component } from 'react';

import styles from './styles.module.scss';
import Board from './components/Board';
import HistoryList from './components/HistoryList';
import { boardLines } from './constants';

class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    player: 'X'
  };

  changeTurn = () => this.state.player === 'X' ? 'O' : 'X';

  jumpTo = (step) => {
    const player = step % 2 ? 'X' : '0';
    const history = this.state.history.slice(0, step + 1);
    this.setState({
      stepNumber: step,
      player,
      history
    });
  }

  handleClick = index => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = [...current.squares];
    const hasWon = this.calculateWinner(squares);
    const isFilled = squares[index];

    if (hasWon || isFilled) {
      return;
    }

    squares[index] = this.state.player;
    return this.setState({
      squares,
      history: history.concat([
        { squares }
      ]),
      stepNumber: history.length,
      player: this.changeTurn()
    });
  }

  calculateWinner = squares => {
    for (let i = 0; i < boardLines.length; i++) {
      const [a, b, c] = boardLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const current = this.state.history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    let status = status = winner ? `Winner: ${winner}` : `${this.state.player}'s turn`;

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <HistoryList
            history={this.state.history}
            onChangeHistory={this.jumpTo}
          />
        </div>
      </div>
    );
  }
}

export default Game;
