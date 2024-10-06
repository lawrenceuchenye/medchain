import type { MedChainUser } from "@/lib/schema";
import { StorageService } from "./storage";

export namespace UserService {
	export const create = async (payload: MedChainUser) =>
		StorageService.upload(payload);
}
