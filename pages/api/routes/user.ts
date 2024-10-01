import { MedChainUserSchema } from "@/lib/schema";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { PinataSDK } from "pinata-web3";
import { APIResponse, toJsonResponse } from "../utils/response";
import { Result } from "true-myth";

const pinata = new PinataSDK({
  pinataJwt: "PINATA_JWT",
  pinataGateway: "example-gateway.mypinata.cloud",
});

export const uploadUserDetails = () => {
  console.log("(on the server) Uploading user details to IPFS...");
};

export const router = new Hono().post(
  "/upload",
  zValidator("json", MedChainUserSchema),
  async (c) => {
    const payload = c.req.valid("json");
    try {
      const { IpfsHash: hash } = await pinata.upload.json(payload);
      return c.json({
        message: "User details uploaded successfully",
        hash,
      });
    } catch (e) {
      return c.json({ message: "Failed to upload user details" }, 500);
    }
  },
);
