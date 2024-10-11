import { z } from "zod";

export const GetAccessTokenSchema = z.object({
	roomId: z.string(),
});
