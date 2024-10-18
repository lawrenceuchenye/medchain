import { PinataSDK } from "pinata-web3";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const pinata = new PinataSDK({
  pinataJwt: publicRuntimeConfig.PINATA_JWT,
  pinataGateway: publicRuntimeConfig.PINATA_GATEWAY_URL,
});

export namespace StorageService {
  export const upload = (file: File) => pinata.upload.file(file);
  export const retrieve = (hash: string) => pinata.gateways.get(hash);
}
