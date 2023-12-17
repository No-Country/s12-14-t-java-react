import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

export const pageApi = axios.create({
    baseURL : VITE_API_URL
});
// console.log(import.meta.env.VITE_API_URL)

// configurar interceptores
pageApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }

    return config;
})