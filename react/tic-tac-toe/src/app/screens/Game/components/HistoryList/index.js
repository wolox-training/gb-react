import React, { Component } from 'react';

class HistoryList extends Component {
  render() {
    return (
      <ol>
        {this.props.history.map((step, move) => {
          const desc = move ? `Back to #${move}` : 'Back to start';
          return (
            <li key={move}>
              <button onClick={() => this.props.onChangeHistory(move)}>{desc}</button>
            </li>
          );
        })}
      </ol>
    );
  }
}

export default HistoryList;
