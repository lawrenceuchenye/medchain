import { Hono } from "hono";
import { AccessToken, Role } from "@huddle01/server-sdk/auth";
import { APIResponse, toJsonResponse } from "../../utils/response";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { GetAccessTokenSchema } from "./schema";

export const router = new Hono()
	.post("/", async (c) => {
		try {
			const req = await fetch("https://api.huddle01.com/api/v1/create-room", {
				body: JSON.stringify({ title: "Consultation" }),
				headers: {
					"Content-Type": "application/json",
					"x-api-key": process.env.API_KEY as string,
				},
			});

			if (req.status !== 200)
				return toJsonResponse(
					c,
					APIResponse.err({ message: "Failed to create room" }),
				);

			const json = await req.json();
			const { roomId } = z.object({ roomId: z.string() }).parse(json);

			return toJsonResponse(c, APIResponse.ok({ roomId }));
		} catch (error) {
			return toJsonResponse(
				c,
				APIResponse.err({ message: "Failed to create room" }),
			);
		}
	})
	.get(
		"/access-token",
		zValidator("query", GetAccessTokenSchema),
		async (c) => {
			const { roomId } = c.req.valid("query");

			const accessToken = new AccessToken({
				apiKey: env.API_KEY,
				roomId: roomId as string,
				role: Role.HOST,
				permissions: {
					admin: true,
					canConsume: true,
					canProduce: true,
					canProduceSources: {
						cam: true,
						mic: true,
						screen: true,
					},
					canRecvData: true,
					canSendData: true,
					canUpdateMetadata: true,
				},
			});

			const token = await accessToken.toJwt();

			return toJsonResponse(c, APIResponse.ok({ token }));
		},
	);
