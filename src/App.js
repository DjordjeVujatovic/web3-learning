import { useState } from "react";
import styled from "styled-components";
import { Layout } from "antd";

import {
  SAMPLE_WALLET_ADDRESS,
  ETHEREUM_REQUES_ACCOUNTS_METHOD,
  RARIBLE_API_URL,
} from "./settings/constants";
import AccountConnectionCard from "./components/AccountConnectionCard";
import NFTGridContainer from "./components/NFTGridContainer";
import "./App.css";

const { Content } = Layout;

const AppContainer = styled(Content)`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [nftItems, setNftItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: ETHEREUM_REQUES_ACCOUNTS_METHOD,
      });

      setWalletAddress(accounts[0]);
    }
  };

  const getNftData = async () => {
    setIsLoading(true);
    const response = await fetch(`${RARIBLE_API_URL}${SAMPLE_WALLET_ADDRESS}`);

    const data = await response.json();

    setNftItems(data.items);
    setIsLoading(false);
  };

  return (
    <AppContainer className="App">
      {!nftItems ? (
        <AccountConnectionCard
          connectWallet={connectWallet}
          getNftData={getNftData}
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          isLoading={isLoading}
        />
      ) : (
        <NFTGridContainer nftItems={nftItems} />
      )}
    </AppContainer>
  );
}

export default App;
