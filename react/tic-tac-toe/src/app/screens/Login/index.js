import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './styles.module.scss';

class Login extends Component {
  handleSubmit = () => 1;

  render() {
    return (
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Login</h1>
        <form>
          <label>Email</label>
          <Field
            name="Email"
            component="input"
            type="text"
            placeholder="Email"
            class={styles.userInfo}
          />
          <label>Password</label>
          <Field
            name="Password"
            component="input"
            type="text"
            placeholder="Password"
            class={styles.userInfo}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login'
})(Login);
