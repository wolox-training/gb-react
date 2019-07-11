import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function MatchHistoryEntry({ matchEntry }) {
  return (
    <div className={styles.matchEntryContainer}>
      <span className={styles.matchEntry}>
        {matchEntry.firstPlayer}
      </span>
      <span className={styles.matchEntry}>
        {matchEntry.secondPlayer}
      </span>
      <span className={styles.matchEntry}>
        {matchEntry.winner}
      </span>
    </div>
  );
}

MatchHistoryEntry.propTypes = {
  matchEntry: PropTypes.objectOf(PropTypes.shape({
    firstPlayer: PropTypes.string,
    secondPlayer: PropTypes.string,
    winner: PropTypes.string
  }))
};

export default MatchHistoryEntry;
