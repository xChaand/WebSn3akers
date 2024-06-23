import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export const connectWallet = async () => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
  }
};
