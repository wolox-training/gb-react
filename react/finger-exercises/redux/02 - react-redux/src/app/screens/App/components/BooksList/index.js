import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DATA as fakeBooks } from '../../../../../constants/data';

import styles from '././styles.scss';
import Book from './../Book';
import ShoppingCart from './../ShoppingCart';

class BooksList extends Component {
  state = {
    books: fakeBooks,
    bookSelected: []
  };

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.state.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <div>
        {this.state.books.length ? (
          this.state.books.map(this.renderBooks)
        ) : (
          <div className={styles.noData}>
            <h2 className={styles.title}>No Data</h2>
          </div>
        )}
        {this.state.bookSelected.length ? (
          <ShoppingCart data={this.state.bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  originalBooks: state.originalBooks
});

export default connect(mapStateToProps)(BooksList);
