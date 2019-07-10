import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function MatchHistoryEntry({ matchEntry }) {
  return (
    <div className={styles.matchEntryContainer}>
      <div className={styles.matchEntry}>
        {matchEntry.firstPlayer}
      </div>
      <div className={styles.matchEntry}>
        {matchEntry.secondPlayer}
      </div>
      <div className={styles.matchEntry}>
        {matchEntry.winner}
      </div>
    </div>
  );
}

export default MatchHistoryEntry;
