import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { z } from 'zod';

export const AuthenticatedUserSchema = z.object({});

export type AuthStore = {
	auth: AuthenticatedUser | null;
	setAuth(_auth: Partial<AuthenticatedUser>): void;
	reset(): void;
};

export const useAuth = create(
	persist<AuthStore>(
		(set) => ({
			auth: null,
			setAuth: (auth: Partial<AuthenticatedUser>) =>
				set((state) => ({
					...state,
					auth: { ...state.auth, ...auth },
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
