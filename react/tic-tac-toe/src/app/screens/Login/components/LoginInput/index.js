import React from 'react';

import styles from './styles.module.scss';

function LoginInput({ input, type, meta: { error, submitFailed } }) {
  return (
    <div>
      <input
        {...input}
        type={type}
        className={styles.loginInput}
      />
      {submitFailed && error && <span>{error}</span>}
    </div>
  );
}

export default LoginInput;
