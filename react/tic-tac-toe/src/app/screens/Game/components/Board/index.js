import React, { Component } from 'react';

import Square from '../Square';

import styles from './styles.module.scss';

export const boardRows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

function SquareList({ boardRow, squares, onClick }) { // a otro file
  return (
    <div className={styles.boardRow}>
      {boardRow.map(index => (
        <Square
          key={index}
          value={squares[index]}
          onClick={onClick}
          index={index}
        />))}
    </div>
  );
}

class Board extends Component { // pure function
  render() {
    const { squares, onClick } = this.props;
    const [firstRow, secondRow, thirdRow] = boardRows;

    return (
      <div>
        <SquareList boardRow={firstRow} squares={squares} onClick={onClick} />
        <SquareList boardRow={secondRow} squares={squares} onClick={onClick} />
        <SquareList boardRow={thirdRow} squares={squares} onClick={onClick} />
      </div>
    );
  }
}

export default Board;
