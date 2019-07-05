import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MatchesService from '../../../../../services/MatchesService';
import actionsCreators from '../../../../../redux/tictactoe/actions';

import MatchHistoryEntry from './components/MatchHistoryEntry';

class MatchHistoryList extends Component {
  componentDidMount() {
    this.props.getHistoric();
  }

  render() {
    const { historicEntries } = this.props;
    return historicEntries.map(matchEntry => (
      <MatchHistoryEntry key={matchEntry.id} matchEntry={matchEntry} />
    ));
  }
}

MatchHistoryList.propTypes = {
  getHistoric: PropTypes.func.isRequired,
  historicEntries: PropTypes.isRequired
};

const mapStateToProps = state => ({
  historicEntries: state.matchesHistory
});

const mapDispatchToProps = dispatch => ({
  getHistoric: async () => {
    const response = await MatchesService.getHistoric();
    if (response.ok) {
      dispatch(actionsCreators.getHistoric(response.data));
    }
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(MatchHistoryList);
