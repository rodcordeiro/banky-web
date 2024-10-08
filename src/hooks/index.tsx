import { SnackbarProvider, SnackbarProviderProps } from 'notistack';

import ComposeProviders from './composeProviders';

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<ComposeProviders
			with={[
				{
					Provider: SnackbarProvider,
					properties: {
						preventDuplicate: true,
					} as SnackbarProviderProps,
				},
			]}
		>
			{children}
		</ComposeProviders>
	);
}
