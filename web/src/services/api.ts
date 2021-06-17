import axios from 'axios';

// definindo a URL onde está localizado a nossa API
const api = axios.create({
  baseURL: window.location.hostname.includes('localhost')
    ? 'http://localhost:3333'
    : 'https://volunteer-psychologist.herokuapp.com'
});

export default api;