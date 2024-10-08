import { api } from '@/libs/api';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import React from 'react';

interface AccountsContextProps {
	accounts: Account[];
}

const AccountsContext = React.createContext({} as AccountsContextProps);

export const AccountsHook = ({ children }: React.PropsWithChildren) => {
	const { enqueueSnackbar } = useSnackbar();
	const [accounts, setAccounts] = React.useState<Account[]>([]);

	React.useEffect(() => {
		api
			.get<Account[]>('/api/v1/accounts')
			.then((res) => {
				setAccounts(res.data.sort((a, b) => (a.name < b.name ? -1 : 1)));
			})
			.catch((err) => enqueueSnackbar((err as AxiosError).message));
	}, []);

	return (
		<AccountsContext.Provider
			value={{
				accounts,
			}}
		>
			{children}
		</AccountsContext.Provider>
	);
};

export function useAccounts() {
	return React.useContext(AccountsContext);
}
