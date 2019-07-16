import React from 'react';

import styles from './styles.module.scss';

function LoginInput({ placeholder }) {
  return (
    <>
      <input
        className={styles.loginInput}
        placeholder={placeholder}
      />
    </>
  );
}

export default LoginInput;
