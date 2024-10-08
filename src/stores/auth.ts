import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type AuthStore = {
	auth: Auth | null;
	setAuth(_auth: Partial<Auth>): void;
	reset(): void;
};

export const useAuth = create(
	persist<AuthStore>(
		(set) => ({
			auth: null,
			setAuth: (auth: Partial<Auth>) =>
				set((state) => ({
					...state,
					auth: {
						...state.auth,
						...auth,
					} as Auth,
				})),
			reset: () => {
				set((state) => ({
					...state,
					auth: null,
				}));
			},
		}),
		{
			name: 'auth',
			storage: createJSONStorage(() => localStorage),
		},
	),
);

export function authHook() {
	return (() => useAuth.getState())() as AuthStore;
}
