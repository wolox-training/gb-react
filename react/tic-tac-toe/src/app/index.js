import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '../redux/store';

import Game from './screens/Game';
import Error from './screens/Error';
import Login from './screens/Login';
import MatchHistoryList from './screens/MatchHistoryList';

import '../scss/application.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/records" component={MatchHistoryList} />
          <Route component={Error} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
