import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import styles from './styles.scss';

class Search extends Component {
  search = e => {
    this.props.onSearch(e.target.value.toLowerCase());
  };

  render() {
    return <input className={styles.input} type="text" placeholder="Search by name" onChange={this.search} />;
  }
}

Search.propTypes = {
  onSearch: func.isRequired
};

const mapStateToProps = state => ({
  onSearch: state.onSearch
});

export default connect(mapStateToProps)(Search);
