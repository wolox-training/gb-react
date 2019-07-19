import matchesService from '../../services/matchesService';
import { parseMatchesResponse } from '../../utils/mappers';

export const actions = {
  GET_HISTORIC_SUCCESS: '@@TICTACTOE/GET_HISTORIC_SUCCESS',
  GET_HISTORIC_LOADING: '@@TICTACTOE/GET_HISTORIC_LOADING',
  GET_HISTORIC_ERROR: '@@TICTACTOE/GET_HISTORIC_ERROR'
};

const privateActionCreators = {
  getHistoricSuccess: data => ({
    type: actions.GET_HISTORIC_SUCCESS,
    payload: data
  }),
  getHistoricLoading: loading => ({
    type: actions.GET_HISTORIC_LOADING,
    payload: loading
  }),
  getHistoricFailure: error => ({
    type: actions.GET_HISTORIC_ERROR,
    payload: error
  })
};

const actionsCreators = {
  getHistoric: () => async dispatch => {
    dispatch(privateActionCreators.getHistoricLoading(true));
    const response = await matchesService.getHistoric();

    if (response.ok) {
      const { data } = response;
      const parsedResponse = data.map(parseMatchesResponse);
      dispatch(privateActionCreators.getHistoricSuccess(parsedResponse));
    } else {
      dispatch(privateActionCreators.getHistoricError(response.error));
    }
  }
};

export default actionsCreators;
