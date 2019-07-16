import { actions } from './actions';

const initialState = {
  user: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
