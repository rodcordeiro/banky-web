import { authHook } from '@/stores/auth';
import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://rodcordeiro:3338/',
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use((req) => {
	const auth = authHook().auth as AuthenticatedUser;
	if (auth.accessToken) {
		req.headers['Authorization'] = `Bearer ${auth.accessToken.toString()}`;
	}
	return req;
});
