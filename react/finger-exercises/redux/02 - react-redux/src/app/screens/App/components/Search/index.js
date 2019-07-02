import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import actionCreators from '../../../../../redux/book/actions';

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

const mapDispatchToProps = dispatch => ({
  search: itemId => dispatch(actionCreators.searchBook(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
