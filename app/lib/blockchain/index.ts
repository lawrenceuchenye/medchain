import {
	publicActions,
	createPublicClient,
	createWalletClient,
	custom,
	http,
} from "viem";
import MedChain from "./abis/MedChain";
import { baseSepolia } from "viem/chains";
import { env } from "@/env.mjs";

export const registerNewAccountOnChain = async (
	userAddress: string,
	dataCID: string,
	name: string,
	email: string,
	role: string,
): Promise<string> => {
	try {
		const walletClient = createWalletClient({
			account: env.NEXT_PUBLIC_MEDCHAIN_CONTRACT_ADDRESS as `0x${string}`,
			chain: baseSepolia,
			transport: http(baseSepolia.rpcUrls.default.http[0]),
		});

		const [account] = await walletClient.getAddresses();

		const res = await walletClient.writeContract({
			account,
			address: env.NEXT_PUBLIC_MEDCHAIN_CONTRACT_ADDRESS as `0x${string}`,
			abi: MedChain.abi,
			functionName: "",
			args: [userAddress, dataCID, name, email, role],
		});

		return "";
		// return hash;
	} catch (error: any) {
		console.error("Error registering new account on-chain:", error);
		throw new Error("Blockchain Registration Failed");
	}
};
