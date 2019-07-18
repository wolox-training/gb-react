import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LOGIN_ROUTE } from '../../../constants/routes';

function AuthenticatedRoute({ isLoggedIn, exact, component, path }) {
  const exactObject = { exact };
  return isLoggedIn ? (
    <Route component={component} {...exactObject} path={path} />
  ) : (
    <Redirect to={LOGIN_ROUTE} />
  );
}

AuthenticatedRoute.propTypes = {
  isLoggedIn: PropTypes.string.isRequired,
  component: PropTypes.elementType,
  exact: PropTypes.bool,
  path: PropTypes.string
};

const mapStateToProps = state => ({
  isLoggedIn: state.usersReducer.token
});

export default connect(mapStateToProps)(AuthenticatedRoute);
