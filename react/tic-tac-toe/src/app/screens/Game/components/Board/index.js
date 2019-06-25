import React, { Component } from 'react';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      player: 'X',
    };
  }

  changeTurn = () => this.state.player === 'X' ? 'O' : 'X';

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.player;
    this.setState({squares : squares, player : this.changeTurn() });
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={ ()=> this.handleClick(i)} />;
  }

  render() {
    const status = this.state.player + `'s turn`;
    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
