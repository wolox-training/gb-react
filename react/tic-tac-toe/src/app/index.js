import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '../redux/store';

import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import Error from './screens/Error';
import Login from './screens/Login';

import '../scss/application.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <AuthenticatedRoutes />
          <Route component={Error} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
