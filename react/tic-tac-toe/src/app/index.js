import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from '../redux/store';

import Game from './screens/Game';

import '../scss/application.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/index" component={Game}>
          <Game />
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
