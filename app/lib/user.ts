import { BackendService } from "./backend";
import type { MedChainUser } from "./schema";
import { Result } from "true-myth";

export namespace UserService {
	export type SignUpError = "SIGNUP_FAILED";

	export const signUp = async (
		payload: MedChainUser,
	): Promise<Result<string, SignUpError>> => {
		try {
			const res = await BackendService.client.api.auth["sign-up"].$post({
				json: payload,
			});
			const json = await res.json();
			if (json.variant === "error") return Result.err("SIGNUP_FAILED");
			return Result.ok(json.data.hash);
		} catch (err) {
			return Result.err("SIGNUP_FAILED");
		}
	};
}
