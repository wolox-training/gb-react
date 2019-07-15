import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import LoginInput from './components/LoginInput';

function Login() {
  // const { handleSubmit } = props;

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Login</h1>
      <form>
        <label>Email</label>
        <Field component={LoginInput} />
        <label>Password</label>
        <Field component={LoginInput} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(Login);
