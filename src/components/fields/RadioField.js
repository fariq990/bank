import React from "react";
import { Form } from "react-bootstrap";

const RadioField = ({
  input,
  id,
  label,
  disabled,
  meta: { touched, error }
}) => (
  <Form.Check
    style={{ textAlign: "left" }}
    type={input.type}
    id={`radiofield-${id}`}
  >
    <Form.Check.Input
      {...input}
      type={input.type}
      disabled={disabled}
      isInvalid={touched && error}
    />
    <Form.Check.Label>{label}</Form.Check.Label>
  </Form.Check>
);

export default RadioField;
