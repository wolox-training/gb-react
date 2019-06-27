import React from 'react';
import PropTypes from 'prop-types';

function HistoryList({ onChangeHistory, history }) {
  return (
    <ol>
      {history.map((_step, move) => {
        const desc = move ? `Back to #${move}` : 'Back to start';
        return (
          // index is the only way to identify each square and quare position won’t change
          // eslint-disable-next-line react/no-array-index-key
          <li key={move}>
            <button type="button" onClick={onChangeHistory(move)}>
              {desc}
            </button>
          </li>
        );
      })}
    </ol>
  );
}

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.array),
  onChangeHistory: PropTypes.func
};

export default HistoryList;
