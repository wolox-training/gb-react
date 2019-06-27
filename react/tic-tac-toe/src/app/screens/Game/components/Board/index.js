import React from 'react';
import PropTypes from 'prop-types';

import SquareList from '../SquareList';
import { boardRows } from '../../constants';

function Board({ squares, onClick }) {
  const [firstRow, secondRow, thirdRow] = boardRows;

  return (
    <div>
      <SquareList boardRow={firstRow} squares={squares} onClick={onClick} />
      <SquareList boardRow={secondRow} squares={squares} onClick={onClick} />
      <SquareList boardRow={thirdRow} squares={squares} onClick={onClick} />
    </div>
  );
}


Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.array),
  onClick: PropTypes.func
};

export default Board;
