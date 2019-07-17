import api from '../config/api';

export default {
  userLogin: userCreds => api.post('/login', userCreds)
};
