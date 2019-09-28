// suitable for radio | checkbox field
// to show only one validation error
import React from "react";
import { Field } from "react-final-form";

const ErrorField = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? (
        <span
          style={{
            fontSize: "80%",
            color: "#dc3545",
            display: "block",
            textAlign: "left"
          }}
        >
          {error}
        </span>
      ) : null
    }
  />
);

export default ErrorField;
