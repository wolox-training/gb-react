import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MatchHistoryList from '../../screens/MatchHistoryList';
import Game from '../../screens/Game';

class AuthenticatedRoutes extends Component {
  routes = [
    { path: '/game', component: Game },
    { path: '/records', component: MatchHistoryList }
  ];

  render() {
    return this.props.token ? this.routes.map(each => (
      <Route
        key={each.path}
        path={each.path}
        component={each.component}
      />
    )) : (<Redirect to="/" />);
  }
}

AuthenticatedRoutes.propTypes = {
  token: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  token: state.usersReducer.token
});

export default connect(mapStateToProps)(AuthenticatedRoutes);
