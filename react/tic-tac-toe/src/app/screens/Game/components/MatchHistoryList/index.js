import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import matchesService from '../../../../../services/matchesService';
import actionsCreator from '../../../../../redux/tictactoe/actions';

import MatchHistoryEntry from './components/MatchHistoryEntry';

class MatchHistoryList extends Component {
  async componentDidMount(dispatch) {
    const response = await matchesService.getHistoric();
    console.warn('response: ', response);
    const matches = get(response);
    if (response.ok) {
      dispatch(actionsCreator.getHistoric(matches));
    } else {
      dispatch(actionsCreator.setUsersError('germo no sabes codear'));
    }
  }

  render() {
    const { historicEntries } = this.props;
    return historicEntries.map(matchEntry => (
      <MatchHistoryEntry key={matchEntry.id} matchEntry={matchEntry} />
    ));
  }
}

MatchHistoryList.propTypes = {
  historicEntries: PropTypes.isRequired
};

const mapStateToProps = state => ({
  historicEntries: state.matchesHistory
});

const mapDispatchToProps = dispatch => ({
  getHistoric: () => dispatch(actionsCreator.getHistoric(dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistoryList);
