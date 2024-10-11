import type { MiddlewareHandler } from "hono";
import * as jose from "jose";
import { APIResponse, toJsonResponse } from "../utils/response";
import { AuthUtils } from "../utils/auth";

export namespace AuthMiddleware {
	export const verify: MiddlewareHandler<{
		Variables: {
			address: string;
		};
	}> = async (c, next) => {
		const token = c.req.header("Authorization")?.split(" ")[1];
		if (!token)
			return toJsonResponse(
				c,
				APIResponse.err({ message: "No token provided" }, 401),
			);

		const data = await AuthUtils.verifyAccessToken(token);

		c.set("address", data.address);

		return await next();
	};
}
