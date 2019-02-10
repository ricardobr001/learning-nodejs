import axios from 'axios';

// Seting the base url that out api is going to call
const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export default api;