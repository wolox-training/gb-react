import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';

import actionsCreators from '../../../../../redux/book/actions';

import styles from '././styles.scss';
import Book from './../Book';
import ShoppingCart from './../ShoppingCart';

class BooksList extends Component {
  state = {
    bookSelected: []
  };

  componentDidMount() {
    this.props.getBooks();
  }

  renderBooks = item => <Book key={item.id} data={item} />;

  render() {
    return (
      <div>
        {this.props.books.length ? (
          this.props.books.map(this.renderBooks)
        ) : (
          <div className={styles.noData}>
            <h2 className={styles.title}>No Data</h2>
          </div>
        )}
        {this.props.bookSelected.length ? <ShoppingCart /> : null}
      </div>
    );
  }
}

BooksList.propTypes = {
  getBooks: func.isRequired,
  books: arrayOf(bookSelectedPropType).isRequired,
  bookSelected: arrayOf(bookSelectedPropType).isRequired
};

const mapStateToProps = state => ({
  books: state.books,
  bookSelected: state.bookSelected
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionsCreators.getBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);
