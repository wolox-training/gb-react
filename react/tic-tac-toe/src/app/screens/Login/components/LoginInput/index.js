import React from 'react';

import styles from './styles.module.scss';

function LoginInput({ type, label, placeholder }) {
  return (
    <>
      <label>{label}</label>
      <input
        className={styles.userInput}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}

export default LoginInput;
