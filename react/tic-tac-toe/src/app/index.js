import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '../redux/store';

import Routes from './components/Routes';
import Error from './screens/Error';

import '../scss/application.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Routes />
          <Route component={Error} />
        </Switch>
      </Router>
    </Provider>);
}

export default App;
