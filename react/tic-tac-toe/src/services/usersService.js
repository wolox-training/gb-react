import api from '../config/api';

export default {
  userLogin: credentials => api.post('/login', credentials)
};
