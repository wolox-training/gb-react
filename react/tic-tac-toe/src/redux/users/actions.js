export const actions = {
  LOGIN: '@@USERS/LOGIN_SUCCESS'
};

const actionsCreators = {
  login: data => ({
    type: actions.LOGIN,
    payload: data
  })
};

export default actionsCreators;
