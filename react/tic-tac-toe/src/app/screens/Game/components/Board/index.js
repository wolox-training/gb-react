import React, { Component } from 'react';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {
  const { squares, onClick } = this.props;
  renderSquare = index => (
    <Square
      value={squares[index]}
      onClick={()=> onClick(index)}
    />
  )

  render() {
    return (
      <div>
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
