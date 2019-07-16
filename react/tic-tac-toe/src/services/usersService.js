import api from '../config/api';

export default {
  userLogin: () => api.post('/login')
};
