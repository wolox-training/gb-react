import { createStore, compose } from 'redux';

import reducer from './tictactoe/reducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = { ...reducer };
const store = createStore(rootReducer, composeEnhancers());

export default store;
