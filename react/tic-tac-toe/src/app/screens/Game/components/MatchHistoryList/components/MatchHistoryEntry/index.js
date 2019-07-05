import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';


function MatchHistoryEntry({ matchEntry }) {
  return (
    <div className={styles.matchHistoryEntry}>
      {matchEntry}
    </div>
  );
}

MatchHistoryEntry.propTypes = {
  matchEntry: PropTypes.isRequired
};

export default MatchHistoryEntry;
