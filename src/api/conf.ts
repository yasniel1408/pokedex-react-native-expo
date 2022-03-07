import axios from 'axios';

export const API = process.env.POKEAPI || 'https://pokeapi.co/api/v2/';

const axiosInstance = axios.create({
    baseURL: API,
});

export default axiosInstance;
