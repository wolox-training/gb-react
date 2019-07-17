import { actions } from './actions';

const initialState = {
  userToken: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN: {
      return { ...state, userToken: actions.payload };
    }
    case actions.LOGIN_SUCCESS: {
      return { ...state, userToken: actions.payload };
    }
    case actions.LOGIN_ERROR: {
      return { ...state, error: actions.payload };
    }
    default:
      return state;
  }
}

export default reducer;
