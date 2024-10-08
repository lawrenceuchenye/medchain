import { SignUpSchema, VerificationPayloadSchema } from "./schema";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { APIResponse, toJsonResponse } from "../../utils/response";
import { UserService } from "../../utils/user";
import { generateNonce, SiweMessage } from "siwe";

export const router = new Hono()
	.post("/sign-up", zValidator("json", SignUpSchema), async (c) => {
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
	})
	.post("/nonce", async (c) => c.json({ message: generateNonce() }))
	.post("/verify", zValidator("json", VerificationPayloadSchema), async (c) => {
		const { message, signature } = c.req.valid("json");
		const siweMessage = new SiweMessage(message);
		try {
			await siweMessage.verify({ signature });
			return c.json({ accessToken: "" });
		} catch {
			return c.json({ message: "Verification failed" }, 400);
		}
	});
