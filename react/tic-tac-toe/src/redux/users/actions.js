import { push } from 'connected-react-router';

import usersService from '../../services/usersService';
import { GAME_ROUTE } from '../../constants/routes';

export const actions = {
  LOGIN: '@@USERS/LOGIN',
  LOGIN_SUCCESS: '@@USERS/LOGIN_SUCCESS',
  LOGIN_ERROR: '@@USERS/LOGIN_ERROR'
};

const actionsCreators = {
  login: userData => async dispatch => {
    const response = await usersService.userLogin(userData);
    if (response.ok) {
      localStorage.setItem('token', response.data);
      dispatch({ type: actions.LOGIN_SUCCESS, payload: response.data });
      dispatch(push(GAME_ROUTE));
    } else {
      dispatch({ type: actions.LOGIN_ERROR, payload: response });
    }
  }
};

export default actionsCreators;
