import { PinataSDK } from "pinata-web3";
import { APIResponse, toJsonResponse } from "./response";

const pinata = new PinataSDK({
	pinataJwt: "PINATA_JWT",
	pinataGateway: "example-gateway.mypinata.cloud",
});

export namespace StorageService {
	export const upload = async (payload: any) =>
		await pinata.upload.json(payload);
}
