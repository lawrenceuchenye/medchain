import { BackendService } from "./backend";
import { Result } from "true-myth";

export namespace ConsultationService {
	export type CreateRoomError = "CREATE_ROOM_FAILED";
	export type GetAccessTokenError = "GET_ACCESS_TOKEN_FAILED";

	export const createRoom = async (): Promise<
		Result<string, CreateRoomError>
	> => {
		try {
			const res = await BackendService.client.api.consultations.$post();
			const json = await res.json();
			if (json.variant === "error") return Result.err("CREATE_ROOM_FAILED");
			return Result.ok(json.data.roomId);
		} catch (err) {
			return Result.err("CREATE_ROOM_FAILED");
		}
	};

	export const getAccessToken = async (
		roomId: string,
	): Promise<Result<string, GetAccessTokenError>> => {
		try {
			const res = await BackendService.client.api.consultations[
				"access-token"
			].$get({
				query: { roomId },
			});
			const json = await res.json();
			if (json.variant === "error")
				return Result.err("GET_ACCESS_TOKEN_FAILED");
			return Result.ok(json.data.token);
		} catch (err) {
			return Result.err("GET_ACCESS_TOKEN_FAILED");
		}
	};
}
