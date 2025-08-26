import axios from 'axios';

const api = axios.create({ baseURL: '/api', withCredentials: true });

api.interceptors.response.use(
  r => r,
  async (error) => {
    const originalReq = error.config;
    if (error.response.status === 401 && !originalReq._retry) {
      originalReq._retry = true;
      await api.post('/auth/refresh'); // refresh token endpoint
      return api(originalReq);
    }
    return Promise.reject(error);
  }
);

export default api;
