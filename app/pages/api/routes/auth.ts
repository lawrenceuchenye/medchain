import { MedChainUserSchema } from "@/lib/schema";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { APIResponse, toJsonResponse } from "../utils/response";
import { UserService } from "../utils/user";

export const router = new Hono().post(
	"/sign-up",
	zValidator("json", MedChainUserSchema),
	async (c) => {
		const payload = c.req.valid("json");
		try {
			const { IpfsHash } = await UserService.create(payload);
			return toJsonResponse(
				c,
				APIResponse.ok({
					message: "Sign up successful",
					hash: IpfsHash,
				}),
			);
		} catch (e) {
			return toJsonResponse(c, APIResponse.err({ message: "Sign up failed" }));
		}
	},
);
