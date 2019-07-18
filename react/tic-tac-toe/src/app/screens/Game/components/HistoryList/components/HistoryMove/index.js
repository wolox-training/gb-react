import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HistoryMove extends Component {
  handleOnClick = () => {
    const { onChangeHistory, moveNumber } = this.props;
    onChangeHistory(moveNumber);
  };

  render() {
    const { moveNumber } = this.props;
    const desc = moveNumber ? `Back to #${moveNumber}` : 'Back to start';
    return (
      <button type="button" onClick={this.handleOnClick}>
        {desc}
      </button>
    );
  }
}

HistoryMove.propTypes = {
  moveNumber: PropTypes.number,
  onChangeHistory: PropTypes.func
};

export default HistoryMove;
