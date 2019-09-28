import React from "react";
import { Form } from "react-bootstrap";

const SelectField = ({
  input,
  label,
  disabled,
  options,
  meta: { touched, error }
}) => (
  <Form.Group style={{ textAlign: "left" }}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      {...input}
      as="select"
      disabled={disabled}
      isInvalid={touched && error}
    >
      <option value="">Choose...</option>
      {options.length > 0 &&
        options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
    </Form.Control>
    {touched && error && (
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    )}
  </Form.Group>
);

export default SelectField;
