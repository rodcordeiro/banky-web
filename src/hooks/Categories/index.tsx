import { api } from '@/libs/api';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import React from 'react';

interface CategoriesContextProps {
	Categories: Category[];
}

const CategoriesContext = React.createContext({} as CategoriesContextProps);

export const CategoriesHook = ({ children }: React.PropsWithChildren) => {
	const { enqueueSnackbar } = useSnackbar();
	const [Categories, setCategories] = React.useState<Category[]>([]);

	React.useEffect(() => {
		api
			.get<Category[]>('/api/v1/categories')
			.then((res) => {
				setCategories(res.data.sort((a, b) => (a.name < b.name ? -1 : 1)));
			})
			.catch((err) => enqueueSnackbar((err as AxiosError).message));
	}, []);

	return (
		<CategoriesContext.Provider
			value={{
				Categories,
			}}
		>
			{children}
		</CategoriesContext.Provider>
	);
};

export function useCategories() {
	return React.useContext(CategoriesContext);
}
