import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { LOGIN_ROUTE } from '../../../constants/routes';

import { privateRoutes } from './constants/privateRoutes';
import { publicRoutes } from './constants/publicRoutes';

class Routes extends Component {
  render() {
    const { isLoggedIn } = this.props;
    console.log('isLoggedIn', isLoggedIn);
    return <>
      {privateRoutes.map(each => {
        console.log(each);
        return isLoggedIn ? (<Route key={each.path} component={each.component} exact path={each.path} />) : (<Redirect to={LOGIN_ROUTE} />)}
      )}
      {publicRoutes.map(each => (
        <Route
          key={each.path}
          component={each.component}
          path={each.path}
        />
      ))}
      </>;
  }
}

Routes.propTypes = {
  isLoggedIn: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.usersReducer.token
});

export default connect(mapStateToProps)(Routes);
