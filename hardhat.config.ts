import { baseSepolia } from "viem/chains";
import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import env from "./env";

const config: HardhatUserConfig = {
	solidity: "0.8.27",
	networks: {
		baseSepolia: {
			chainId: baseSepolia.id,
			url: baseSepolia.rpcUrls.default.http[0],
			accounts: {
				mnemonic: env.WALLET_MNEMONIC,
				path: "m/44'/60'/0'/0",
			},
		},
	},
};

export default config;
