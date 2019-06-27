import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './styles.module.scss';

class Square extends Component {
  handleClick = () => {
    const { onClick, index } = this.props;
    onClick(index);
  }

  render() {
    const { value } = this.props;
    return (
      <button
        type="button"
        className={styles.square} onClick={this.handleClick}
      >
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  index: PropTypes.number,
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
