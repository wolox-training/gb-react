import React from 'react';
import PropTypes from 'prop-types';

import SquareList from '../SquareList';
import { boardRows } from '../../constants';
import styles from '../../styles.module.scss';

function Board({ squares, onClick }) {
  return (
    <div className={styles.gameBoard}>
      {boardRows.map((eachRow, rowIndex) =>
        // Row indexs wont change within this matrix
        // eslint-disable-next-line react/no-array-index-key
        <SquareList key={rowIndex} boardRow={eachRow} squares={squares} onClick={onClick} />
      )}
    </div>
  );
}


Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Board;
