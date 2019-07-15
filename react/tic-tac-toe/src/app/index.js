import React from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store';

import Game from './screens/Game';

import '../scss/application.scss';

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
