import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';

import gameReducer from './tictactoe/reducer';
import usersReducer from './users/reducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ gameReducer, usersReducer, form });

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
