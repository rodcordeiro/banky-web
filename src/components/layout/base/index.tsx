import React from 'react';
import { Outlet } from 'react-router-dom';

import Providers from '@/hooks/composeProviders';
import { Header } from '@/components/layout/Header';

import { AccountsHook } from '@/hooks/Accounts';
import { CategoriesHook } from '@/hooks/Categories';

export const BaseLayout = () => {
	const [sidebarVisible, setSidebarVisible] = React.useState<boolean>(false);
	const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
	return (
		<Providers
			with={[
				{
					Provider: AccountsHook,
				},
				{
					Provider: CategoriesHook,
				},
			]}
		>
			<div>
				<Header toggleSidebar={toggleSidebar} />
				<main>
					<Outlet />
				</main>
			</div>
		</Providers>
	);
};
