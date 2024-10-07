import { z } from 'zod';

import { AuthenticatedUserSchema } from '../stores/auth';

declare global {
	export type AuthenticatedUser = z.infer<typeof AuthenticatedUserSchema>;
}

export {};
