import React from "react";
import { Transfer } from "styled-icons/boxicons-regular/Transfer";
import { TransferAlt } from "styled-icons/boxicons-regular/TransferAlt";
import { TransferWithinAStation } from "styled-icons/material/TransferWithinAStation";
import { List } from "styled-icons/material/List";
import { Row, Col } from "react-bootstrap";

import LinkBox from "./LinkBox";

const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <LinkBox to="/transfer">
            <Transfer size={60} />
            Own Account Transfer
          </LinkBox>
        </Col>
        <Col>
          <LinkBox to="#">
            <TransferWithinAStation size={60} />
            Other Accounts Transfer
          </LinkBox>
        </Col>
      </Row>
      <Row>
        <Col>
          <LinkBox to="#">
            <TransferAlt size={60} />
            Telegraphic Transfer
          </LinkBox>
        </Col>
        <Col>
          <LinkBox to="#">
            <List size={60} />
            Manage Transfer
          </LinkBox>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
