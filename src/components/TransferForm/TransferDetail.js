import React from "react";
import { Field } from "react-final-form";
import addDays from "date-fns/addDays";
import format from "date-fns/format";

import { from, to } from "mocks/accounts.json";
import {
  ErrorField,
  RadioField,
  SelectField,
  TextField
} from "components/fields";

const formatDate = date => {
  return format(date, "dd MMMM yyyy");
};

const TransferDetail = () => {
  const today = new Date();
  const tomorrow = addDays(new Date(), 1);

  return (
    <>
      <Field
        name="from"
        component={SelectField}
        label="From"
        disabled={false}
        validate={val => !val && "Required"}
        options={from}
      />

      <Field
        name="to"
        component={SelectField}
        label="To"
        disabled={false}
        validate={val => !val && "Required"}
        options={to}
      />

      <Field
        name="amount"
        component={TextField}
        type="number"
        label="Amount"
        placeholder="Enter amount"
        disabled={false}
        validate={val => !val && "Required"}
      />
      <Field
        name="recipientref"
        component={TextField}
        type="text"
        label="Recipient Reference"
        placeholder="Enter recipient referenct"
        disabled={false}
        validate={val => !val && "Required"}
      />
      <Field
        name="otherdetail"
        component={TextField}
        type="text"
        label="Other Payment Detail (Optional)"
        placeholder="Enter other payment detail"
        disabled={false}
      />

      {[
        { value: formatDate(today), label: "Now" },
        { value: formatDate(tomorrow), label: "Later" }
      ].map((opt, idx) => (
        <Field
          key={idx}
          id={idx}
          name="when"
          component={RadioField}
          type="radio"
          label={opt.label}
          disabled={false}
          value={opt.value}
          validate={val => !val && "Required"}
        />
      ))}
      <ErrorField name="when" />
    </>
  );
};

export default TransferDetail;
