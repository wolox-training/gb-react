import { get } from 'lodash';

import matchesService from '../../services/matchesService';

export const actions = {
  GET_HISTORIC: '@@TICTACTOE/GET_HISTORIC'
};

const actionsCreators = {
  getHistoric: () => matchesService.getMatches().then(resMatches => {
    const item = get(resMatches, ['data']);
    return {
      type: actions.GET_HISTORIC,
      payload: item
    };
  })
};

export default actionsCreators;
