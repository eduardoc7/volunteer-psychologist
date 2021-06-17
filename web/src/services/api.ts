import axios from 'axios';

// definindo a URL onde está localizado a nossa API
const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;