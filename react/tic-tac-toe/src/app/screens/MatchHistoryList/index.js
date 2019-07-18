import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import actionsCreators from '../../../redux/tictactoe/actions';

import styles from './styles.module.scss';
import MatchHistoryHeader from './components/MatchHistoryHeader';
import MatchHistoryEntry from './components/MatchHistoryEntry';

class MatchHistoryList extends Component {
  componentDidMount() {
    this.props.getHistoric();
  }

  render() {
    const { historicEntries, loading } = this.props;
    return loading ? (
      <Spinner name="circle" />
    ) : (
      <div className={`${styles.column} ${styles.matchContainer}`}>
        <MatchHistoryHeader />
        {historicEntries.map(matchEntry => (
          <MatchHistoryEntry key={matchEntry.date} matchEntry={matchEntry} />
        ))}
      </div>
    );
  }
}

MatchHistoryList.propTypes = {
  getHistoric: PropTypes.func.isRequired,
  historicEntries: PropTypes.arrayOf(
    PropTypes.shape({
      firstPlayer: PropTypes.string,
      secondPlayer: PropTypes.string,
      winner: PropTypes.string
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  historicEntries: state.gameReducer.matchesHistory,
  loading: state.gameReducer.matchHistoryLoading
});

const mapDispatchToProps = dispatch => ({
  getHistoric: () => dispatch(actionsCreators.getHistoricLoading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchHistoryList);
