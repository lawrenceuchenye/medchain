// lib/blockchain.ts

import {
  publicActions,
  publicClient,
  createPublicClient,
  createWalletClient,
  custom,
  http,
  mainnet,
} from "viem";
import { ethers } from "ethers";
import { abi as MedChainABI } from "../artifacts/contracts/MedChain.sol/MedChain.json";
import { baseSepolia } from "viem/chains";
import { env } from "@/env.mjs";

/**
 * Registers a new user on the blockchain by interacting with the MedChain smart contract.
 * @param contractAddress - The deployed smart contract address.
 * @param userAddress - The Ethereum address of the user.
 * @param dataCID - The CID of the user's data on IPFS.
 * @param name - User's name.
 * @param email - User's email.
 * @param role - User's role (doctor, volunteer, etc.).
 * @returns The transaction hash upon successful registration.
 */
export const registerNewAccountOnChain = async (
  userAddress: string,
  dataCID: string,
  name: string,
  email: string,
  role: string,
): Promise<string> => {
  try {
    // Initialize Wallet Client
    const walletClient = createWalletClient({
      account: {}, // Dynamic.xyz handles the account, so this can be left empty or configured as needed
      chain: baseSepolia,
      transport: http(baseSepolia.rpcUrls.default.http[0]),
    });

    // Define the contract
    const contract = {
      address: env.NEXT_PUBLIC_MEDCHAIN_CONTRACT_ADDRESS,
      abi: MedChainABI,
    };

    // Prepare the transaction data
    const transaction = {
      to: contract.address,
      abi: contract.abi,
      functionName: "registerUser",
      args: [userAddress, dataCID, name, email, role],
    };

    // Send the transaction using the wallet client
    const { hash } = await walletClient.writeContract(transaction);

    // Wait for the transaction to be mined (optional)
    // You can implement a listener or polling mechanism as needed

    return hash;
  } catch (error: any) {
    console.error("Error registering new account on-chain:", error);
    throw new Error("Blockchain Registration Failed");
  }
};
