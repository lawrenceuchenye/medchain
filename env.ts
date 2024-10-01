import { z } from "zod";

export default z
	.object({
		WALLET_MNEMONIC: z.string(),
	})
	.parse(process.env);
