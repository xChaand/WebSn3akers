// utils/connectWallet.ts

import { ethers } from "ethers";

export const connectWallet = async (): Promise<{
  account?: string;
  signer?: ethers.Signer;
  error?: string;
}> => {
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      return { account: accounts[0], signer };
    } catch (error) {
      console.error("User denied account access", error);
      return { error: "User denied account access" };
    }
  } else {
    return { error: "MetaMask is not installed" };
  }
};
