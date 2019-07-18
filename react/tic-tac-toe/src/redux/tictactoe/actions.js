import matchesService from '../../services/matchesService';
import { parseMatchesResponse } from '../../utils/mappers';

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
  getHistoricLoading: () => dispatch => {
    const response = matchesService.getHistoric();
    if (response.ok) {
      const { data } = response;
      const parsedResponse = data.map(parseMatchesResponse);
      dispatch(actionsCreators.getHistoric(parsedResponse));
    } else {
      dispatch(actionsCreators.getHistoricError(response.error));
    }
  }
};

export default actionsCreators;
