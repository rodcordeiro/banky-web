import ComposeProviders from './composeProviders';

export function Providers({ children }: React.PropsWithChildren) {
	return <ComposeProviders with={[]}>{children}</ComposeProviders>;
}
