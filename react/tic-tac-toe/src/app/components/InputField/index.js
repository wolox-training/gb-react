import React from 'react';

import styles from './styles.module.scss';

function Input({ input, label, type, meta: { error, submitFailed } }) {
  return (
    <div className="column">
      <label className={styles.inputDetail}>{label}</label>
      <input {...input} type={type} className={styles.input} />
      {submitFailed && error && <span>{error}</span>}
    </div>
  );
}

export default Input;
