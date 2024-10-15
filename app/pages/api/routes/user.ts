import { Hono } from "hono";
import { AuthMiddleware } from "../middleware/auth";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { APIResponse, toJsonResponse } from "../utils/response";
import { StorageService } from "../utils/storage";
import { Result } from "true-myth";
import type { GetCIDResponse } from "pinata-web3";
import { type MedChainUser, MedChainUserSchema } from "@/lib/schema";

type RetrieveUserError = "PARSE_ERROR" | "STORAGE_ERROR";

const retrieveUser = async (
	hash: string,
): Promise<Result<MedChainUser, RetrieveUserError>> => {
	let storageRetrievalResponse: GetCIDResponse;

	try {
		storageRetrievalResponse = await StorageService.retrieve(hash);
	} catch (err) {
		return Result.err("STORAGE_ERROR");
	}

	const parseResult = z
		.object({
			data: z.instanceof(File),
			conentType: z.literal("application/json"),
		})
		.safeParse(storageRetrievalResponse);

	if (parseResult.success === false) {
		return Result.err("PARSE_ERROR");
	}

	let json: unknown;
	try {
		json = JSON.parse(await parseResult.data.data.text());
	} catch (err) {
		return Result.err("PARSE_ERROR");
	}

	const userParseResult = MedChainUserSchema.safeParse(json);
	if (userParseResult.success === false) {
		return Result.err("PARSE_ERROR");
	}

	return Result.ok(userParseResult.data);
};

export const router = new Hono()
	.use(AuthMiddleware.verify)
	.get(
		"/",
		zValidator("query", z.object({ hashes: z.array(z.string()) })),
		async (c) => {
			const payload = c.req.valid("query");
			return toJsonResponse(
				c,
				APIResponse.ok(await Promise.all(payload.hashes.map(retrieveUser))),
			);
		},
	);
