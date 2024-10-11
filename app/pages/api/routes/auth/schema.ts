import { MedChainUserSchema } from "@/lib/schema";
import { z } from "zod";

export const SignUpSchema = MedChainUserSchema;

export const VerificationPayloadSchema = z.object({
	signature: z.string(),
	message: z.string(),
});
