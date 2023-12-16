import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 1000,
    timeoutErrorMessage: "O JSON não foi encontrado",
})