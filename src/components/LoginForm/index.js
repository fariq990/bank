import React, { useState, useContext } from "react";
import { Form, Field } from "react-final-form";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { FORM_ERROR } from "final-form";

import { TextField } from "components/fields";
import { DataContext } from "contexts/DataContext";

const LoginForm = ({ history }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { login } = useContext(DataContext);

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const back = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onSubmit = values => {
    if (currentPage === 1) {
      if (values.username === "user1") {
        next();
      } else {
        return { [FORM_ERROR]: "Username not found" };
      }
    } else if (currentPage === 2) {
      if (values.password === "user1") {
        login();
        history.push("/dashboard");
      } else {
        return { [FORM_ERROR]: "Wrong password" };
      }
    }
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, submitError }) => (
          <form onSubmit={handleSubmit}>
            {currentPage === 1 && (
              <>
                <Field
                  name="username"
                  component={TextField}
                  type="text"
                  label="Username ('user1')"
                  placeholder="Enter your username"
                  disabled={false}
                  validate={val => !val && "Required"}
                />
                {submitError && (
                  <span
                    style={{
                      display: "block",
                      fontSize: "80%",
                      color: "#dc3545",
                      textAlign: "left"
                    }}
                  >
                    {submitError}
                  </span>
                )}
                <Button type="submit" disabled={submitting} variant="secondary">
                  Next
                </Button>
              </>
            )}

            {currentPage === 2 && (
              <>
                <Field
                  name="password"
                  component={TextField}
                  type="password"
                  label="Password ('user1')"
                  placeholder="Enter your password"
                  disabled={false}
                  validate={val => !val && "Required"}
                />
                {submitError && (
                  <span
                    style={{
                      display: "block",
                      fontSize: "80%",
                      color: "#dc3545",
                      textAlign: "left"
                    }}
                  >
                    {submitError}
                  </span>
                )}
                <Button
                  style={{ marginRight: "20px" }}
                  onClick={back}
                  variant="outline-secondary"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={submitting} variant="secondary">
                  Log In
                </Button>
              </>
            )}
          </form>
        )}
      ></Form>
      <br />
      {currentPage !== 1 && (
        <Button variant="link" type="button" onClick={back}>
          Back
        </Button>
      )}
    </>
  );
};

export default withRouter(LoginForm);
