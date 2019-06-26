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

  const boardRows = [[0,1,2], [3,4,5], [6,7,8]];
  const [firstRow, secondRow, thirdRow] = boardRows;

  render() {
    return (
      <div>
        <div className={styles.boardRow}>
          {firstRow.map(index => this.renderSquare(index)}
        </div>
        <div className={styles.boardRow}>
          {secondRow.map(index => this.renderSquare(index)}
        </div>
        <div className={styles.boardRow}>
          {thirdRow.map(index => this.renderSquare(index)}
        </div>
      </div>
    );
  }
}

export default Board;
