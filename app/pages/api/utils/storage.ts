import { PinataSDK } from "pinata-web3";
import { env } from "@/env.mjs";

const pinata = new PinataSDK({
	pinataJwt: env.PINATA_JWT,
	pinataGateway: "example-gateway.mypinata.cloud",
});

export namespace StorageService {
	export const upload = async (payload: any) =>
		await pinata.upload.json(payload);
}
