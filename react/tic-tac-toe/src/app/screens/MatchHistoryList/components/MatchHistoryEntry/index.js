import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function MatchHistoryEntry({ matchEntry }) {
  return (
    <div className={styles.matchEntryContainer}>
      <span className={`row ${styles.matchEntry}`}>
        {matchEntry && matchEntry.firstPlayer}
      </span>
      <span className={`row ${styles.matchEntry}`}>
        {matchEntry && matchEntry.secondPlayer}
      </span>
      <span className={`row ${styles.matchEntry}`}>
        {matchEntry && matchEntry.winner}
      </span>
    </div>
  );
}

MatchHistoryEntry.propTypes = {
  matchEntry: PropTypes.shape({
    firstPlayer: PropTypes.string,
    secondPlayer: PropTypes.string,
    winner: PropTypes.string
  })
};

export default MatchHistoryEntry;
