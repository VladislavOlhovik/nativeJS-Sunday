import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '?apikey=a55cbf4a';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`${key}&s=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`${key}&s=${title}&type=${type}`)
        .then(respons=>{
            return respons.data
        })
    }
};


export default API;