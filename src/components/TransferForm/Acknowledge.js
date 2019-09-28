import React from "react";
import { DoneAll } from "styled-icons/material/DoneAll";
import { ErrorAlt } from "styled-icons/boxicons-regular/ErrorAlt";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";

const Success = styled(DoneAll)`
  color: green;
`;

const Failed = styled(ErrorAlt)`
  color: red;
`;

const Div = styled("div")`
  svg {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 30px;
    font-size: 22px;
  }
`;

const Acknowledge = ({ history, transferStatus, setCurrentPage }) => {
  console.log({ history });
  return (
    <Div>
      {transferStatus === "success" ? (
        <>
          <Success size={80} />
          <p>Transfer Success</p>
        </>
      ) : (
        <>
          <Failed size={80} />
          <p>Transfer Failed</p>
        </>
      )}
      <Button
        type="button"
        onClick={() => history.push("/dashboard")}
        variant="secondary"
      >
        Done
      </Button>
    </Div>
  );
};

export default withRouter(Acknowledge);
