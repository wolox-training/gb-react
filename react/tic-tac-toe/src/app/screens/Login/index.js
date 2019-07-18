import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../redux/users/actions';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = ({ email, password }) => this.props.login({ email, password });

  render() {
    return <Login onSubmit={this.handleSubmit} />;
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(actionsCreators.login(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
