import { PinataSDK } from "pinata-web3";
import { env } from "@/env.mjs";

const pinata = new PinataSDK({
	pinataJwt: env.PINATA_JWT,
	pinataGateway: env.PINATA_GATEWAY_URL,
});

export namespace StorageService {
	export const upload = (file: File) => pinata.upload.file(file);
	export const retrieve = (hash: string) => pinata.gateways.get(hash);
}
