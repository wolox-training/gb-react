import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function MatchHistoryEntry({ matchEntry }) {
  return (
    <div className={styles.matchContainer}>
      <div className={styles.matchEntry}>
        First Player: {matchEntry.firstPlayer}
      </div>
      <div className={styles.matchEntry}>
        Second Player: {matchEntry.secondPlayer}
      </div>
      <div className={styles.matchEntry}>
        Winner: {matchEntry.winner}
      </div>
    </div>
  );
}

export default MatchHistoryEntry;
