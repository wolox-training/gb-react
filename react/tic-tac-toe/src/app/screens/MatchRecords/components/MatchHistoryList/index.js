import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../../../redux/tictactoe/actions';

import MatchHistoryList from './layout';

class MatchHistoryListContainer extends Component {
  componentDidMount() {
    this.props.getHistoric();
  }

  render() {
    const { historicEntries, loading } = this.props;

    return <MatchHistoryList loading={loading} historicEntries={historicEntries} />;
  }
}

MatchHistoryListContainer.propTypes = {
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
  getHistoric: () => dispatch(actionsCreators.getHistoric())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchHistoryListContainer);
