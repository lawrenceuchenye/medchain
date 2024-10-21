import { PinataSDK } from "pinata-web3";
import getConfig from "next/config";

let conf = null;
if (getConfig) {
  try {
    const { publicRuntimeConfig } = getConfig();
    conf = publicRuntimeConfig;
  } catch (err) {
    console.log(err);
  }
}

export const pinata = new PinataSDK({
  pinataJwt: conf ? conf.PINATA_JWT : process.env.PINATA_JWT,
  pinataGateway: conf
    ? conf.PINATA_GATEWAY_URL
    : process.env.PINATA_GATEWAY_URL,
});

export namespace StorageService {
  export const upload = (file: File) => pinata.upload.file(file);
  export const retrieve = (hash: string) => pinata.gateways.get(hash);
}
