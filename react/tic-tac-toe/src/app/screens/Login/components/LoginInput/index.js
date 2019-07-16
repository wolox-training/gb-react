import React from 'react';

import styles from './styles.module.scss';

function LoginInput({ input, label, type, meta: { error, submitFailed } }) {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        placeholder={label}
        type={type}
        className={styles.loginInput}
      />
      {submitFailed && error && <span>{error}</span>}
    </div>
  );
}

export default LoginInput;
