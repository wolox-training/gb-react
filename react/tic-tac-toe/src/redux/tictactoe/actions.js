export const actions = {
  GET_HISTORIC: '@@TICTACTOE/GET_HISTORIC'
};

const actionsCreators = {
  getHistoric: data => ({
    type: actions.GET_HISTORIC,
    payload: data
  }),
  getHistoricError: error => ({
    type: actions.GET_HISTORIC_ERROR,
    payload: error
  })
};

export default actionsCreators;
