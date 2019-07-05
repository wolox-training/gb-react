import { actions } from './actions';

const initialState = {
  historicMatches: []
};


function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_HISTORIC:
      return {
        ...state,
        historicMatches: [...action.payload]
      };
    default:
      return state;
  }
}

export default reducer;
