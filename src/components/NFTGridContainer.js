import React from "react";
import styled from "styled-components";
import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";

const Container = styled.div`
  margin: 32px 16px;
`;

const StyledRow = styled(Row)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const NFTGridContainer = ({ nftItems }) => {
  const { Meta } = Card;

  return (
    <Container>
      <StyledRow gutter={[16, 24]}>
        {nftItems.map(({ id, meta: { name, content, description } }) => (
          <Col key={id} className="gutter-row" xs={16} lg={8} xl={4}>
            <Card hoverable cover={<img alt="example" src={content[0].url} />}>
              <Meta title={name} />
            </Card>
          </Col>
        ))}
      </StyledRow>
    </Container>
  );
};

export default NFTGridContainer;
