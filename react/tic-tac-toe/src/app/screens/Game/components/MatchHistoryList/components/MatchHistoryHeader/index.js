import React from 'react';

import styles from './styles.module.scss';

function MatchHistoryHeader() {
  return (
    <div className={styles.matchHeader}>
      <h2 className={styles.matchHeaderDescription}>First Player</h2>
      <h2 className={styles.matchHeaderDescription}>Second Player</h2>
      <h2 className={styles.matchHeaderDescription}>Winner</h2>
    </div>
  );
}

export default MatchHistoryHeader;
