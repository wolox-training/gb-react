import React, { Component } from 'react';

import styles from './styles.module.scss';

import Board from './components/Board';

class Game extends Component{

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      player: 'X'
    };
  }

  changeTurn = () => this.state.player === 'X' ? 'O' : 'X';

  handleClick = i => {
    const history = this.state.history;
    const current = history[history.length -1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) return;

    squares[i] = this.state.player;
    return this.setState({
      squares : squares,
      history : history.concat([
        { squares : squares }
      ]),
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
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
  }

  render() {
    const history = this.state.history;
    const current = history[history.length -1];
    const winner = this.calculateWinner(current.squares);
    let status = this.state.player;

    winner ? status = winner : status = this.state.player + `'s turn`;

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
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
