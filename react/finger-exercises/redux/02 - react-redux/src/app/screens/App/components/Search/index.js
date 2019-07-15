import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

<<<<<<< HEAD
import { actionsCreators as bookActions } from '../../../../../redux/book/actions';
=======
import actionCreators from '../../../../../redux/book/actions';
>>>>>>> f984ac2f88ec2b48c931d8dc5b694a434e18966d

import styles from './styles.scss';

class Search extends Component {
  search = e => {
    this.props.search(e.target.value.toLowerCase());
  };

  render() {
    return <input className={styles.input} type="text" placeholder="Search by name" onChange={this.search} />;
  }
}

Search.propTypes = {
  search: func.isRequired
};

const mapStateToProps = state => ({
  onSearch: state.onSearch
});

const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD
  search: itemId => dispatch(bookActions.searchBook(itemId))
=======
  search: itemId => dispatch(actionCreators.searchBook(itemId))
>>>>>>> f984ac2f88ec2b48c931d8dc5b694a434e18966d
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
