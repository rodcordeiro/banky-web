import { createBrowserRouter, redirect } from 'react-router-dom';
import { BaseLayout } from '../components/layout/base';
import { authHook } from '@/stores/auth';

const router = createBrowserRouter([
	{
		path: '/',
		element: <BaseLayout />,
		// errorElement: <ErrorPage />,
		loader: () => {
			const auth = authHook().auth as AuthenticatedUser;
			console.log({ auth });
			if (auth === null) return redirect('/login');
			return true;
		},
		children: [
			{
				path: '/',
				async lazy() {
					const { Home } = await import('../features/Home');
					return { Component: Home };
				},
			},
		],
	},
	{
		path: '/login',
		async lazy() {
			const { Login } = await import('../features/Login');
			return { Component: Login };
		},
	},
]);
export { router };
