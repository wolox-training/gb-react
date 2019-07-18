import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { privateRoutes } from './constants/privateRoutes';
import { publicRoutes } from './constants/publicRoutes';


class Routes extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
        <>
          {privateRoutes.map(each => isLoggedIn ? (<Route component={each.component} path={each.path} />) : (<Redirect toPath={each.path} />))}
          {publicRoutes.map(each => (<Route key={each.path} component={each.component} path={each.path} />))}
        </>
    );
  }
}

Routes.propTypes = {
  isLoggedIn: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.usersReducer.token
});

export default connect(mapStateToProps)(Routes);
