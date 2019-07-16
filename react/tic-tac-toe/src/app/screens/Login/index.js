import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import actionCreators from '../../../redux/users/actions';

import styles from './styles.module.scss';
import LoginInput from './components/LoginInput';

class Login extends Component {
  handleSubmit = submitted => {
    this.props.dispatch(actionCreators.logIn({
      email: submitted.email,
      password: submitted.password
    }));
  };

  render() {
    return (
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Login</h1>
        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.loginDetail}>Email</label>
          <Field component={LoginInput} />
          <label className={styles.loginDetail}>Password</label>
          <Field component={LoginInput} />
          <button type="submit" className={styles.loginSubmitButton}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(Login);
