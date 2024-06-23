// components/MetaMaskAuth.tsx

import React, { useState } from "react";
import { connectWallet } from "@/lib/utils/connectWallet";
import { ethers } from "ethers";

interface MetaMaskAuthProps {
  onLogin: (account: string, signer: ethers.Signer) => void;
}

const MetaMaskAuth: React.FC<MetaMaskAuthProps> = ({ onLogin }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    const result = await connectWallet();
    if (result.error) {
      setError(result.error);
    } else if (result.account && result.signer) {
      setAccount(result.account);
      onLogin(result.account, result.signer);
    }
  };

  return (
    <div>
      {account ? (
        <p>Connected account: {account}</p>
      ) : (
        <button onClick={handleLogin}>Connect MetaMask</button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MetaMaskAuth;
