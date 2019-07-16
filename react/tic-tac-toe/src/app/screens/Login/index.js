import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionsCreators from '../../../redux/users/actions';

import Login from './layout';

class LoginContainer extends Component {
  render() {
    return <Login onSubmit={this.handleSubmit} />;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: (email, password) => {
    dispatch(actionsCreators.logIn({ email, password }));
  }
});

export default connect(null, mapDispatchToProps)(LoginContainer);
