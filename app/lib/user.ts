import { BackendService } from "./backend";
import type { MedChainUser } from "./schema";
import { Result } from "true-myth";

export namespace UserService {
  export type SignUpError = "SIGNUP_FAILED";

  export const signUp = async (payload: MedChainUser) => {
    const res = await BackendService.client.api.auth["sign-up"].$post({
      json: payload,
    });
    const json = await res.json();
    return json;
  };
}
