import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreator from '../../../../../redux/tictactoe/actions';

class MatchHistoryList extends Component {
  componentDidMount() {
    this.props.getHistoric();
  }

  render() {
    const { historicEntries } = this.props;
    return historicEntries.map(matchEntry => (
      <MatchHistoryEntry key={matchEntry.timestamp} matchEntry={matchEntry} />
    ));
  }
}

MatchHistoryList.propTypes = {
  getHistoric: PropTypes.func.isRequired,
  historicEntries: PropTypes.isRequired
};

const mapStateToProps = state => ({
  historicEntries: state.matchHistory
});

const mapDispatchToProps = dispatch => ({
  getHistoric: dispatch(actionsCreator.getHistoric())
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchHistoryList);
