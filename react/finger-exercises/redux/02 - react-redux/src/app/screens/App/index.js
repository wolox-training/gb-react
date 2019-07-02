import React, { Component, Fragment } from 'react';
import store from '@redux/store';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import Book from './components/Book';
import Search from './components/Search';
import BookList from './components/BookList';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {

  componentDidMount() {
    store.subscribe(() => {
      const { books, bookSelected } = store.getState();
      this.setState({ books, bookSelected });
    });
    // TODO to implement the dispatch
  }

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

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Navbar />
          <div className={styles.container}>
            <Search onSearch={this.onSearch} />
            <BookList />
          </div>
          {/* {this.state.bookSelected.length ? (
            <ShoppingCart
              data={this.state.bookSelected}
              addItem={this.addItem}
              removeItem={this.removeItem}
            />
          ) : null} */}
          <Footer />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
