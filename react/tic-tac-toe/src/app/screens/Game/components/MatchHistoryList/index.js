import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import MatchesService from '../../../../../services/matchesService';
import actionsCreators from '../../../../../redux/tictactoe/actions';
import { parseMatchesResponse } from '../../../../../utils/mappers';

import MatchHistoryEntry from './components/MatchHistoryEntry';


class MatchHistoryList extends Component {
  componentDidMount() {
    this.props.getHistoric();
  }

  render() {
    const { historicEntries } = this.props;
    return historicEntries.map(matchEntry => (
      <MatchHistoryEntry key={matchEntry.date} matchEntry={matchEntry} />
    ));
  }
}

MatchHistoryList.propTypes = {
  getHistoric: PropTypes.func.isRequired,
  historicEntries: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  historicEntries: state.matchesHistory
});

const mapDispatchToProps = dispatch => ({
  getHistoric: async () => {
    const response = await MatchesService.getHistoric();
    const data = get(response, 'data');
    const parsedResponse = data.map(parseMatchesResponse);
    if (response.ok) {
      dispatch(actionsCreators.getHistoric(parsedResponse));
    }
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(MatchHistoryList);
