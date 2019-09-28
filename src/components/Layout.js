import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "components/Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Container fluid>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>{children}</Col>
      </Row>
    </Container>
  </>
);

export default Layout;
