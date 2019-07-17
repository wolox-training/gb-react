import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../redux/users/actions';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = submitted => {
    this.props.login({
      email: submitted.email,
      password: submitted.password
    });
  };

  render() {
    return <Login onSubmit={this.handleSubmit} />;
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userToken: state.userToken
});

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(actionsCreators.login(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
