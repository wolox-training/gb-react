import { actions } from './actions';

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
