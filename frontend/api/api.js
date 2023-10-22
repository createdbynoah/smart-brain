import axios from 'axios';

const api = axios.create({
  baseURL: `http://${import.meta.env.VITE_BACKEND_ROUTE_NAME}:${
    import.meta.env.VITE_BACKEND_PORT
  }/api`,
});

console.log(import.meta.env.VITE_BACKEND_ROUTE_NAME);

console.log(api.defaults.baseURL);

export default api;
