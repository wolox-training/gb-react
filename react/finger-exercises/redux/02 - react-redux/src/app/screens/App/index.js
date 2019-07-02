import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '@redux/store';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import { DATA as fakeBooks } from '../../../constants/data';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  state = {
    books: fakeBooks,
    bookSelected: []
  };

  componentDidMount() {
    store.subscribe(() => {
      const { books, bookSelected } = store.getState();
      this.setState({ books, bookSelected });
    });
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

  renderBooks = item => {
    const showButton = !this.state.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Navbar />
          <Book key={this.state.books[0].id} data={this.state.books[0]} configButton={undefined}/>
          <div className={styles.container}>
            <Search onSearch={this.onSearch} />
            {this.state.books.length ? (
              this.state.books.map(this.renderBooks)
            ) : (
              <div className={styles.noData}>
                <h2 className={styles.title}>No Data</h2>
              </div>
            )}
          </div>
          {this.state.bookSelected.length ? (
            <ShoppingCart
              data={this.state.bookSelected}
              addItem={this.addItem}
              removeItem={this.removeItem}
            />
          ) : null}
          <Footer />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
