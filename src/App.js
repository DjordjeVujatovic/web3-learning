import { useState, useEffect } from "react";
import {
  SAMPLE_WALLET_ADDRESS,
  ETHEREUM_REQUES_ACCOUNTS_METHOD,
  RARIBLE_API_URL,
} from "./constants/index";
import "./App.css";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [nftItems, setNftItems] = useState(null);

  console.log(nftItems);
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: ETHEREUM_REQUES_ACCOUNTS_METHOD,
      });

      setWalletAddress(accounts[0]);
    }
  };

  const getNftData = async () => {
    if (!walletAddress) return;

    const response = await fetch(`${RARIBLE_API_URL}${SAMPLE_WALLET_ADDRESS}`);

    const data = await response.json();

    setNftItems(data.items);
  };

  useEffect(() => {
    getNftData();
  }, [walletAddress]);

  return (
    <div className="App">
      <div>Account: {walletAddress}</div>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}

export default App;
