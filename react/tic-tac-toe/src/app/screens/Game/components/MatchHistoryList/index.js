import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import MatchesService from '../../../../../services/matchesService';
import actionsCreators from '../../../../../redux/tictactoe/actions';
import { parseMatchesResponse } from '../../../../../utils/mappers';

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
      <div className={styles.matchContainer}>
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
  getHistoric: async () => {
    dispatch(actionsCreators.getHistoricLoading());
    const response = await MatchesService.getHistoric();
    if (response.ok) {
      const { data } = response;
      const parsedResponse = data.map(parseMatchesResponse);
      dispatch(actionsCreators.getHistoric(parsedResponse));
    } else {
      dispatch(actionsCreators.getHistoricError(response.error));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchHistoryList);
