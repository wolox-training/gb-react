import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './styles.module.scss';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button
        className={ styles.square }
        onClick={() => this.setState({ value: 'X' })}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
