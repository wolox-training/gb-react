import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from '../redux/store';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import Error from './screens/Error';
import '../scss/application.scss';
import { privateRoutes } from './components/AuthenticatedRoute/constants/privateRoutes';
import { publicRoutes } from './components/AuthenticatedRoute/constants/publicRoutes';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <AuthenticatedRoute exact component={privateRoutes.GAME.component} path={privateRoutes.GAME.path} />
          <AuthenticatedRoute
            exact
            component={privateRoutes.RECORDS.component}
            path={privateRoutes.RECORDS.path}
          />
          <Route exact component={publicRoutes.LOGIN.component} path={publicRoutes.LOGIN.path} />
          <Route component={Error} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
