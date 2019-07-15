import React from 'react';
import PropTypes from 'prop-types';

import HistoryMove from './components/HistoryMove';

function HistoryList({ history, onChangeHistory }) {
  return (
    <ol>
      {history.map((_step, move) => (
        // index is the only way to identify each square and quare position won’t change
        // eslint-disable-next-line react/no-array-index-key
        <li key={move}>
          <HistoryMove moveNumber={move} onChangeHistory={onChangeHistory} />
        </li>
      ))}
    </ol>
  );
}

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    squares: PropTypes.array
  })),
  onChangeHistory: PropTypes.func
};

export default HistoryList;
