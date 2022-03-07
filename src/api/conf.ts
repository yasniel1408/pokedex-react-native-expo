import axios from 'axios';
import axiosHeaders from './helpers/axiosHeaders';

export const API = process.env.POKEAPI || 'https://pokeapi.co/api/v2/';

const axiosInstance = axios.create({
    baseURL: API,
});

axiosInstance.interceptors.request.use(
    (request: any) => {
        request.headers = axiosHeaders;
        //   if (isLoggedIn()) {
        //     request.headers.authorization = `Bearer ${
        //       getToken() || getTokenSession()
        //     }`;
        //   }
        return request;
    },
    (error: Error) => Promise.reject(error),
);

export default axiosInstance;
