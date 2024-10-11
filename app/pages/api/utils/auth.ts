import { env } from "@/env.mjs";
import * as jose from "jose";

export namespace AuthUtils {
	const ALGORITHM = "HS256";
	const SECRET = new TextEncoder().encode(env.JWT_SECRET);

	export const generateAccessToken = async (address: string) => {
		const accessToken = await new jose.SignJWT({
			address,
		})
			.setExpirationTime("1week")
			.setProtectedHeader({ alg: ALGORITHM })
			.sign(SECRET);

		return accessToken;
	};

	export const verifyAccessToken = async (token: string) => {
		const data = await jose.jwtVerify<{ address: string }>(token, SECRET, {
			algorithms: [ALGORITHM],
		});
		return { address: data.payload.address };
	};
}
