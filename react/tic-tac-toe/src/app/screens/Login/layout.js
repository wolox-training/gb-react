import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { validateEmail, validatePassword } from '../../../utils/Validations';
import Input from '../../components/InputField';

import styles from './styles.module.scss';

function Login({ handleSubmit }) {
  return (
    <div className="column middle">
      <h1 className={styles.loginTitle}>Login</h1>
      <Form className="column middle" onSubmit={handleSubmit}>
        <Field name="email" type="text" label="Email" component={Input} validate={validateEmail} />
        <Field name="password" type="text" label="Password" component={Input} validate={validatePassword} />
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
