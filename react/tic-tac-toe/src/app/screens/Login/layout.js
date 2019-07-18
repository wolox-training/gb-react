import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { validateEmail, validatePassword } from '../../../utils/Validations';

import styles from './styles.module.scss';
import LoginInput from './components/LoginInput';

function Login({ handleSubmit }) {
  return (
    <div className="column middle">
      <h1 className={styles.loginTitle}>Login</h1>
      <Form className="column middle" onSubmit={handleSubmit}>
        <label className={styles.loginDetail}>Email</label>
        <Field name="email" type="text" label="Email" component={LoginInput} validate={validateEmail} />
        <label className={styles.loginDetail}>Password</label>
        <Field name="password" type="text" label="Password" component={LoginInput} validate={validatePassword} />
        <button type="submit" className={styles.loginSubmitButton}>
          Submit
        </button>
      </Form>
    </div>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(Login);
