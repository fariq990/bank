import React, { useState } from "react";
import { Form } from "react-final-form";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";

import Confirmation from "./Confirmation";
import TransferDetail from "./TransferDetail";

const TransferForm = ({ history, setTransferStatus }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const back = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    } else {
      history.push("/dashboard");
    }
  };

  const onSubmit = async values => {
    if (currentPage === 2) {
      setTransferStatus("success");
    } else {
      next();
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          {currentPage === 1 && (
            <>
              <TransferDetail />
              <Button
                style={{ marginRight: "20px" }}
                onClick={back}
                variant="outline-secondary"
              >
                Cancel
              </Button>
              <Button type="submit" disabled={submitting} variant="secondary">
                Proceed
              </Button>
            </>
          )}

          {currentPage === 2 && (
            <>
              <Confirmation values={values} />
              <Button
                style={{ marginRight: "20px" }}
                onClick={back}
                variant="outline-secondary"
              >
                Cancel
              </Button>
              <Button type="submit" disabled={submitting} variant="secondary">
                Confirm
              </Button>
            </>
          )}
        </form>
      )}
    ></Form>
  );
};

export default withRouter(TransferForm);
