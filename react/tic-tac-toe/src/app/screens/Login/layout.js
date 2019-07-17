import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { hasLength, isRequired, isValidEmail } from '../../../utils/Validations';

import styles from './styles.module.scss';
import LoginInput from './components/LoginInput';

function Login({ handleSubmit }) {
  return (
    <div className={`${styles.column} ${styles.middle}`}>
      <h1 className={styles.loginTitle}>Login</h1>
      <form className={`${styles.column} ${styles.middle}`} onSubmit={handleSubmit}>
        <label className={styles.loginDetail}>Email</label>
        <Field
          name="email"
          type="text"
          label="Email"
          component={LoginInput}
          validate={[isValidEmail, isRequired]}
        />
        <label className={styles.loginDetail}>Password</label>
        <Field
          name="password"
          type="text"
          label="Password"
          component={LoginInput}
          validate={[isRequired, hasLength]}
        />
        <button type="submit" className={styles.loginSubmitButton}>
          Submit
        </button>
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
