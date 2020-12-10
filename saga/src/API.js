import axios from 'axios';

const configOMB = {
	baseURL: 'http://www.omdbapi.com/',
};
const key = '?apikey=995f97b1';
const axiosInstance = axios.create(configOMB);

const API = {
	searchFilmsByTitle: (title) => {
		const query = `${key}&s=${title}`;
		return axiosInstance.get(query);
	},
};


export default API;