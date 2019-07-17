import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    const { token } = this.props;
    if (token) {
      return <Redirect to="/game" />;
    }
    return <Login onSubmit={this.handleSubmit} />;
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  token: PropTypes.string
};

const mapStateToProps = state => ({
  token: state.usersReducer.token
});

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(actionsCreators.login(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
