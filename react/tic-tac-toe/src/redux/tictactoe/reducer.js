import { actions } from './actions';

const initialState = {
  matchesHistory: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_HISTORIC:
      return {
        ...state,
        matchesHistory: [...action.payload]
      };
    default:
      return state;
  }
}

export default reducer;
