import { BackendService } from "./backend";
import type { MedChainUser } from "./schema";
import { Result } from "true-myth";

export namespace IPFSService {
  export type UploadError = "UPLOAD_FAILED";

  export const uploadUserDetails = async (
    userDetails: MedChainUser
  ): Promise<Result<string, UploadError>> => {
    try {
      const res = await BackendService.client.api.user.upload.$post({
        json: userDetails,
      });
      const json = await res.json();
      if (json.variant === "error") return Result.err("UPLOAD_FAILED");
      return Result.ok(json.data.hash);
    } catch (err) {
      return Result.err("UPLOAD_FAILED");
    }
  };
}
