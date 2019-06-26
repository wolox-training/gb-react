import React, { Component } from 'react';

import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    player: 'X'
  };

  changeTurn = () => this.state.player === 'X' ? 'O' : 'X';

  jumpTo(step) {
    if (this.state.player === 'X' && step % 2) {
      this.setState({ stepNumber: step, player: 'X' });
    }
    if (this.state.player === 'O' && !(step % 2)) {
      this.setState({ stepNumber: step, player: 'O' });
    }
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = [...current.squares];

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.player;
    return this.setState({
      squares,
      history: history.concat([
        { squares }
      ]),
      stepNumber: history.length,
      player: this.changeTurn() });
  }

  calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const history = this.state.history;
  const current = history[this.state.stepNumber];
  const winner = this.calculateWinner(current.squares);
  const movesHistory = history.map((step, move) => {
    const desc = move ? `Back to #${move}` : 'Back to start';
    return (
      <li key={move}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  
  render() {
    let status = this.state.player;
    winner ? status = winner : status = `${this.state.player}'s turn`;

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
          <ol>{movesHistory}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
