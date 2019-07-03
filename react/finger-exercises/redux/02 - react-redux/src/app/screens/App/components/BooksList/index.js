import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  renderBooks = item => {
    return <Book key={item.id} data={item} />;
  };

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
        {this.props.bookSelected.length ? (
          <ShoppingCart />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  originalBooks: state.originalBooks,
  bookSelected: state.bookSelected
});

const mapDispatchToProps = dispatch => ({
  addItem: itemId => dispatch(actionsCreators.addItem(itemId)),
  removeItem: itemId => dispatch(actionsCreators.removeItem(itemId)),
  getBooks: () => dispatch(actionsCreators.getBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);
