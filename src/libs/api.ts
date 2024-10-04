import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://rodcordeiro:3338/',
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use((req) => {
	const token = localStorage.getItem('auth');
	if (token) {
		req.headers['Authorization'] = `Bearer ${token.toString()}`;
	}
	return req;
});
