export const actions = {
  GET_HISTORIC_SUCCESS: '@@TICTACTOE/GET_HISTORIC_SUCCESS',
  GET_HISTORIC_LOADING: '@@TICTACTOE/GET_HISTORIC_LOADING',
  GET_HISTORIC_ERROR: '@@TICTACTOE/GET_HISTORIC_ERROR'
};

const actionsCreators = {
  getHistoric: data => ({
    type: actions.GET_HISTORIC_SUCCESS,
    payload: data
  }),
  getHistoricError: error => ({
    type: actions.GET_HISTORIC_ERROR,
    payload: error
  }),
  getHistoricLoading: () => ({
    type: actions.GET_HISTORIC_LOADING
  })
};

export default actionsCreators;
