import React from 'react';
import { connect } from 'react-redux';
import { func, string, bool } from 'prop-types';

import actionsCreators from '../../../redux/book/actions';

import styles from './styles.scss';

function Button({ text, onClick, className, isDanger, children }) {
  return (
    <button className={`${styles.button} ${isDanger ? styles.danger : ''} ${className}`} onClick={onClick}>
      {text} {children}
    </button>
  );
}

Button.propTypes = {
  text: string,
  onClick: func.isRequired,
  isDanger: bool,
  className: string
};

const mapDispatchToProps = dispatch => ({
  addToCart: book => dispatch(actionsCreators.addToCart(book)),
  removeFromCart: book => dispatch(actionsCreators.removeItem(book))
});

export default connect(mapDispatchToProps)(Button);
