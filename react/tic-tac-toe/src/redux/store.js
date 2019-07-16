import { createStore, compose, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import gameReducer from './tictactoe/reducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ gameReducer, form });

const store = createStore(rootReducer, composeEnhancers());

export default store;
