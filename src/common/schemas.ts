import { z } from 'zod';

export const UsersSchema = z.object({
	id: z.string().uuid(),
	createdAt: z.date(),
	updatedAt: z.date(),
	name: z.string(),
	username: z.string(),
});
export const AuthenticatedUserSchema = z.object({
	accessToken: z.string().optional(),
	refreshToken: z.string().optional().describe('Refresh token'),
	expires: z.number().optional().describe('Expiration date timestamp'),
});

export const accountSchema = z.object({
	id: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	name: z.string(),
	ammount: z.number(),
	threshold: z.number(),
	paymentType: z.object({
		id: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
		name: z.string(),
	}),
});

const categoryCommonPropertiesSchema = z.object({
	id: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	name: z.string(),
	positive: z.boolean(),
	internal: z.boolean(),
});

export const categorySchema = z
	.object({
		subcategories: z.array(categoryCommonPropertiesSchema).optional(),
	})
	.merge(categoryCommonPropertiesSchema);
