import { actions } from './actions';

const initialState = {
  matchesHistory: [],
  matchHistoryLoading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_HISTORIC_SUCCESS:
      return {
        ...state,
        matchesHistory: [...action.payload],
        matchHistoryLoading: false
      };
    case actions.GET_HISTORIC_LOADING:
      return {
        ...state,
        matchHistoryLoading: true
      };
    case actions.GET_HISTORIC_ERROR:
      return {
        ...state,
        matchHistoryError: [...action.payload],
        matchHistoryLoading: false
      };
    default:
      return state;
  }
}

export default reducer;
