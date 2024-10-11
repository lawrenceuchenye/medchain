import { SignUpSchema, VerificationPayloadSchema } from "./schema";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { APIResponse, toJsonResponse } from "../../utils/response";
import { UserService } from "../../utils/user";
import { generateNonce, SiweMessage, type SiweResponse } from "siwe";
import { AuthUtils } from "../../utils/auth";

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
		let siweResponse: SiweResponse;
		try {
			siweResponse = await siweMessage.verify({ signature });
		} catch {
			return c.json({ message: "Verification failed" }, 400);
		}

		const accessToken = await AuthUtils.generateAccessToken(
			siweResponse.data.address,
		);

		return c.json({ accessToken });
	});
