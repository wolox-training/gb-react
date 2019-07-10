import React from 'react';

import styles from './styles.module.scss';

function MatchHistoryHeader() {
  return (
    <div className={styles.matchHeader}>
      <span className={styles.matchHeaderDescription}>First Player</span>
      <span className={styles.matchHeaderDescription}>Second Player</span>
      <span className={styles.matchHeaderDescription}>Winner</span>
    </div>
  );
}

export default MatchHistoryHeader;
