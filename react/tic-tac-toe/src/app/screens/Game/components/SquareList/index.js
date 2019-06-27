import React from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';

function SquareList({ boardRow, squares, onClick }) {
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

SquareList.propTypes = {
  boardRow: PropTypes.arrayOf(PropTypes.array),
  squares: PropTypes.arrayOf(PropTypes.array),
  onClick: PropTypes.func
};

export default SquareList;
