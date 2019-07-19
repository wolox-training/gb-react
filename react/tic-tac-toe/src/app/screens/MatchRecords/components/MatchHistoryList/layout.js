import React from 'react';
import PropTypes from 'prop-types';

import withSpinner from '../../../../components/WithSpinner';
import MatchHistoryHeader from '../MatchHistoryHeader';
import MatchHistoryEntry from '../MatchHistoryEntry';

import styles from './styles.module.scss';

function MatchHistoryList({ historicEntries }) {
  return (
    <div className={`${styles.column} ${styles.matchContainer}`}>
      <MatchHistoryHeader />
      {historicEntries.map(matchEntry => (
        <MatchHistoryEntry key={matchEntry.date} matchEntry={matchEntry} />
      ))}
    </div>
  );
}

MatchHistoryList.propTypes = {
  historicEntries: PropTypes.arrayOf(
    PropTypes.shape({
      firstPlayer: PropTypes.string,
      secondPlayer: PropTypes.string,
      winner: PropTypes.string
    })
  ).isRequired
};

export default withSpinner(MatchHistoryList);
