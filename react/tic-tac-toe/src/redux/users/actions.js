export const actions = {
  LOGIN: '@@USERS/LOGIN_SUCCESS',
  LOGIN_ERROR: '@@USERS/LOGIN_ERROR'
};

const actionsCreators = {
  login: data => ({
    type: actions.LOGIN,
    payload: data
  }),
  loginError: () => ({
    type: actions.LOGIN
  })
};

export default actionsCreators;
