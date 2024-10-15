import { api } from '@/libs/api';
import { useAuth } from '@/stores/auth';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function useLoginHook() {
	const { enqueueSnackbar } = useSnackbar();
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const [loading, setLoading] = React.useState<boolean>(false);
	const [username, setUsername] = React.useState<string>();
	const [password, setPassword] = React.useState<string>();

	const handleAuth = React.useCallback(async () => {
		setLoading(true);
		await api
			.post<Authentication>('api/v1/auth/login', { username, password })
			.then(({ data }) => {
				api.defaults.headers['Authorization'] = 'Bearer ' + data.accessToken;
				setAuth(data);
			})
			.catch((err) => {
				enqueueSnackbar((err as Error).message, { variant: 'error' });
				setLoading(false);
			});
		await api
			.get<User[]>('api/v1/users/me')
			.then(({ data }) => {
				if (!data.length)
					return void enqueueSnackbar({
						message: 'User not found',
						variant: 'error',
					});
				setAuth(data[0]);
			})
			.finally(() => {
				setLoading(false);
				navigate('/');
			});
	}, [username, password]);

	const handleUpdateUsername = React.useCallback(
		(evt: React.ChangeEvent<HTMLInputElement>) => {
			return void setUsername(evt.target.value);
		},
		[],
	);

	const handleUpdatePassword = React.useCallback(
		(evt: React.ChangeEvent<HTMLInputElement>) => {
			return void setPassword(evt.target.value);
		},
		[],
	);

	return {
		loading,
		username,
		password,
		handleUpdateUsername,
		handleUpdatePassword,
		handleAuth,
	};
}
