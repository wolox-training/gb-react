import usersService from '../../services/usersService';
import { GAME_ROUTE } from '../../constants/routes';

import { push } from 'connected-react-router';


export const actions = {
  LOGIN: '@@USERS/LOGIN',
  LOGIN_SUCCESS: '@@USERS/LOGIN_SUCCESS',
  LOGIN_ERROR: '@@USERS/LOGIN_ERROR'
};

const actionsCreators = {
  login: userData => async dispatch => {
    const response = await usersService.userLogin(userData);
    if (response.ok) {
      dispatch({ type: actions.LOGIN_SUCCESS, payload: response.data });
      console.log('aaaa');
      dispatch(push(GAME_ROUTE));
      console.log('AAAAA');
    } else {
      dispatch({ type: actions.LOGIN_ERROR, payload: response });
    }
  }
};

export default actionsCreators;
