import api from '../config/api';

export default {
  getHistoric: () => api.get('/matches')
};
