import { actions } from './actions';

const initialState = {
  token: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      return { ...state, token: action.payload };
    }
    case actions.LOGIN_ERROR: {
      return { ...state };
    }
    default:
      return state;
  }
}

export default reducer;
