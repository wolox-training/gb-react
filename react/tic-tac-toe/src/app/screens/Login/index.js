import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import LoginInput from './components/LoginInput';

class Login extends Component {
  handleSubmit = () => 1;

  render() {
    return (
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Login</h1>
        <form styles={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.loginDetail}>Email</label>
          <Field component={LoginInput} placeholder="Email" />
          <label className={styles.loginDetail}>Password</label>
          <Field component={LoginInput} placerholder="Password" />
          <button type="submit" className={styles.loginSubmitButton}>
            Submit
          </button>
        </form>
      </div>);
  }
}

Login.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(Login);
