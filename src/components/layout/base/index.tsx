import React from 'react';
import { Outlet } from 'react-router-dom';

import Providers from '@/hooks/composeProviders';
import { Header } from '@/components/layout/Header';

import { AccountsHook } from '@/hooks/Accounts';
import { CategoriesHook } from '@/hooks/Categories';

export const BaseLayout = () => {
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
				{/* <Header toggleSidebar={toggleSidebar} /> */}
				<main className="flex row overflow-hidden h-screen w-screen">
					<aside className="bg-electric-violet-950 w-1/5  h-screen text-white px-10 py-4 flex column items-center justify-between">
						<ul>
							<li>Home</li>
							<li>Contas</li>
							<li>Categorias</li>
							<li>Transações</li>
						</ul>
					</aside>
					<Outlet />
				</main>
			</div>
		</Providers>
	);
};
