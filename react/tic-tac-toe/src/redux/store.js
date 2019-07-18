import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import gameReducer from './tictactoe/reducer';
import usersReducer from './users/reducer';

export const history = createBrowserHistory();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  gameReducer,
  usersReducer,
  form,
  router: connectRouter(history)
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)));

export default store;
