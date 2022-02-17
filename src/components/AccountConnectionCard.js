import React, { Fragment } from "react";

import styled from "styled-components";
import { Card, Spin, Space } from "antd";

import { colors } from "../settings/colorPalette";

const StyledCard = styled(Card)`
  background: ${colors.base_opal};
  border-radius: 8px;
  overflow-wrap: break-word;

  .ant-card-head {
    background: ${colors.base_purple};
    border-radius: 8px 8px 0 0;
    font-weight: 600;
    font-size: 16px;
    padding: 8px 0;
  }
  .ant-card-body {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }
`;

const WalletNotification = styled.div`
  p {
    font-size: 14px;
    font-weight: 600;
  }

  span {
    font-size: 10px;
    font-weight: 600;
  }
`;

const StyledButton = styled.button`
  background: ${({ color }) => (color ? color : "")};
  border: none;
  border-radius: 4px;
  color: ${colors.base_onyx};
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  margin: 4px 0;
  padding: 8px 0;
  width: 100%;
`;

const AccountConnectionCard = ({
  walletAddress,
  connectWallet,
  getNftData,
  setWalletAddress,
  isLoading,
}) => {
  return (
    <Fragment>
      {!isLoading ? (
        <StyledCard
          title="Get Connected"
          bordered={false}
          style={{ width: 300 }}
        >
          {walletAddress ? (
            <WalletNotification>
              <p>You are currently connected to this wallet:</p>{" "}
              <span>{walletAddress}</span>
              <StyledButton
                color={colors.base_mint_green}
                onClick={() => setWalletAddress(null)}
              >
                Go Back
              </StyledButton>
            </WalletNotification>
          ) : (
            <Fragment>
              <StyledButton
                color={colors.base_mint_green}
                onClick={connectWallet}
              >
                Connect Wallet
              </StyledButton>
              <StyledButton color={colors.base_yellow} onClick={getNftData}>
                Fetch Sample NFT Collection
              </StyledButton>
            </Fragment>
          )}
        </StyledCard>
      ) : (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      )}
    </Fragment>
  );
};

export default AccountConnectionCard;
