import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HistoryList extends Component {
  handleOnClick = () => {
    const { move, onChangeHistory } = this.props;
    onChangeHistory(move);
  }

  render () {
    const { history } = this.props;
    return (
      <ol>
        {history.map((_step, move) => {
          const desc = move ? `Back to #${move}` : 'Back to start';
          return (
            // index is the only way to identify each square and quare position won’t change
            // eslint-disable-next-line react/no-array-index-key
            <li key={move}>
              <button type="button" onClick={this.handleOnClick}>
                {desc}
              </button>
            </li>
          );
        })}
      </ol>
    );
  }
}

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object),
  move: PropTypes.number,
  onChangeHistory: PropTypes.func
};

export default HistoryList;
