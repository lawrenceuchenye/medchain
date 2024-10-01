import { BackendService } from "./backend";
import type { MedChainUser } from "./schema";
import { Result } from "true-myth";

export namespace IPFSService {
  type UploadError = "UPLOAD_FAILED";

  export const uploadUserDetails = async (
    userDetails: MedChainUser,
  ): Promise<Result<string, UploadError>> => {
    try {
      const res = await BackendService.client.api.user.upload.$post({
        json: userDetails,
      });
      const json = await res.json();
      if (res.status === 500) {
        throw new Error(json.message);
      }
      return Result.ok(json.hash);
    } catch (err) {
      return Result.err("UPLOAD_FAILED");
    }
  };
}
