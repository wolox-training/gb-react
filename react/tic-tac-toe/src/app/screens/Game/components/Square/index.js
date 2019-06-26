import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './styles.module.scss';

class Square extends Component {
  handleClick = () => {
    const { onClick, index } = this.props;
    onClick(index);
  }

  render() {
    const { index, value, onClick } = this.props;
    return (
      <button className={styles.square} onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

export default Square;
