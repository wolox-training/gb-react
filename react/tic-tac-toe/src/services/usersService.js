import api from '../config/api';

export default {
  userLogin: (data) => api.post('/login')
};
