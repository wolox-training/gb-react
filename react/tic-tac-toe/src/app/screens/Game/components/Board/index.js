import React from 'react';
import PropTypes from 'prop-types';

import SquareList from '../SquareList';
import { boardRows } from '../../constants';

function Board({ squares, onClick }) {
  const [firstRow, secondRow, thirdRow] = boardRows;

  return (
    <>
      {boardRows.map((eachRow, rowIndex) =>
        // Row indexs wont change within this matrix
        // eslint-disable-next-line react/no-array-index-key
        <SquareList key={rowIndex} boardRow={eachRow} squares={squares} onClick={onClick} />
      )}
    </>
  );
}


Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
};

export default Board;
