import { authHook } from '@/stores/auth';
import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://rodcordeiro.com.br:3338/',
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use((req) => {
	const auth = authHook().auth as Auth;
	if (auth?.accessToken) {
		req.headers['Authorization'] = `Bearer ${auth.accessToken.toString()}`;
	}
	return req;
});
