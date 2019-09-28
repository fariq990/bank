import React from "react";
import { Form } from "react-bootstrap";

const TextField = ({
  input,
  label,
  placeholder,
  disabled,
  meta: { touched, error, submitError }
}) => (
  <Form.Group style={{ textAlign: "left" }}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      {...input}
      type={input.type}
      placeholder={placeholder}
      disabled={disabled}
      isInvalid={touched && error}
    />
    {touched && (error || submitError) && (
      <Form.Control.Feedback type="invalid">
        {error || submitError}
      </Form.Control.Feedback>
    )}
  </Form.Group>
);

export default TextField;
