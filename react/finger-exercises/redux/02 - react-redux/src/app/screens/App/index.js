import React, { Component, Fragment } from 'react';
import { Provider } from 'redux-react';
import store from '@redux/store';

import BooksShop from './components/BooksShop';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BooksShop />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
