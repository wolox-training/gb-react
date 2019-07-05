import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';


function MatchHistoryEntry({ singleEntry }) {
  return (
    <div className={styles.matchHistoryEntry}>
      {singleEntry}
    </div>
  );
}

MatchHistoryEntry.propTypes = {
  singleEntry: PropTypes.isRequired
};

export default MatchHistoryEntry;
