import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '@redux/store';

import BooksShop from './components/BooksShop';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BooksShop />
      </Provider>
    );
  }
}

export default App;
