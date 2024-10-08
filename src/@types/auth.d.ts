import { z } from 'zod';

import {
	accountSchema,
	AuthenticatedUserSchema,
	categorySchema,
	UsersSchema,
} from '../common/schemas';

declare global {
	export type Authentication = z.infer<typeof AuthenticatedUserSchema>;
	export type User = z.infer<typeof UsersSchema>;
	export type Account = z.infer<typeof accountSchema>;
	export type Category = z.infer<typeof categorySchema>;

	export type Auth = Authentication & User;
}

export {};
